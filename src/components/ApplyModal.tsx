"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { US_STATES } from "@/lib/site";

type ApplyForm = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  state: string;
  licensed: string;
  why: string;
  referral: string;
  consent: boolean;
};

type ApplyErrors = {
  firstName: boolean;
  lastName: boolean;
  email: boolean;
  phone: boolean;
  state: boolean;
  licensed: boolean;
  why: boolean;
};

const EMPTY_FORM: ApplyForm = {
  firstName: "",
  lastName: "",
  email: "",
  phone: "",
  state: "",
  licensed: "",
  why: "",
  referral: "",
  consent: false,
};

const EMPTY_ERRORS: ApplyErrors = {
  firstName: false,
  lastName: false,
  email: false,
  phone: false,
  state: false,
  licensed: false,
  why: false,
};

type ApplyModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export default function ApplyModal({ isOpen, onClose }: ApplyModalProps) {
  const [modalSuccess, setModalSuccess] = useState(false);
  const [applySubmitting, setApplySubmitting] = useState(false);
  const [applyForm, setApplyForm] = useState<ApplyForm>(EMPTY_FORM);
  const [applyErrors, setApplyErrors] = useState<ApplyErrors>(EMPTY_ERRORS);
  const firstNameRef = useRef<HTMLInputElement>(null);

  const resetForm = useCallback(() => {
    setApplyForm(EMPTY_FORM);
    setApplyErrors(EMPTY_ERRORS);
    setModalSuccess(false);
    setApplySubmitting(false);
  }, []);

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = "";
      return;
    }

    resetForm();
    document.body.style.overflow = "hidden";
    const timer = window.setTimeout(() => firstNameRef.current?.focus(), 0);

    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose, resetForm]);

  const updateField = <K extends keyof ApplyForm>(key: K, value: ApplyForm[K]) => {
    setApplyForm((prev) => ({ ...prev, [key]: value }));
  };

  const submitApplication = async () => {
    const errors: ApplyErrors = {
      firstName: applyForm.firstName.trim().length < 2,
      lastName: applyForm.lastName.trim().length < 2,
      email: !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(applyForm.email.trim()),
      phone: applyForm.phone.replace(/\D/g, "").length < 7,
      state: applyForm.state === "",
      licensed: applyForm.licensed === "",
      why: applyForm.why.trim().length < 20,
    };
    setApplyErrors(errors);

    if (Object.values(errors).some(Boolean)) {
      window.setTimeout(() => {
        document
          .querySelector(".form-group.has-error")
          ?.scrollIntoView({ behavior: "smooth", block: "center" });
      }, 0);
      return;
    }

    setApplySubmitting(true);
    try {
      const response = await fetch("/api/onboarding", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: applyForm.firstName,
          lastName: applyForm.lastName,
          email: applyForm.email,
          phone: applyForm.phone,
          state: applyForm.state,
          licensed: applyForm.licensed,
          why: applyForm.why,
          referral: applyForm.referral,
          consent: applyForm.consent,
        }),
      });

      if (!response.ok) throw new Error("Onboarding request failed.");
      setModalSuccess(true);
    } catch {
      window.alert("Could not submit your onboarding form right now. Please try again.");
    } finally {
      setApplySubmitting(false);
    }
  };

  return (
    <div
      className={`modal-overlay${isOpen ? " open" : ""}`}
      id="applyModal"
      role="dialog"
      aria-modal="true"
      aria-labelledby="applyModalTitle"
      aria-describedby="applyModalDescription"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal">
        <div className="modal-header">
          <div className="modal-eyebrow">Join the Team</div>
          <h2 id="applyModalTitle">GET STARTED</h2>
          <p id="applyModalDescription">
            Fill out the form below and a team member will reach out to guide you through the
            onboarding process.
          </p>
          <button className="modal-close" aria-label="Close" onClick={onClose}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        {!modalSuccess ? (
          <div className="modal-body" id="modalFormBody">
            <div className="form-row">
              <div className={`form-group${applyErrors.firstName ? " has-error" : ""}`}>
                <label htmlFor="firstName">First Name *</label>
                <input
                  ref={firstNameRef}
                  id="firstName"
                  value={applyForm.firstName}
                  onChange={(e) => updateField("firstName", e.target.value)}
                  type="text"
                  placeholder="First name"
                  autoComplete="given-name"
                  className={applyErrors.firstName ? "error" : undefined}
                />
                <span className="error-msg">Please enter your first name.</span>
              </div>
              <div className={`form-group${applyErrors.lastName ? " has-error" : ""}`}>
                <label htmlFor="lastName">Last Name *</label>
                <input
                  id="lastName"
                  value={applyForm.lastName}
                  onChange={(e) => updateField("lastName", e.target.value)}
                  type="text"
                  placeholder="Last name"
                  autoComplete="family-name"
                  className={applyErrors.lastName ? "error" : undefined}
                />
                <span className="error-msg">Please enter your last name.</span>
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group${applyErrors.email ? " has-error" : ""}`}>
                <label htmlFor="applyEmail">Email Address *</label>
                <input
                  id="applyEmail"
                  value={applyForm.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  type="email"
                  placeholder="you@email.com"
                  autoComplete="email"
                  className={applyErrors.email ? "error" : undefined}
                />
                <span className="error-msg">Please enter a valid email.</span>
              </div>
              <div className={`form-group${applyErrors.phone ? " has-error" : ""}`}>
                <label htmlFor="phone">Phone Number *</label>
                <input
                  id="phone"
                  value={applyForm.phone}
                  onChange={(e) => updateField("phone", e.target.value)}
                  type="tel"
                  placeholder="(555) 000-0000"
                  autoComplete="tel"
                  className={applyErrors.phone ? "error" : undefined}
                />
                <span className="error-msg">Please enter your phone number.</span>
              </div>
            </div>

            <div className="form-row">
              <div className={`form-group${applyErrors.state ? " has-error" : ""}`}>
                <label htmlFor="state">State *</label>
                <div className="select-wrap">
                  <select
                    id="state"
                    value={applyForm.state}
                    onChange={(e) => updateField("state", e.target.value)}
                    className={applyErrors.state ? "error" : undefined}
                  >
                    <option value="">Select state...</option>
                    {US_STATES.map((state) => (
                      <option key={state}>{state}</option>
                    ))}
                  </select>
                </div>
                <span className="error-msg">Please select your state.</span>
              </div>
              <div className={`form-group${applyErrors.licensed ? " has-error" : ""}`}>
                <label htmlFor="licensed">License Status *</label>
                <div className="select-wrap">
                  <select
                    id="licensed"
                    value={applyForm.licensed}
                    onChange={(e) => updateField("licensed", e.target.value)}
                    className={applyErrors.licensed ? "error" : undefined}
                  >
                    <option value="">Select one...</option>
                    <option value="none">No License</option>
                    <option value="inprogress">In Progress</option>
                    <option value="licensed">Licensed</option>
                  </select>
                </div>
                <span className="error-msg">Please select your license status.</span>
              </div>
            </div>

            <div className="form-divider">Tell Us More</div>
            <div className="form-row">
              <div className={`form-group full${applyErrors.why ? " has-error" : ""}`}>
                <label htmlFor="why">Why do you want to join Visionaries? *</label>
                <textarea
                  id="why"
                  value={applyForm.why}
                  onChange={(e) => updateField("why", e.target.value)}
                  placeholder="Tell us what drives you and why you'd be a great fit..."
                  className={applyErrors.why ? "error" : undefined}
                />
                <span className="error-msg">Please share a bit about your motivation (20+ chars).</span>
              </div>
            </div>

            <div className="form-row">
              <div className="form-group full">
                <label htmlFor="referral">Who did you find Visionaries through?</label>
                <input
                  id="referral"
                  value={applyForm.referral}
                  onChange={(e) => updateField("referral", e.target.value)}
                  type="text"
                  placeholder="Name of the person who referred you (if any)"
                />
              </div>
            </div>

            <div className="checkbox-group">
              <input
                id="consent"
                checked={applyForm.consent}
                onChange={(e) => updateField("consent", e.target.checked)}
                type="checkbox"
              />
              <label htmlFor="consent">
                I agree to be contacted by the Visionaries team by phone or email. My information
                will be kept confidential and used only for onboarding purposes.{" "}
                <Link href="/privacy">Privacy Policy</Link>.
              </label>
            </div>

            <button
              className="submit-btn"
              disabled={applySubmitting}
              onClick={submitApplication}
            >
              {!applySubmitting ? (
                <>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="22" y1="2" x2="11" y2="13" />
                    <polygon points="22 2 15 22 11 13 2 9 22 2" />
                  </svg>
                  SUBMIT
                </>
              ) : (
                <>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                    <path d="M12 2a10 10 0 1 0 10 10" strokeDasharray="32">
                      <animateTransform attributeName="transform" type="rotate" from="0 12 12" to="360 12 12" dur="0.75s" repeatCount="indefinite" />
                    </path>
                  </svg>
                  SUBMITTING...
                </>
              )}
            </button>
          </div>
        ) : (
          <div className="modal-success show" id="modalSuccess">
            <div className="success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" style={{ color: "var(--gold)" }} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h3>FORM RECEIVED</h3>
            <p>
              Thank you for your interest in Visionaries. A team member will reach out to guide you
              through the next steps of onboarding.
            </p>
            <button className="submit-btn" style={{ maxWidth: 240, margin: "0 auto" }} onClick={onClose}>
              CLOSE
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
