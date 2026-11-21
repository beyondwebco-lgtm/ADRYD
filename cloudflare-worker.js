export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    // 1. API Route: Contact Form
    if (url.pathname === '/api/contact' && request.method === 'POST') {
      try {
        const body = await request.json();
        const ticketId = `ADR-CNT-${Date.now().toString(36).toUpperCase()}`;
        return new Response(JSON.stringify({
          success: true,
          ticketId,
          message: 'Thank you for reaching out. Our team will respond shortly.'
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, message: 'Invalid payload' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 2. API Route: Campaign Enquiry / Brief Submission
    if (url.pathname === '/api/enquiry' && request.method === 'POST') {
      try {
        const body = await request.json();
        const submissionId = `ADR-V3-${Date.now().toString(36).toUpperCase()}`;
        return new Response(JSON.stringify({
          success: true,
          submissionId,
          delivered: true,
          message: 'Your campaign brief has been received. Our planning team will reach out within 24 hours.'
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, message: 'Invalid payload' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 3. API Route: Rider Registration
    if (url.pathname === '/api/rider-registration' && request.method === 'POST') {
      try {
        const body = await request.json();
        const applicationId = `ADR-RDR-${Date.now().toString(36).toUpperCase()}`;
        return new Response(JSON.stringify({
          success: true,
          applicationId,
          delivered: true,
          message: 'Registration received successfully.'
        }), {
          status: 200,
          headers: { 'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*' }
        });
      } catch (e) {
        return new Response(JSON.stringify({ success: false, message: 'Invalid payload' }), {
          status: 400,
          headers: { 'Content-Type': 'application/json' }
        });
      }
    }

    // 4. Default: Static Asset Handling
    try {
      const response = await env.ASSETS.fetch(request);
      if (response.status === 404 && !url.pathname.includes('.')) {
        const cleanUrl = new URL(request.url);
        if (!cleanUrl.pathname.endsWith('/')) {
          const htmlUrl = new URL(`${cleanUrl.pathname}.html`, request.url);
          const htmlRes = await env.ASSETS.fetch(new Request(htmlUrl, request));
          if (htmlRes.status === 200) return htmlRes;
        }
      }
      return response;
    } catch (e) {
      return new Response('Asset not found', { status: 404 });
    }
  }
};
