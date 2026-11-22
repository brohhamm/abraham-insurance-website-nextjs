const {test}=require('node:test');
const assert=require('node:assert/strict');
const fs=require('node:fs');
const path=require('node:path');
const vm=require('node:vm');
const ts=require('typescript');
const root=path.resolve(__dirname,'..');
const cache=new Map();
function load(relative){
 const file=path.resolve(root,relative.endsWith('.ts')?relative:relative+'.ts');
 if(cache.has(file))return cache.get(file);
 const exports={};cache.set(file,exports);
 const code=ts.transpileModule(fs.readFileSync(file,'utf8'),{compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
 vm.runInNewContext(code,{exports,require:specifier=>load(specifier.startsWith('@/')?specifier.slice(2):path.relative(root,path.resolve(path.dirname(file),specifier)))});
 return exports;
}
test('all expanded services have corresponding bilingual guidance, live route mappings, and integrated questions',()=>{
 const {coveragePathways}=load('content/coverage-pathways');
 const {insuranceServices}=load('content/services');
 const {spanishServices}=load('content/spanish');
 const {routePairs}=load('lib/i18n');
 assert.equal(Object.keys(coveragePathways).length,10);
 for(const [slug,copy] of Object.entries(coveragePathways)){
  const en=insuranceServices.find(s=>s.slug===slug);
  const es=spanishServices.find(s=>s.englishSlug===slug);
  assert.ok(en&&es,slug);
  assert.equal(routePairs['/insurance/'+slug],'/es/'+es.slug);
  assert.ok(routePairs[copy.guide],copy.guide);
  assert.equal(copy.en.sections.length,copy.es.sections.length,slug);
  assert.equal(copy.en.questions.length,copy.es.questions.length,slug);
  for(const [locale,service] of [['en',en],['es',es]]){
   assert.ok(copy[locale].sections.every(s=>s.paragraphs.length>0));
   for(const q of copy[locale].questions)assert.ok(service.commonQuestions.some(x=>x.question===q.question&&x.answer===q.answer),q.question);
   assert.doesNotMatch(JSON.stringify(copy[locale]),/\u2014|\ufffd/);
  }
 }
});
test('new contractor guidance welcomes limited history and life example explains all three distinct generations',()=>{
 const {coveragePathways}=load('content/coverage-pathways');
 const contractor=JSON.stringify(coveragePathways['contractor-insurance'].en);
 assert.match(contractor,/New businesses and contractors with gaps/);
 assert.doesNotMatch(contractor,/must have.*two years|minimum.*two years/i);
 const life=JSON.stringify(coveragePathways['life-insurance'].en);
 for(const term of ['Generation 1','Generation 2','Generation 3','separate application','private mortgage insurance','nonguaranteed','attorney'])assert.ok(life.includes(term),term);
});
