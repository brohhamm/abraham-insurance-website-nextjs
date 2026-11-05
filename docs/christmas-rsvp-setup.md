# Christmas RSVP release checklist

Prepared for the existing `abraham-insurance-website-nextjs` project only.
Do not enable registration until the following checks pass. No paid services
have been purchased or provisioned by this change.

## Required production configuration

Use a durable Upstash Redis database with persistence enabled, no eviction and
sufficient capacity. A temporary/expiring test database is unsuitable. Add
`UPSTASH_REDIS_REST_URL` and `UPSTASH_REDIS_REST_TOKEN` as server-only variables.
No schema migration is needed; the atomic registration operation initializes the
event key. Redis EVAL performs cutoff, duplicate checks, capacity reservation and
notification outbox writes in one operation. Never replace this with a public
file, browser storage, instance memory, or an eventually consistent counter.

Add independent random secrets (at least 32 characters each): `RSVP_HASH_SECRET`
and `RSVP_ADMIN_TOKEN`. Set them directly in Vercel; do not put them in chat,
commits, query strings or analytics. Keep the hash secret stable for the event.
Share the staff access code with authorized staff using the agency's secure
channel. At `/events/staff`, staff enter the code; attendee details are retrieved
by authenticated POST only, held in page memory, and never stored in the browser.
Use a trusted device and lock the list after printing. Protect printed lists.

Verify existing `RESEND_API_KEY` and `QUOTE_FROM_EMAIL`. Set
`RSVP_NOTIFICATION_EMAIL` explicitly to Abraham's confirmed notification inbox.
Do not assume the general quote recipient belongs to him. Email is sent for every
registration as a staff receipt and SMS fallback. No attendee messages are sent.

## SMS service

Prepared provider: Twilio Programmable Messaging. This is an integration option,
not an account that has been created. Reuse an existing authorized provider if
available before purchasing anything. Twilio configuration:

- `TWILIO_ACCOUNT_SID`
- `TWILIO_AUTH_TOKEN` (server secret)
- `TWILIO_MESSAGING_SERVICE_SID`
- An SMS-capable sender attached to that Messaging Service, approved for its
  intended US traffic (A2P 10DLC registration for a local sender, or the applicable
  toll-free verification). Confirm Abraham can receive messages at +17143889533.

The recipient is fixed in server code to +17143889533. Visitors cannot change it.
Costs include the sender's recurring fee, outbound SMS segments and carrier fees,
plus applicable registration fees. Unicode names and long contact details can
produce multiple segments. Obtain an account-specific quote and user approval
before purchasing or activating paid service; no fixed budget is assumed.

The API acceptance response is NOT proof of delivery. Check the returned message
SID in Twilio and confirm the synthetic test is received on Abraham's phone.
The staff list distinguishes accepted/unconfirmed, pending, and failed/unknown.
For ambiguous results, check provider logs before retrying; automatically resending
could generate duplicate messages. No full provider error/body or attendee data
is logged. Notification outcomes are persisted in Redis.

## Recovery, capacity and privacy

Staff can refresh/print the guest list, process pending notification records, and
cancel a party (with confirmation) to release its seats atomically. Cancellations
are retained for audit and excluded from the check-in list. A cancelled request
cannot be replayed as a successful RSVP. If a worker stops while sending, staff
must reconcile `sending` outcomes with the provider before resetting anything.
There are no automatic retries of an SMS with an uncertain provider outcome.

Public registration is disabled unless durable storage, independent admin/hash
secrets and email fallback configuration are present. Missing SMS configuration
does not erase a saved registration; it is recorded as failed/unknown, and the
email fallback is attempted. A storage failure never produces a success message.
The store expires 120 days after its last change; delete event data and secure
prints earlier when no longer needed, according to agency retention procedures.
No searches, registration details or identifiers are sent to analytics.

## Drawing rules still pending

Public wording is “Prize-drawing details will be announced.” Keep it that way
until the agency approves age eligibility, attendance requirements, carryover
between drawings and eligible social accounts. The intended draft is one entry
per named eligible guest, plus one verified-PNI bonus per person (not per policy).
Self-reporting does not verify eligibility. Social follows are checked by Suzee;
existing followers receive equal credit. Reviews never earn entries. The staff
list records self-reported status but does not award entries or verify clients.

## Before production

Verify English/Spanish UI and mobile layouts. Test saved registrations, a party
of multiple guests, same-request retries, same-contact duplicates, concurrent
attempts for the last seats, the November 23 Pacific deadline, provider failures,
SMS delivery and fallback email. Ensure unauthenticated staff requests cannot
read data. Print a synthetic list and test cancellation. Remove synthetic records
and verify the counter is zero before opening registration. Do not deploy a mock
store or test credentials. Do not claim live registration or SMS delivery before
these production checks pass.

Provider references:
https://upstash.com/docs/redis/features/restapi
https://www.twilio.com/docs/messaging/api/message-resource
https://www.twilio.com/en-us/sms/pricing/us
