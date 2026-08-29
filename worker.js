const COUNT_KEY = "radhe-radhe-count";

export default {
  async fetch(request, env) {
    const url = new URL(request.url);

    if (url.pathname === "/api/chant-count") {
      if (request.method === "GET") {
        return jsonResponse({ count: await getCount(env) });
      }
      if (request.method === "POST") {
        return jsonResponse({ count: await incrementCount(env) });
      }
      return new Response("Method Not Allowed", { status: 405 });
    }

    return env.ASSETS.fetch(request);
  },
};

async function getCount(env) {
  const value = await env.CHANT_KV.get(COUNT_KEY);
  return value ? parseInt(value, 10) : 0;
}

async function incrementCount(env) {
  const next = (await getCount(env)) + 1;
  await env.CHANT_KV.put(COUNT_KEY, String(next));
  return next;
}

function jsonResponse(data) {
  return new Response(JSON.stringify(data), {
    headers: { "content-type": "application/json" },
  });
}
