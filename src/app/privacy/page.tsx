import type { Metadata } from "next";
import LegalPage, { LegalLink } from "@/components/pages/LegalPage";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata("/privacy");

export default function Privacy() {
  return (
    <LegalPage
      title={
        <>
          PRIVACY
          <br />
          POLICY.
        </>
      }
      subtitle="This Privacy Policy explains how Visionaries collects, uses, and protects your personal information when you interact with our website and onboarding forms."
      heroImage="/DSC02610.webp"
      heroAlt="Privacy Policy"
      lastUpdated="March 12, 2026"
    >
      <h2>1. Information We Collect</h2>
      <p>
        We may collect personal information you provide directly to us, including your name, email address, phone number, state, licensing status, referral details, and any other information submitted through onboarding or contact forms.
      </p>

      <h2>2. How We Use Information</h2>
      <p>
        We use collected information to evaluate applications, communicate with prospective agents, provide support, improve our services, and maintain internal records.
      </p>

      <h2>3. Information Sharing</h2>
      <p>
        We do not sell your personal information. We may share information with trusted service providers that support our operations, subject to confidentiality and applicable law.
      </p>

      <h2>4. Data Retention</h2>
      <p>
        We retain personal information as needed for legitimate business purposes, legal compliance, dispute resolution, and enforcement of agreements.
      </p>

      <h2>5. Data Security</h2>
      <p>
        We implement reasonable administrative and technical safeguards designed to protect personal information. No method of transmission or storage is guaranteed to be completely secure.
      </p>

      <h2>6. Your Choices</h2>
      <p>
        You may request updates or deletion of your personal information by contacting us. We may retain certain data where required by law or legitimate business need.
      </p>

      <h2>7. Contact</h2>
      <p>
        For privacy questions, contact us at <a href="mailto:jp@thevisionarywealthgroup.com">jp@thevisionarywealthgroup.com</a> or <a href="tel:+18107289896">(810) 728-9896</a>.
      </p>

      <h2>8. Related Pages</h2>
      <p>
        See our <LegalLink href="/terms">Terms of Service</LegalLink>, visit the{" "}
        <LegalLink href="/contact">Contact page</LegalLink>, or return to the{" "}
        <LegalLink href="/">Home page</LegalLink>.
      </p>
    </LegalPage>
  );
}
