/**
 * Cloudflare Pages Function - Proxy seguro para la API de Gemini
 * Auto-selecciona el modelo más moderno disponible en la cuenta.
 */

let cachedModel = null;

async function getBestModel(apiKey) {
  if (cachedModel) return cachedModel;

  const response = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models?key=${apiKey}`
  );
  const data = await response.json();
  const models = (data.models || []).filter(m =>
    m.supportedGenerationMethods?.includes("generateContent") &&
    m.name.includes("gemini") &&
    !m.name.includes("embedding") &&
    !m.name.includes("aqa") &&
    !m.name.includes("vision")
  );

  const score = (m) => {
    const n = m.name;
    let s = 0;
    if (n.includes("2.5"))      s += 500;
    else if (n.includes("2.0")) s += 400;
    else if (n.includes("2"))   s += 300;
    else if (n.includes("1.5")) s += 100;
    if (n.includes("pro"))      s += 30;
    else if (n.includes("flash")) s += 15;
    else if (n.includes("nano")) s += 5;
    if (n.includes("latest"))   s += 2;
    return s;
  };

  models.sort((a, b) => score(b) - score(a));

  cachedModel = models.length > 0
    ? models[0].name.replace("models/", "")
    : "gemini-1.5-flash";

  console.log(`🤖 Modelo seleccionado: ${cachedModel}`);
  return cachedModel;
}

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

  const model = await getBestModel(apiKey);

  const geminiResponse = await fetch(
    `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body)
    }
  );

  const data = await geminiResponse.json();

  return new Response(JSON.stringify({ ...data, _modelUsed: model }), {
    status: geminiResponse.status,
    headers: {
      "Content-Type": "application/json",
      "Access-Control-Allow-Origin": "*"
    }
  });
}

export async function onRequestGet(context) {
  const { env } = context;
  const apiKey = env.GEMINI_API_KEY;
  if (!apiKey) {
    return new Response(JSON.stringify({ error: "Sin clave." }), { status: 500 });
  }
  const model = await getBestModel(apiKey);
  return new Response(JSON.stringify({ model }), {
    headers: { "Content-Type": "application/json" }
  });
}

export async function onRequestOptions() {
  return new Response(null, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET, POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type"
    }
  });
}
