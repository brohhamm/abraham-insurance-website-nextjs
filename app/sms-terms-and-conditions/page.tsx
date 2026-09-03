import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "SMS Terms and Conditions",
  description: "SMS Terms and Conditions for Abel Duran Insurance Agency Inc.",
  alternates: {
    canonical: "/sms-terms-and-conditions",
    languages: {
      "en-US": "/sms-terms-and-conditions",
      "x-default": "/sms-terms-and-conditions",
    },
  },
};

export default function SmsTermsAndConditionsPage() {
  return <>
    <PageHero eyebrow="Legal" title="SMS Terms and Conditions">Effective Date: July 30, 2026</PageHero>
    <section className="section"><div className="shell legal-copy">
      <p>By opting in to receive SMS messages from Abel Duran Insurance Agency Inc., you agree to these SMS Terms and Conditions.</p>

      <h2>Types of Messages</h2>
      <p>You may receive customer-care and informational messages, including:</p>
      <ul>
        <li>Appointment confirmations and reminders</li><li>Follow-up messages</li>
        <li>Responses to insurance inquiries</li><li>Insurance quote updates</li>
        <li>Policy and renewal reminders</li><li>Account and customer-service notifications</li>
        <li>Requests to contact our office regarding an existing or requested service</li>
      </ul>

      <h2>Message Frequency</h2>
      <p>Messaging frequency may vary based on your interaction with our agency.</p>

      <h2>Charges</h2>
      <p>Message and data rates may apply according to your wireless carrier and mobile service plan.</p>

      <h2>Opting Out</h2>
      <p>To stop receiving SMS messages, reply STOP to any message.</p>
      <p>After opting out, you may receive one final confirmation message. You will no longer receive SMS messages unless you subsequently opt in again.</p>
      <p>To opt back in, reply START.</p>

      <h2>Help</h2>
      <p>For assistance, reply HELP, call <a href="tel:+19516538888">951-653-8888</a>, email <a href="mailto:aduran@farmersagent.com">aduran@farmersagent.com</a>, or visit:</p>
      <p><a href="https://agents.farmers.com/ca/moreno-valley/abel-duran/" target="_blank" rel="noreferrer">https://agents.farmers.com/ca/moreno-valley/abel-duran/</a></p>

      <h2>Privacy</h2>
      <p>SMS consent, mobile telephone numbers, and mobile opt-in information will not be shared with third parties or affiliates for marketing or promotional purposes.</p>
      <p>Review our <Link href="/privacy">Privacy Policy</Link> using the Privacy Policy page on this website.</p>

      <h2>Consent</h2>
      <p>Consent to receive SMS messages is not a condition of purchasing any product or service.</p>
      <p>Wireless carriers are not responsible for delayed or undelivered messages.</p>
    </div></section>
  </>;
}

