import Link from "next/link";
import OnboardingLink from "@/components/OnboardingLink";

export default function Footer() {
  return (
    <footer>
      <div className="footer-grid">
        <div className="footer-brand">
          <div className="logo">
            VISIONARIES<span>.</span>
          </div>
          <p>
            The Greatest Team To Ever Do It. Helping agents level up in every aspect of life.
          </p>
        </div>
        <div className="footer-col">
          <h4>Navigate</h4>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/values">Values</Link>
            </li>
            <li>
              <Link href="/testimonials">Testimonials</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Company</h4>
          <ul>
            <li>
              <OnboardingLink className="footer-link-btn">Join the Team</OnboardingLink>
            </li>
            <li>
              <Link href="/contact">Contact Us</Link>
            </li>
            <li>
              <Link href="/privacy">Privacy Policy</Link>
            </li>
            <li>
              <Link href="/terms">Terms of Service</Link>
            </li>
          </ul>
        </div>
        <div className="footer-col">
          <h4>Connect</h4>
          <ul>
            <li>
              <a
                href="https://www.instagram.com/thevisionarycapitalgroup/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/company/we-are-visionary-capital-group/"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© Visionaries LLC, 2026. All Rights Reserved.</p>
        <p className="footer-legal-links">
          <Link href="/privacy">Privacy Policy</Link>
          <span aria-hidden="true">·</span>
          <Link href="/terms">Terms of Service</Link>
        </p>
      </div>
    </footer>
  );
}
