"""Run with fakeredis[lua] installed in an isolated test environment. No network or PII."""
import concurrent.futures
import json
import pathlib
import re
import time
import fakeredis

source = pathlib.Path('lib/event-store.ts').read_text()
script = re.search(r'export const reserveScript = `(.*?)`;', source, re.S).group(1)
db = fakeredis.FakeRedis(decode_responses=True)

def reserve(i, size=1, deadline=None, digest='digest'):
    record = dict(reference=f'CH-test-{i}', guests=[dict(name=f'Guest {n}') for n in range(size-1)], sms='pending', emailStatus='pending')
    return json.loads(db.eval(script, 1, 'test', f'request-{i}', digest,
        deadline or int(time.time()*1000)+60000, f'email-{i}', f'phone-{i}', size, 50, json.dumps(record)))

# Concurrent requests for the last two seats.
assert reserve(0,48)['code']=='created'
with concurrent.futures.ThreadPoolExecutor(max_workers=20) as pool:
    results = list(pool.map(reserve,range(1,21)))
assert sum(r['code']=='created' for r in results)==2
assert json.loads(db.get('test'))['total']==50
assert reserve(0,48)['code']=='existing'
assert reserve(0,48,digest='changed')['code']=='conflict'
assert reserve(99)['code']=='full'
db.flushall()
assert reserve(1,deadline=1)['code']=='closed'
assert db.get('test') is None
assert reserve(1)['code']=='created'
# Reusing contact info with a new request key does not consume another seat.
record=dict(reference='CH-other',guests=[])
result=json.loads(db.eval(script,1,'test','other-key','digest',int(time.time()*1000)+60000,'email-1','phone-1',1,50,json.dumps(record)))
assert result['code']=='duplicate'
assert json.loads(db.get('test'))['total']==1
cancel_script=re.search(r'return redis\(\["EVAL", `(.*?)`',source,re.S).group(1)
assert db.eval(cancel_script,1,'test','CH-test-1','email-1','phone-1')==1
assert json.loads(db.get('test'))['total']==0
assert db.eval(cancel_script,1,'test','CH-test-1','email-1','phone-1')==0
assert reserve(1)['code']=='duplicate'
db.flushall()
print('Atomic Lua tests passed: simultaneous last seats, capacity, retries, changed payload, deadline, contact duplicates, cancellation and cancelled-request replay. Synthetic data removed.')
