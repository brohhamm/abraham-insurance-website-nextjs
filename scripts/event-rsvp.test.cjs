const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const vm = require('node:vm');
const path = require('node:path');
const ts = require('typescript');
function load(file, overrides = {}) {
  const source = ts.transpileModule(fs.readFileSync(file, 'utf8'), {compilerOptions:{module:ts.ModuleKind.CommonJS,target:ts.ScriptTarget.ES2022}}).outputText;
  const exports = {};
  vm.runInNewContext(source, { exports, process, Buffer, URL, URLSearchParams, AbortSignal, Date,
    fetch: (...args) => global.fetch(...args), require: name => overrides[name] ?? (name.startsWith('.') ? load(path.resolve(path.dirname(file),name+'.ts'),overrides) : require(name)) });
  return exports;
}
const { parseRegistration, event } = load('lib/event-rsvp.ts');
const valid = () => ({name:'SYNTHETIC Test Guest',phone:'951-555-0100',email:'test@example.com',client:'unsure',guests:[],notes:'',locale:'en'});
test('Pacific deadline covers November 23 and closes November 24 at 00:00 PST', () => {
  assert.equal(event.deadline, Date.parse('2026-11-24T08:00:00Z'));
});
test('normalizes contact details and accepts bilingual names', () => {
  const r=parseRegistration({...valid(),name:'María Núñez',locale:'es'});
  assert.equal(r.phone,'+19515550100');assert.equal(r.locale,'es');
});
test('rejects invalid contacts, statuses, duplicate people and oversized parties', () => {
  for (const d of [{...valid(),phone:'123'},{...valid(),email:'invalid'},{...valid(),client:'verified'}, {...valid(),guests:[{name:'SYNTHETIC Test Guest',client:'no'}]}, {...valid(),guests:Array(50).fill({name:'Guest',client:'no'})}, {...valid(),notes:'x'.repeat(501)},null]) assert.throws(()=>parseRegistration(d));
});
test('strips arbitrary caller fields rather than trusting party size or raffle awards', () => {
  const r=parseRegistration({...valid(),partySize:0,entries:999,verified:true,guests:[{name:'Another Guest',client:'yes'}]});
  assert.equal(r.guests.length+1,2);assert.equal(r.entries,undefined);assert.equal(r.verified,undefined);
});
test('notifications have one fixed SMS recipient and preserve email fallback on SMS failure', async () => {
  const saved=global.fetch, env={...process.env};
  const updates=[],calls=[];
  const {notifyRegistration}=load('lib/event-notifications.ts',{'./event-store':{updateRecord:async(...args)=>{updates.push(args);return true;}}});
  Object.assign(process.env,{TWILIO_ACCOUNT_SID:'test',TWILIO_AUTH_TOKEN:'test',TWILIO_MESSAGING_SERVICE_SID:'test',RESEND_API_KEY:'test',QUOTE_FROM_EMAIL:'test@example.com',RSVP_NOTIFICATION_EMAIL:'coordinator@example.com'});
  global.fetch=async(url,options)=>{calls.push([url,options]);return {ok:!url.includes('twilio')};};
  try {
    await notifyRegistration({...valid(),reference:'CH-test',sms:'pending',emailStatus:'pending',created:'2026-11-05'});
    assert.equal(calls[0][1].body.get('To'),'+17143889533');
    assert.ok(calls[0][1].body.get('Body').includes('pending verification'));
    assert.equal(calls.length,2);assert.ok(calls[1][0].includes('resend'));
    assert.ok(updates.some(x=>x[1].sms==='failed-or-unknown-check-provider'));
  } finally {global.fetch=saved; process.env=env;}
});
test('already-claimed notification records never send again', async () => {
  const saved=global.fetch; let calls=0;
  global.fetch=async()=>{calls++;throw new Error('must not run');};
  const {notifyRegistration}=load('lib/event-notifications.ts',{'./event-store':{updateRecord:async()=>false}});
  try {await notifyRegistration({...valid(),reference:'CH-test'});assert.equal(calls,0);}finally{global.fetch=saved;}
});
test('provider acceptance is never labelled delivered',async()=>{
  const saved=global.fetch,env={...process.env},updates=[];
  Object.assign(process.env,{TWILIO_ACCOUNT_SID:'test',TWILIO_AUTH_TOKEN:'test',TWILIO_MESSAGING_SERVICE_SID:'test'});
  const {notifyRegistration}=load('lib/event-notifications.ts',{'./event-store':{updateRecord:async(...args)=>{updates.push(args);return true;}}});
  global.fetch=async()=>({ok:true,json:async()=>({sid:'SM'+'a'.repeat(32)})});
  try{await notifyRegistration({...valid(),reference:'CH-test'});assert.ok(updates.some(x=>x[1].sms==='accepted-not-confirmed-delivered'));assert.ok(!updates.some(x=>x[1].sms==='delivered'));}finally{global.fetch=saved;process.env=env;}
});
test('unconfigured environments stay closed and staff access requires a strong token',()=>{
  const env={...process.env};delete process.env.UPSTASH_REDIS_REST_URL;
  const {isRsvpConfigured,authorizeAdmin}=load('lib/event-store.ts');
  try {assert.equal(isRsvpConfigured(),false);process.env.RSVP_ADMIN_TOKEN='short';assert.equal(authorizeAdmin('short'),false);process.env.RSVP_ADMIN_TOKEN='s'.repeat(32);assert.equal(authorizeAdmin('s'.repeat(32)),true);assert.equal(authorizeAdmin('incorrect'),false);}finally{process.env=env;}
});
test('public API confirms only saved registrations and queues notifications once',async()=>{
  let saved=0;const callbacks=[];
  const {POST}=load('app/api/events/rsvp/route.ts',{
    'next/server':{NextResponse:{json:(data,options)=>new Response(JSON.stringify(data),options)},after:cb=>callbacks.push(cb)},
    '@/lib/event-rsvp':load('lib/event-rsvp.ts'),
    '@/lib/event-store':{isRsvpConfigured:()=>true,rateLimit:async()=>{},reserve:async()=>{saved++;return {code:saved===1?'created':'existing',reference:'CH-saved',registration:valid()};}},
    '@/lib/event-notifications':{notifyRegistration:async()=>{}},
  });
  const request=()=>new Request('https://example.com/api/events/rsvp',{method:'POST',headers:{origin:'https://example.com','content-type':'application/json','idempotency-key':'a'.repeat(36)},body:JSON.stringify(valid())});
  assert.equal((await (await POST(request())).json()).reference,'CH-saved');
  assert.equal((await POST(request())).status,200);assert.equal(callbacks.length,1);
});
test('public API rejects cross-origin requests, bad input and storage failure without confirmation',async()=>{
  const core=load('lib/event-rsvp.ts');
  const {POST}=load('app/api/events/rsvp/route.ts',{
    'next/server':{NextResponse:{json:(data,options)=>new Response(JSON.stringify(data),options)},after:()=>assert.fail('must not notify')},
    '@/lib/event-rsvp':core,
    '@/lib/event-store':{isRsvpConfigured:()=>true,rateLimit:async()=>{},reserve:async()=>{throw new core.RsvpError('unavailable',503);}},
    '@/lib/event-notifications':{notifyRegistration:async()=>{}},
  });
  for(const [origin,body,status] of [['https://evil.example',JSON.stringify(valid()),400],['https://example.com','bad-json',400],['https://example.com',JSON.stringify(valid()),503]]){
    const r=await POST(new Request('https://example.com/api/events/rsvp',{method:'POST',headers:{origin,'content-type':'application/json','idempotency-key':'a'.repeat(36)},body}));
    assert.equal(r.status,status);assert.equal((await r.json()).ok,undefined);
  }
});
test('unauthenticated staff requests cannot retrieve registrations',async()=>{
  const {POST}=load('app/api/events/admin/route.ts',{
    'next/server':{NextResponse:{json:(data,options)=>new Response(JSON.stringify(data),options)}},
    '@/lib/event-rsvp':load('lib/event-rsvp.ts'),
    '@/lib/event-store':{isRsvpConfigured:()=>true,rateLimit:async()=>{},authorizeAdmin:()=>false,registrations:()=>assert.fail('must not read records')},
    '@/lib/event-notifications':{},
  });
  const r=await POST(new Request('https://example.com/api/events/admin',{method:'POST',headers:{origin:'https://example.com'},body:JSON.stringify({token:'invalid'})}));
  assert.equal(r.status,401);assert.equal(r.headers.get('Cache-Control'),'no-store');assert.equal((await r.json()).records,undefined);
});
