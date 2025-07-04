export async function onRequestGet(context) {
  return new Response("Hello from Cloudflare Pages Function!", {
    headers: { "content-type": "text/plain" }
  });
}
