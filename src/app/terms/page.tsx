import type { Metadata } from "next";
import LegalPage, { LegalLink } from "@/components/pages/LegalPage";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata("/terms");

export default function Terms() {
  return (
    <LegalPage
      title={
        <>
          TERMS OF
          <br />
          SERVICE.
        </>
      }
      subtitle="These Terms of Service govern your access to and use of Visionaries web properties, content, and onboarding experience."
      heroImage="/DSC00460.webp"
      heroAlt="Terms of Service"
      lastUpdated="March 12, 2026"
    >
      <h2>1. Acceptance of Terms</h2>
      <p>By using this website, you agree to these Terms. If you do not agree, do not use the site.</p>

      <h2>2. Website Use</h2>
      <p>
        You agree to use the website only for lawful purposes and in a way that does not infringe on the rights of or restrict others from using the site.
      </p>

      <h2>3. No Guarantee of Results</h2>
      <p>
        Information about opportunities, training, and potential outcomes is for general informational purposes. Individual results vary and are not guaranteed.
      </p>

      <h2>4. Intellectual Property</h2>
      <p>
        All website content, branding, design elements, and materials are owned by Visionaries or used with permission. Unauthorized use is prohibited.
      </p>

      <h2>5. Third-Party Services</h2>
      <p>
        We may use third-party platforms and tools to operate this website. We are not responsible for third-party service interruptions or policies.
      </p>

      <h2>6. Limitation of Liability</h2>
      <p>
        To the maximum extent permitted by law, Visionaries is not liable for indirect, incidental, or consequential damages arising from website use.
      </p>

      <h2>7. Changes to Terms</h2>
      <p>
        We may update these Terms at any time. Continued use of the site after updates constitutes acceptance of the revised Terms.
      </p>

      <h2>8. Contact</h2>
      <p>
        For Terms questions, contact <a href="mailto:jp@thevisionarywealthgroup.com">jp@thevisionarywealthgroup.com</a> or <a href="tel:+18107289896">(810) 728-9896</a>.
      </p>

      <h2>9. Related Pages</h2>
      <p>
        Read our <LegalLink href="/privacy">Privacy Policy</LegalLink>, use the{" "}
        <LegalLink href="/contact">Contact page</LegalLink>, or return to the{" "}
        <LegalLink href="/">Home page</LegalLink>.
      </p>
    </LegalPage>
  );
}
