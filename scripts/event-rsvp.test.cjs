const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const vm = require("node:vm");
const ts = require("typescript");
const exportsForTest = {};
vm.runInNewContext(ts.transpileModule(readFileSync("lib/event-rsvp.ts", "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS } }).outputText, { exports: exportsForTest });
const { parseRegistration, buildRsvpMessage, smsHref, event } = exportsForTest;
const input = { name: "Synthetic Test", phone: "(714) 555-0100", email: "test@example.com", client: "yes", guests: [{ name: "Test Guest", client: "unsure" }], notes: "A&B + café?", locale: "en" };
test("SMS uses fixed destination and preserves a fully encoded message", () => {
  const text = buildRsvpMessage(parseRegistration(input));
  const href = smsHref(text);
  assert.ok(href.startsWith("sms:+17143889533?&body="));
  assert.equal(decodeURIComponent(href.split("body=")[1]), text);
  assert.match(text, /Total attending: 2/);
  assert.match(text, /pending verification/);
  assert.match(text, /not confirmed until the agency replies/);
  assert.match(text, /A&B \+ café\?/);
});
test("Spanish message includes guests and agency confirmation requirement", () => {
  const text = buildRsvpMessage(parseRegistration({ ...input, locale: "es" }));
  assert.match(text, /pendiente de verificación/);
  assert.match(text, /Invitado 1: Test Guest/);
  assert.match(text, /no está confirmado/);
});
test("invalid contacts, duplicate guests and excess party sizes are rejected", () => {
  for (const data of [{ ...input, phone: "123" }, { ...input, email: "invalid" }, { ...input, guests: [{ name: input.name, client: "yes" }] }, { ...input, guests: Array(50).fill({ name: "Test Guest", client: "no" }) }]) assert.throws(() => parseRegistration(data));
});
test("deadline is the end of November 23 in Pacific time", () => {
  assert.equal(new Date(event.deadline).toISOString(), "2026-11-24T08:00:00.000Z");
});
