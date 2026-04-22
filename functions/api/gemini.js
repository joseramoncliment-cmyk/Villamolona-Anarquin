/**
 * Cloudflare Pages Function - Proxy seguro para la API de Gemini
 * La clave API vive en los Secrets de Cloudflare, nunca en el navegador.
 */
export async function onRequestPost(context) {
  const { request, env } = context;
  
  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "GEMINI_API_KEY no configurada en Cloudflare." }), {
      status: 500,
      headers: { "Content-Type": "application/json" }
    });
  }

  const body = await request.json();
  
  const geminiResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }
  );

  const data = await geminiResponse.json();

  return new Response(JSON.stringify(data), {
    status: geminiResponse.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

// Manejo de preflight CORS
export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
