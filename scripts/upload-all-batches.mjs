import fs from 'node:fs';

const JWT = process.env.CF_PAGES_UPLOAD_JWT;
if (!JWT) {
  console.error("CF_PAGES_UPLOAD_JWT is required.");
  process.exit(1);
}

const items = JSON.parse(fs.readFileSync('/tmp/hashes-to-upload.json', 'utf8'));
console.log(`Starting upload of ALL ${items.length} unique assets...`);

const MAX_FILES_PER_BATCH = 3;
const MAX_BYTES_PER_BATCH = 400 * 1024; // 400 KB unencoded

const batches = [];
let currentBatch = [];
let currentBatchSize = 0;

for (const item of items) {
  if (currentBatch.length >= MAX_FILES_PER_BATCH || (currentBatchSize + item.size > MAX_BYTES_PER_BATCH && currentBatch.length > 0)) {
    batches.push(currentBatch);
    currentBatch = [];
    currentBatchSize = 0;
  }
  currentBatch.push(item);
  currentBatchSize += item.size;
}
if (currentBatch.length > 0) {
  batches.push(currentBatch);
}

console.log(`Split into ${batches.length} upload batches.`);

for (let i = 0; i < batches.length; i++) {
  const batch = batches[i];
  const payload = batch.map(item => {
    const content = fs.readFileSync(item.path).toString('base64');
    return {
      key: item.hash,
      value: content,
      metadata: {
        contentType: item.contentType
      },
      base64: true
    };
  });

  const batchSizeKb = (payload.reduce((acc, p) => acc + p.value.length, 0) / 1024).toFixed(0);
  process.stdout.write(`Uploading batch ${i + 1}/${batches.length} (${batch.length} files, ${batchSizeKb} KB)... `);

  let attempts = 0;
  let uploaded = false;
  while (attempts < 5 && !uploaded) {
    attempts++;
    try {
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
        console.error(`\nAttempt ${attempts} failed (${uploadRes.status}): ${err.slice(0, 150)}`);
        if (attempts < 5) {
          await new Promise(r => setTimeout(r, 1500 * attempts));
        } else {
          process.exit(1);
        }
      } else {
        uploaded = true;
        console.log(`OK`);
      }
    } catch (err) {
      console.error(`\nAttempt ${attempts} error: ${err.message}`);
      if (attempts < 5) {
        await new Promise(r => setTimeout(r, 1500 * attempts));
      } else {
        process.exit(1);
      }
    }
  }
}

console.log("All assets uploaded successfully!");

// Upsert all hashes
console.log("Upserting all asset hashes...");
const allHashes = items.map(i => i.hash);
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
  console.log("All asset hashes upserted successfully!");
}
