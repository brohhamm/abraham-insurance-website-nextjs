# Christmas RSVP: text and email requests

English: /events/christmas-client-appreciation
Spanish: /es/eventos/convivio-navideno

The approved flow uses one form to prepare the same message for SMS to +17143889533 or Gmail/email to Abraham.aduran@farmersagency.com. Gmail opens its compose URL in a new tab with the recipient, localized subject and body encoded independently. The visitor must press Send. Gmail may require the visitor to sign in or select an account. A standard mailto option and copyable preview provide fallbacks if Gmail, popups or a local messaging app are unavailable. No new services, environment variables, automatic sending, storage or seat confirmations are introduced.

Staff must reply to confirm availability, maintain the named guest list (maximum 50 excluding staff), resolve duplicate requests, verify primary named insured status, and prepare the check-in list for Suzee. Update the page if the event fills. The form closes at midnight following November 23, 2026 Pacific time. Staff review any messages received after that time.

The website does not store form details in browser storage, a database, website URLs or analytics. Only the visitor-initiated text/email handoff includes contact details; Gmail's compose URL necessarily contains its prepared message. Keep optional requests free of sensitive medical information. No delivery is verified by this website; staff must reply to confirm availability. Scoped holiday styles apply only inside .holiday-event.

Drawing rules remain pending: public wording is “Prize-drawing details will be announced.” Do not promise or award entries until agency-approved rules resolve eligibility, attendance, carryover and social accounts. The intended draft is one entry per eligible named guest and one verified primary-named-insured bonus per person, not per policy. Social follows require staff verification, with equal credit for existing followers; reviews never earn entries.

Verification covers English/Spanish SMS, Gmail and mailto payload parity, fixed recipients, injection-safe encoding, validation, cutoff boundaries, responsive layouts and edit/copy fallback. Do not claim delivery without receipt in Abraham's phone or inbox. Synthetic tests must not send messages.

## Rollback baseline

Before this release, production was commit 4e21f5a9943b32820cf42af90beaa2ef7cd9eb56, deployment dpl_BKgkbUAqi6BsTFLHz6CEajEa2gvs (READY), on project prj_YIafbkMs0B3pbi4oy4SwbHYELsN6. Revert the new release commit through GitHub for a normal redeploy, or use the existing Vercel production rollback if an urgent regression occurs. No DNS or email configuration changes are part of this release.
