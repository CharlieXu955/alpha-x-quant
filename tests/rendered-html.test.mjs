import assert from "node:assert/strict";
import test from "node:test";

const workerUrl = new URL("../dist/server/index.js", import.meta.url);
workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
const { default: worker } = await import(workerUrl.href);

function request(path, init) {
  return worker.fetch(
    new Request(`http://localhost${path}`, init),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

const pages = [
  ["/", "Alpha X Quant", "Research built around evidence."],
  ["/research", "Systematic questions. Empirical answers.", "Alpha Discovery"],
  ["/about", "A research company at the intersection", "Jialu Xu"],
  ["/contact", "Start a focused conversation.", "Business Collaboration"],
];

for (const [path, heading, uniqueContent] of pages) {
  test(`renders ${path} with shared institutional structure`, async () => {
    const response = await request(path, { headers: { accept: "text/html" } });
    assert.equal(response.status, 200);
    assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

    const html = await response.text();
    assert.match(html, new RegExp(heading.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
    assert.match(html, new RegExp(uniqueContent.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"), "i"));
    assert.match(html, /Alpha X Quant LLC/);
    assert.match(html, /does not constitute investment advice/i);
    assert.doesNotMatch(html, /codex-preview|react-loading-skeleton|Your site is taking shape/i);
  });
}

test("contact page contains both complete contact workflows", async () => {
  const response = await request("/contact", { headers: { accept: "text/html" } });
  const html = await response.text();

  assert.match(html, /Business Collaboration/);
  assert.match(html, /Join Alpha X Quant/);
  assert.match(html, /name="company"/);
  assert.match(html, /name="background"/);
  assert.match(html, /name="purpose"/);
  assert.match(html, /name="interestArea"/);
  assert.equal((html.match(/<form/g) ?? []).length, 2);
});

test("contact endpoint rejects invalid submissions", async () => {
  const response = await request("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      formType: "business",
      name: "A",
      email: "invalid",
      purpose: "",
      message: "short",
    }),
  });

  assert.equal(response.status, 400);
  assert.match(await response.text(), /complete all required fields/i);
});

test("contact endpoint silently accepts honeypot submissions without delivery", async () => {
  const response = await request("/api/contact", {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify({
      formType: "business",
      name: "Bot Test",
      email: "bot@example.com",
      purpose: "Research collaboration",
      message: "This message must never be delivered.",
      website: "filled-by-bot",
    }),
  });

  assert.equal(response.status, 200);
  assert.match(await response.text(), /Message received/);
});
