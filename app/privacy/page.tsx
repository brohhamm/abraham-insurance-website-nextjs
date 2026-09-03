import type { Metadata } from "next";
import { PageHero } from "@/components/ui";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Abel Duran Insurance Agency Inc.",
  alternates: {
    canonical: "/privacy",
    languages: { "en-US": "/privacy", "x-default": "/privacy" },
  },
};

export default function PrivacyPolicyPage() {
  return <>
    <PageHero eyebrow="Legal" title="Privacy Policy">Effective Date: July 30, 2026</PageHero>
    <section className="section"><div className="shell legal-copy">
      <p>Abel Duran Insurance Agency Inc. respects your privacy. This Privacy Policy explains how we collect, use, disclose, and protect personal information, including information collected through telephone and SMS communications.</p>

      <h2>Information We Collect</h2>
      <p>We may collect personal information that you provide to us, including:</p>
      <ul>
        <li>Name</li><li>Telephone number</li><li>Email address</li><li>Mailing address</li>
        <li>Insurance policy and coverage information</li><li>Appointment information</li>
        <li>Information submitted while requesting a quote or customer service</li>
        <li>Communications and correspondence with our agency</li><li>SMS opt-in and opt-out records</li>
      </ul>

      <h2>How We Use Personal Information</h2>
      <p>We may use personal information to:</p>
      <ul>
        <li>Provide insurance quotes and services</li><li>Respond to customer questions and requests</li>
        <li>Schedule and confirm appointments</li><li>Follow up regarding requested insurance services</li>
        <li>Provide policy, renewal, account, and customer-service updates</li>
        <li>Send text messages after receiving appropriate consent</li>
        <li>Maintain records and comply with applicable legal and regulatory requirements</li>
      </ul>

      <h2>How Information May Be Shared</h2>
      <p>Personal information may be shared with insurance carriers, service providers, regulatory authorities, or other parties when reasonably necessary to provide requested insurance services, administer policies, comply with legal obligations, or protect our rights.</p>
      <p>We do not sell personal information.</p>

      <h2>SMS Privacy</h2>
      <p>By providing your mobile telephone number and agreeing to receive SMS messages, you consent to receive customer-care, appointment, follow-up, policy-related, and account-related text messages from Abel Duran Insurance Agency Inc.</p>
      <p>SMS consent, mobile telephone numbers, and mobile opt-in information will not be shared with third parties or affiliates for marketing or promotional purposes.</p>
      <p>Text messaging originator opt-in data and consent will not be sold, rented, or shared with third parties.</p>
      <p>Message frequency may vary. Message and data rates may apply.</p>
      <p>Reply STOP to opt out at any time.</p>
      <p>Reply HELP for assistance.</p>
      <p>Consent to receive SMS messages is not a condition of purchasing any product or service.</p>

      <h2>Data Security</h2>
      <p>We use reasonable administrative, technical, and organizational safeguards designed to protect personal information. However, no method of electronic transmission or storage is completely secure.</p>

      <h2>Your Choices</h2>
      <p>You may request that we update or correct your contact information. You may stop receiving SMS messages at any time by replying STOP.</p>

      <h2>Contact Us</h2>
      <p>For questions regarding this Privacy Policy, contact:</p>
      <address>
        Abel Duran Insurance Agency Inc.<br />
        13800 Heacock Street, Suite C120<br />
        Moreno Valley, CA 92553<br />
        Phone: <a href="tel:+19516538888">951-653-8888</a><br />
        Email: <a href="mailto:aduran@farmersagent.com">aduran@farmersagent.com</a>
      </address>
    </div></section>
  </>;
}

