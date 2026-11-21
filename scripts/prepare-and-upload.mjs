import fs from 'node:fs';
import path from 'node:path';
import { createFileHasher } from '/tmp/workers-utils/package/dist/asset-hash.mjs';

const JWT = process.env.CF_PAGES_UPLOAD_JWT;
if (!JWT) {
  console.error("CF_PAGES_UPLOAD_JWT environment variable is required.");
  process.exit(1);
}

const outDir = path.resolve('out');
if (!fs.existsSync(outDir)) {
  console.error("out/ directory does not exist. Please run next build first.");
  process.exit(1);
}

// MIME types map
const MIME_TYPES = {
  '.html': 'text/html',
  '.css': 'text/css',
  '.js': 'application/javascript',
  '.mjs': 'application/javascript',
  '.json': 'application/json',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif': 'image/gif',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp',
  '.txt': 'text/plain',
  '.xml': 'application/xml',
  '.webmanifest': 'application/manifest+json',
  '.glb': 'model/gltf-binary',
  '.gltf': 'model/gltf+json',
  '.woff': 'font/woff',
  '.woff2': 'font/woff2',
  '.ttf': 'font/ttf',
};

function getContentType(filePath) {
  const ext = path.extname(filePath).toLowerCase();
  return MIME_TYPES[ext] || 'application/octet-stream';
}

// 1. Ensure HTML files also have directory index.html if possible
console.log("Preparing files in out/...");
const entries = fs.readdirSync(outDir, { recursive: true, withFileTypes: true });
for (const entry of entries) {
  if (entry.isFile() && entry.name.endsWith('.html') && entry.name !== 'index.html' && entry.name !== '404.html') {
    const parentRel = path.relative(outDir, entry.parentPath || entry.path);
    const baseName = entry.name.replace(/\.html$/, '');
    const targetDir = parentRel ? path.join(outDir, parentRel, baseName) : path.join(outDir, baseName);
    const targetFile = path.join(targetDir, 'index.html');
    if (!fs.existsSync(targetDir)) {
      fs.mkdirSync(targetDir, { recursive: true });
    }
    const srcFile = path.join(entry.parentPath || entry.path, entry.name);
    if (!fs.existsSync(targetFile)) {
      fs.copyFileSync(srcFile, targetFile);
    }
  }
}

// 2. Hash all files
console.log("Initializing BLAKE3 hasher...");
const hasher = await createFileHasher();

const fileMap = new Map(); // relativePath -> { path, hash, size, contentType }
const hashMap = new Map(); // hash -> { path, contentType }

function walk(dir) {
  const items = fs.readdirSync(dir, { withFileTypes: true });
  for (const item of items) {
    const fullPath = path.join(dir, item.name);
    const relPath = path.relative(outDir, fullPath).split(path.sep).join('/');

    if (item.name === '.DS_Store' || item.name === '_worker.js' || item.name === '_redirects' || item.name === '_headers') {
      continue;
    }

    if (item.isDirectory()) {
      walk(fullPath);
    } else if (item.isFile()) {
      const stats = fs.statSync(fullPath);
      const hash = hasher(fullPath);
      const contentType = getContentType(fullPath);
      fileMap.set('/' + relPath, {
        path: fullPath,
        hash,
        size: stats.size,
        contentType,
      });
      if (!hashMap.has(hash)) {
        hashMap.set(hash, { path: fullPath, contentType, size: stats.size });
      }
    }
  }
}

walk(outDir);
console.log(`Found ${fileMap.size} files (${hashMap.size} unique hashes).`);

// 3. Check missing hashes with Cloudflare Pages API
console.log("Checking missing assets via POST /pages/assets/check-missing...");
const allHashes = Array.from(hashMap.keys());

const checkRes = await fetch("https://api.cloudflare.com/client/v4/pages/assets/check-missing", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${JWT}`
  },
  body: JSON.stringify({ hashes: allHashes })
});

if (!checkRes.ok) {
  const errText = await checkRes.text();
  console.error("check-missing failed:", checkRes.status, errText);
  process.exit(1);
}

const checkData = await checkRes.json();
const missingHashes = checkData.result || [];
console.log(`Missing hashes to upload: ${missingHashes.length} (Skipping ${allHashes.length - missingHashes.length} existing)`);

// 4. Upload missing assets
if (missingHashes.length > 0) {
  console.log("Uploading missing assets in batches...");
  // Group into batches of ~25MB or 100 files
  const BATCH_SIZE = 50;
  for (let i = 0; i < missingHashes.length; i += BATCH_SIZE) {
    const batch = missingHashes.slice(i, i + BATCH_SIZE);
    const payload = batch.map(hash => {
      const fileInfo = hashMap.get(hash);
      const content = fs.readFileSync(fileInfo.path).toString('base64');
      return {
        key: hash,
        value: content,
        metadata: {
          contentType: fileInfo.contentType
        },
        base64: true
      };
    });

    console.log(`Uploading batch ${Math.floor(i / BATCH_SIZE) + 1}/${Math.ceil(missingHashes.length / BATCH_SIZE)} (${batch.length} files)...`);
    const uploadRes = await fetch("https://api.cloudflare.com/client/v4/pages/assets/upload", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${JWT}`
      },
      body: JSON.stringify(payload)
    });

    if (!uploadRes.ok) {
      const err = await uploadRes.text();
      console.error("upload batch failed:", uploadRes.status, err);
      process.exit(1);
    }
  }
  console.log("All assets uploaded successfully!");
}

// 5. Upsert hashes
console.log("Upserting asset hashes via POST /pages/assets/upsert-hashes...");
const upsertRes = await fetch("https://api.cloudflare.com/client/v4/pages/assets/upsert-hashes", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": `Bearer ${JWT}`
  },
  body: JSON.stringify({ hashes: allHashes })
});

if (!upsertRes.ok) {
  console.warn("Warning: upsert-hashes returned non-200:", upsertRes.status);
} else {
  console.log("Asset hashes upserted successfully!");
}

// 6. Generate manifest
const manifest = {};
for (const [key, value] of fileMap.entries()) {
  manifest[key] = value.hash;
}

fs.writeFileSync('out-manifest.json', JSON.stringify(manifest, null, 2));
console.log(`Wrote out-manifest.json with ${Object.keys(manifest).length} entries.`);
