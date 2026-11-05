"use client";
import { FormEvent, useState } from "react";
import type { Registration } from "@/lib/event-rsvp";
export function EventAttendees() {
  const [token, setToken] = useState(""), [records, setRecords] = useState<Registration[] | null>(null);
  const [error, setError] = useState(""), [busy, setBusy] = useState(false);
  async function load(e?: FormEvent, action?: string, reference?: string) {
    e?.preventDefault(); setBusy(true); setError("");
    try {
      const response = await fetch("/api/events/admin", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ token, action, reference }), cache: "no-store" });
      const data = await response.json();
      if (!response.ok) throw new Error("Access unavailable. Check the staff access code and service configuration.");
      setRecords(data.records);
    } catch { setError("Unable to load the guest list. Check your access code or contact the site administrator."); }
    finally { setBusy(false); }
  }
  return <section className="section"><div className="shell"><h1>Christmas event: staff guest list</h1><p>December 10, 2026 · 5–8 p.m. · All client status is self-reported and requires verification. Drawing rules and entries are not finalized.</p>
    <form className="quote-form rsvp-no-print" onSubmit={load}><label>Staff access code<input type="password" autoComplete="off" value={token} onChange={e => setToken(e.target.value)} required /></label><button className="button" disabled={busy}>Load / refresh list</button></form>
    {error && <p role="alert">{error}</p>}
    {records && <><div className="button-row rsvp-no-print"><button className="button" onClick={() => window.print()}>Print for Suzee</button><button className="button button-secondary" disabled={busy} onClick={() => load(undefined, "pending")}>Process pending notifications</button><button className="button button-secondary" onClick={() => { setRecords(null); setToken(""); }}>Lock guest list</button></div>
      <p>Reserved places: {records.filter(r => !r.cancelled).reduce((n, r) => n + r.guests.length + 1, 0)} / 50</p>
      <div className="rsvp-table"><table><thead><tr><th>Name / reference</th><th>Contact / requests</th><th>PNI? Verify</th><th>Arrived / social entries</th><th className="rsvp-no-print">Notifications / cancellation</th></tr></thead><tbody>{records.filter(r => !r.cancelled).flatMap(r => [
        <tr key={r.reference}><td>{r.name}<br /><small>{r.reference}</small></td><td>{r.phone}<br />{r.email}<br />{r.notes}</td><td>{r.client} (pending)</td><td>____________</td><td className="rsvp-no-print">SMS: {r.sms}<br />Email: {r.emailStatus}<br /><button disabled={busy} onClick={() => { if (window.confirm(`Cancel ${r.reference} and release all ${r.guests.length + 1} places?`)) void load(undefined, "cancel", r.reference); }}>Cancel party</button></td></tr>,
        ...r.guests.map((g, i) => <tr key={`${r.reference}-${i}`}><td>{g.name}<br /><small>Guest of {r.name}</small></td><td /> <td>{g.client} (pending)</td><td>____________</td><td className="rsvp-no-print" /></tr>),
      ])}</tbody></table></div></>}
  </div></section>;
}
