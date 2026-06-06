"use client";

import Image from "next/image";
import { useState } from "react";
import OnboardingLink from "@/components/OnboardingLink";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function ContactPage() {
  const ref = useFadeUp<HTMLDivElement>();
  const [contactSubmitting, setContactSubmitting] = useState(false);
  const [contactError, setContactError] = useState("");
  const [contactSuccess, setContactSuccess] = useState(false);
  const [contactForm, setContactForm] = useState({
    fname: "",
    lname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const submitContact = async () => {
    const { fname, lname, email, phone, subject, message } = contactForm;
    const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());

    if (!fname.trim() || !lname.trim() || !emailIsValid || !subject || message.trim().length < 10) {
      window.alert("Please fill in all required fields.");
      return;
    }

    setContactSubmitting(true);
    setContactError("");
    setContactSuccess(false);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: fname,
          lastName: lname,
          email,
          phone,
          subject,
          message,
        }),
      });

      if (!response.ok) throw new Error("Failed to send contact message.");

      setContactSuccess(true);
      setContactForm({ fname: "", lname: "", email: "", phone: "", subject: "", message: "" });
      window.setTimeout(() => setContactSuccess(false), 5000);
    } catch {
      setContactError("Could not send your message right now. Please try again.");
    } finally {
      setContactSubmitting(false);
    }
  };

  return (
    <div className="page active" id="page-contact" ref={ref}>
      <section className="contact-hero">
        <div className="contact-hero-text">
          <p className="section-eyebrow">Get In Touch</p>
          <div className="gold-divider" />
          <h1 className="section-title" style={{ color: "var(--white)" }}>
            LET&apos;S
            <br />
            TALK.
          </h1>
          <p className="section-body" style={{ color: "rgba(255,255,255,0.55)", marginTop: "1rem", marginBottom: "2.5rem" }}>
            Whether you&apos;re ready to join the team, have questions about the opportunity, or just want to learn more, we want to hear from you. Real people answer here.
          </p>
          <OnboardingLink className="btn-gold">
            JOIN THE TEAM
          </OnboardingLink>
        </div>
        <div className="contact-hero-img">
          <Image src="/DSC02610.webp" alt="Contact Visionaries" fill sizes="50vw" style={{ objectFit: "cover", opacity: 0.85 }} />
        </div>
      </section>

      <div className="contact-info-strip">
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.63 4.9 2 2 0 0 1 3.6 2.7h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l.92-.92a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
            </svg>
          </div>
          <div className="contact-info-text">
            <div className="label">Phone</div>
            <div className="value">(810) 728-9896</div>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
          </div>
          <div className="contact-info-text">
            <div className="label">Email</div>
            <div className="value">jp@thevisionarywealthgroup.com</div>
          </div>
        </div>
        <div className="contact-info-item">
          <div className="contact-info-icon">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
          <div className="contact-info-text">
            <div className="label">Response Time</div>
            <div className="value">Within 24 Hours</div>
          </div>
        </div>
      </div>

      <div className="contact-body">
        <div className="contact-form-section">
          <h2>SEND A MESSAGE</h2>
          <p className="sub">
            Have a question before you apply? Want more information about the opportunity? Fill out the form and a team member will get back to you promptly.
          </p>
          <div className="contact-form" id="contactForm">
            <div className="cf-row">
              <div className="cf-group">
                <label>First Name *</label>
                <input value={contactForm.fname} onChange={(e) => setContactForm((f) => ({ ...f, fname: e.target.value }))} type="text" placeholder="Jane" />
              </div>
              <div className="cf-group">
                <label>Last Name *</label>
                <input value={contactForm.lname} onChange={(e) => setContactForm((f) => ({ ...f, lname: e.target.value }))} type="text" placeholder="Smith" />
              </div>
            </div>
            <div className="cf-row">
              <div className="cf-group">
                <label>Email *</label>
                <input value={contactForm.email} onChange={(e) => setContactForm((f) => ({ ...f, email: e.target.value }))} type="email" placeholder="jane@email.com" />
              </div>
              <div className="cf-group">
                <label>Phone</label>
                <input value={contactForm.phone} onChange={(e) => setContactForm((f) => ({ ...f, phone: e.target.value }))} type="tel" placeholder="(810) 728-9896" />
              </div>
            </div>
            <div className="cf-row">
              <div className="cf-group cf-full">
                <label>Subject *</label>
                <div className="cf-select-wrap">
                  <select value={contactForm.subject} onChange={(e) => setContactForm((f) => ({ ...f, subject: e.target.value }))}>
                    <option value="">Select a topic...</option>
                    <option>I want to apply</option>
                    <option>Learn about the opportunity</option>
                    <option>General inquiry</option>
                    <option>Media / Press</option>
                    <option>Partnership inquiry</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="cf-row">
              <div className="cf-group cf-full">
                <label>Message *</label>
                <textarea value={contactForm.message} onChange={(e) => setContactForm((f) => ({ ...f, message: e.target.value }))} placeholder="Tell us what's on your mind..." />
              </div>
            </div>
            {contactSuccess && (
              <div id="cf-success" style={{ display: "block", background: "var(--black)", color: "var(--white)", padding: "1.5rem", textAlign: "center", marginBottom: "1rem" }}>
                <strong style={{ fontFamily: "'Bebas Neue'", fontSize: "1.3rem", letterSpacing: "0.1em" }}>MESSAGE SENT</strong>
                <br />
                <span style={{ fontSize: "0.85rem", color: "rgba(255,255,255,0.6)", fontWeight: 300 }}>We&apos;ll be in touch within 24 hours.</span>
              </div>
            )}
            {contactError && (
              <div style={{ display: "block", background: "#3b1210", color: "#ffd8d2", padding: "1rem", textAlign: "center", marginBottom: "1rem" }}>
                {contactError}
              </div>
            )}
            <button className="submit-btn" disabled={contactSubmitting} onClick={submitContact}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <line x1="22" y1="2" x2="11" y2="13" />
                <polygon points="22 2 15 22 11 13 2 9 22 2" />
              </svg>
              {contactSubmitting ? "SENDING..." : "SEND MESSAGE"}
            </button>
          </div>
        </div>
        <div className="contact-map-section">
          <p className="section-eyebrow">Find Us</p>
          <h2>OUR LOCATIONS</h2>
          <div className="locations">
            <div className="location-item">
              <div className="loc-city">NATIONWIDE</div>
              <div className="loc-addr">
                Visionaries recruits and supports agents
                <br />
                across all 50 states.
              </div>
              <div className="loc-tag">ALL STATES</div>
            </div>
            <div className="location-item">
              <div className="loc-city">VIRTUAL SUPPORT</div>
              <div className="loc-addr">
                1-on-1 mentorship, sales training, and lead
                <br />
                strategy available wherever you are.
              </div>
              <div className="loc-tag">REMOTE FRIENDLY</div>
            </div>
          </div>
        </div>
      </div>

      <section className="social-section">
        <h2>FOLLOW THE JOURNEY</h2>
        <div className="social-links">
          <a className="social-link" href="https://www.instagram.com/thevisionarycapitalgroup/" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" />
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>{" "}
            INSTAGRAM
          </a>
          <a className="social-link" href="https://www.linkedin.com/company/we-are-visionary-capital-group/" target="_blank" rel="noopener noreferrer">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect x="2" y="9" width="4" height="12" />
              <circle cx="4" cy="4" r="2" />
            </svg>{" "}
            LINKEDIN
          </a>
        </div>
      </section>
    </div>
  );
}
