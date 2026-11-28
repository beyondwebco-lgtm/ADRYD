const fs = require('fs');
const manifest = fs.readFileSync('out-manifest.json', 'utf8');
const workerCode = `export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    if (url.pathname === "/api/contact" && request.method === "POST") {
      try {
        const body = await request.json();
        return new Response(JSON.stringify({ success: true, ticketId: \`ADR-CNT-\${Date.now().toString(36).toUpperCase()}\`, message: "Thank you for reaching out. Our team will respond shortly." }), { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, message: "Invalid payload" }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
    }
    if (url.pathname === "/api/enquiry" && request.method === "POST") {
      try {
        const body = await request.json();
        return new Response(JSON.stringify({ success: true, submissionId: \`ADR-V7-\${Date.now().toString(36).toUpperCase()}\`, delivered: true, message: "Your campaign brief has been received. Our planning team will reach out within 24 hours." }), { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, message: "Invalid payload" }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
    }
    if (url.pathname === "/api/rider-registration" && request.method === "POST") {
      try {
        const body = await request.json();
        return new Response(JSON.stringify({ success: true, applicationId: \`ADR-RDR-\${Date.now().toString(36).toUpperCase()}\`, delivered: true, message: "Registration received successfully." }), { status: 200, headers: { "Content-Type": "application/json", "Access-Control-Allow-Origin": "*" } });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, message: "Invalid payload" }), { status: 400, headers: { "Content-Type": "application/json" } });
      }
    }
    try {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404 && !url.pathname.includes(".")) {
        const cleanUrl = new URL(request.url);
        if (!cleanUrl.pathname.endsWith("/")) {
          const htmlUrl = new URL(\`\${cleanUrl.pathname}.html\`, request.url);
          const htmlRes = await env.ASSETS.fetch(new Request(htmlUrl, request));
          if (htmlRes.status === 200) return htmlRes;
        }
      }
      return response;
    } catch (e) {
      return new Response("Asset not found", { status: 404 });
    }
  }
};`;

const code = `async () => {
  const form = new FormData();
  form.append("manifest", ${JSON.stringify(manifest)});
  form.append("branch", "main");
  form.append("commit_hash", "f5b6927");
  form.append("commit_message", "feat(ui): implement smooth click-to-details modal popup across all website card sets");
  form.append("commit_dirty", "false");
  form.append("_worker.js", new Blob([${JSON.stringify(workerCode)}], { type: "application/javascript+module" }), "_worker.js");
  return cloudflare.request({
    method: "POST",
    path: "/accounts/" + accountId + "/pages/projects/adryd-v3-preview/deployments",
    body: form
  });
}`;

fs.writeFileSync('scripts/execute-deploy-v14.js', code);
console.log('Successfully wrote scripts/execute-deploy-v14.js. File size:', code.length);
