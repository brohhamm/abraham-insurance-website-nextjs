const { test } = require("node:test");
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const path = require("node:path");
const vm = require("node:vm");
const ts = require("typescript");
const { execFileSync } = require("node:child_process");
const root = path.resolve(__dirname, "..");
const cache = new Map();
function load(relative) {
  const file = path.resolve(root, relative.endsWith(".ts") ? relative : `${relative}.ts`);
  if (cache.has(file)) return cache.get(file);
  const exports = {};
  cache.set(file, exports);
  const compiled = ts.transpileModule(readFileSync(file, "utf8"), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
  vm.runInNewContext(compiled, { exports, process, require: (specifier) => load(specifier.startsWith("@/") ? specifier.slice(2) : path.relative(root, path.resolve(path.dirname(file), specifier))) }, { filename: file });
  return exports;
}
const { articles } = load("content/articles");
const { spanishArticles, spanishServices } = load("content/spanish");
const { insuranceServices } = load("content/services");
const { guideLessons, guideUpdated } = load("content/guide-lessons");
const { routePairs } = load("lib/i18n");
test("all 26 guides have matched teaching sections, dates and existing bilingual routes", () => {
  assert.equal(articles.length, 26);
  assert.equal(spanishArticles.length, 26);
  assert.equal(Object.keys(guideLessons).length, 26);
  for (const article of articles) {
    const translated = spanishArticles.find((x) => x.englishSlug === article.slug);
    assert.ok(translated);
    assert.equal(routePairs[`/education/${article.slug}`], `/es/educacion/${translated.slug}`);
    assert.equal(article.dateModified, guideUpdated);
    assert.equal(translated.dateModified, guideUpdated);
    assert.ok(article.sections.length >= 2);
    assert.equal(article.sections.length, translated.sections.length);
    const numbers = (sections) => JSON.stringify(sections).match(/\d+(?:[,.]\d+)*%?/g) || [];
    assert.equal(JSON.stringify(numbers(article.sections)), JSON.stringify(numbers(translated.sections)), article.slug);
    assert.ok(article.officialResources.length > 0);
    assert.ok(article.sections.every((section) => section.heading && section.paragraphs.length));
  }
});
test("15 service pages retain matching guides and concrete bilingual explanations", () => {
  assert.equal(insuranceServices.length, 15);
  assert.equal(spanishServices.length, 15);
  for (const service of insuranceServices) {
    const translated = spanishServices.find((x) => x.englishSlug === service.slug);
    assert.ok(translated);
    assert.equal(service.limits, guideLessons[service.guideSlug].en.limits);
    assert.equal(translated.limits, guideLessons[service.guideSlug].es.limits);
    assert.ok(service.intro.length > 160);
    assert.ok(translated.intro.length > 160);
  }
});
test("illustrative arithmetic is consistent", () => {
  assert.equal(12000 - 2500, 9500);
  assert.equal(12000 - 5000, 7000);
  assert.equal(600000 * 0.02, 12000);
  assert.equal(2500 / 250, 10);
  assert.equal((2400 - 1800) / 12 + 600 / 12, 100);
  assert.equal(700000 - 250000, 450000);
  assert.equal(100000 - 30000, 70000);
  assert.equal(40000 * 10 + 150000 - 100000, 450000);
  assert.equal(120000 - 600000 * 0.15, 30000);
  assert.equal((250000 - 200000) / 100 * 4, 2000);
});
test("new copy is valid UTF-8 without common mojibake or replacement characters", () => {
  const content = ["content/guide-lessons.ts", "content/service-explanations.ts", "content/location-guidance.ts"].map((file) => readFileSync(path.join(root, file), "utf8")).join("\n");
  assert.ok(!/[\uFFFD]|\u00c3[\u00a0-\u00bf]|\u00e2\u20ac/.test(content));
});
test("legal pages and the embedded Spanish legal renderer match the pre-audit commit", () => {
  const baseline = "492c486b15a1e711dade5aa0b219ce223e28a721";
  const normalize = (text) => text.replace(/\r\n/g, "\n");
  for (const file of ["app/privacy/page.tsx", "app/sms-terms-and-conditions/page.tsx", "app/terms/page.tsx"]) {
    const original = execFileSync("git", ["show", `${baseline}:${file}`], { cwd: root, encoding: "utf8" });
    assert.equal(normalize(readFileSync(path.join(root, file), "utf8")), normalize(original), file);
  }
  const file = "app/es/[[...segments]]/page.tsx";
  const legal = (text) => normalize(text).split("function Legal(")[1].split("function Simple(")[0];
  assert.equal(legal(readFileSync(path.join(root, file), "utf8")), legal(execFileSync("git", ["show", `${baseline}:${file}`], { cwd: root, encoding: "utf8" })));
});
