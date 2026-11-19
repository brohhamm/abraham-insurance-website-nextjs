const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const root = path.resolve(__dirname, '..');
const load = () => import('../lib/site-search.mjs');
const entries = [
  { href:'/insurance/landlord-insurance', title:'Landlord Insurance', description:'LLC rental portfolios and DP-3.', locale:'en' },
  { href:'/es/seguro-para-propietarios', title:'Seguro para propietarios', description:'Propiedades de alquiler y cotización.', locale:'es' },
  { href:'/inland-marine-insurance', title:'Inland Marine', description:'Equipment rented to others.', locale:'en' },
  { href:'/api/quote', title:'Landlord private', description:'Hidden submission', locale:'en' },
  { href:'https://evil.example', title:'Landlord', description:'External', locale:'en' },
];
test('search prioritizes relevant selected-language public pages', async () => {
  const { searchPublicPages } = await load();
  assert.equal(searchPublicPages(entries, 'landlord', 'en')[0].href, '/insurance/landlord-insurance');
  assert.equal(searchPublicPages(entries, 'rental', 'es')[0].href, '/es/seguro-para-propietarios');
  assert.equal(searchPublicPages(entries, 'equipment', 'en')[0].href, '/inland-marine-insurance');
});
test('Spanish accents and case match without returning everything for punctuation', async () => {
  const { searchPublicPages, normalizeSearch } = await load();
  assert.equal(normalizeSearch('COTIZACIÓN'), 'cotizacion');
  assert.equal(searchPublicPages(entries, 'COTIZACION', 'es')[0].locale, 'es');
  assert.deepEqual(searchPublicPages(entries, '<script>alert(1)</script>', 'en'), []);
  assert.deepEqual(searchPublicPages(entries, '!!!', 'en'), []);
});
test('private, internal, API, query-string and external paths are never indexed', async () => {
  const { isPublicSearchPath, searchPublicPages } = await load();
  for (const href of ['/api/quote','/es/api/quote','/private/people','/admin','/_next/data','//evil.example','/search','/es/buscar','/contact?email=private@example.com']) assert.equal(isPublicSearchPath(href), false, href);
  assert.equal(searchPublicPages(entries, 'landlord', 'en').some(x => x.href.includes('api')), false);
});
test('search UI renders text safely and does not transmit queries', () => {
  const ui = fs.readFileSync(path.join(root, 'components/site-search.tsx'), 'utf8');
  assert.ok(ui.includes('{entry.title}') && ui.includes('{entry.description}'));
  assert.doesNotMatch(ui, /dangerouslySetInnerHTML|localStorage|sessionStorage|fetch\(|track\(/);
  assert.ok(ui.includes('showModal()') && ui.includes('onCancel=') && ui.includes('trigger.current?.focus()'));
  const index = fs.readFileSync(path.join(root, 'lib/search-index.ts'), 'utf8');
  assert.doesNotMatch(index.replace(/\/\/.*$/gm,''), /process\.env|readFile|RESEND_API_KEY/);
});

test('the real public index has unique bilingual routes and specialty search terms', async () => {
  const ts = require('typescript');
  const vm = require('node:vm');
  const cache = new Map();
  function loadTs(relative) {
    const file = path.resolve(root, relative.endsWith('.ts') ? relative : `${relative}.ts`);
    if (cache.has(file)) return cache.get(file);
    const exports = {};
    cache.set(file, exports);
    const compiled = ts.transpileModule(fs.readFileSync(file, 'utf8'), { compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2022 } }).outputText;
    vm.runInNewContext(compiled, { exports, require: specifier => specifier.endsWith('.mjs') ? require(path.resolve(root, specifier.replace(/^@\//,''))) : loadTs(specifier.startsWith('@/') ? specifier.slice(2) : path.relative(root, path.resolve(path.dirname(file), specifier))) });
    return exports;
  }
  const index = loadTs('lib/search-index').buildSearchIndex();
  const pairs = loadTs('lib/i18n').routePairs;
  const allowed = new Set([...Object.keys(pairs), ...Object.values(pairs)]);
  assert.equal(index.length, new Set(index.map(entry => entry.href)).size);
  assert.ok(index.length > 100);
  for (const entry of index) assert.ok(allowed.has(entry.href), entry.href);
  const { searchPublicPages } = await load();
  assert.equal(searchPublicPages(index, 'Abraham', 'en')[0].href, '/abraham-nunez-chavez');
  assert.ok(searchPublicPages(index, 'vacant condos', 'en').some(entry => entry.href === '/insurance/landlord-insurance'));
  assert.equal(searchPublicPages(index, 'equipo', 'es')[0].locale, 'es');
});
