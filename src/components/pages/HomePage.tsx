"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import OnboardingLink from "@/components/OnboardingLink";
import { useFadeUp } from "@/hooks/useFadeUp";

export default function HomePage() {
  const [isDesktop, setIsDesktop] = useState(true);
  const ref = useFadeUp<HTMLDivElement>([isDesktop]);

  useEffect(() => {
    const updateViewport = () => setIsDesktop(window.innerWidth > 960);
    updateViewport();
    window.addEventListener("resize", updateViewport, { passive: true });
    return () => window.removeEventListener("resize", updateViewport);
  }, []);

  return (
    <div className="page active" id="page-home" ref={ref}>
      <section className="home-hero">
        <div className="home-hero-left">
          <p className="hero-eyebrow">Visionaries</p>
          <h1 className="hero-headline">
            THE GREATEST
            <br />
            TEAM TO
            <br />
            EVER DO IT.
          </h1>
          <p style={{ fontSize: "0.95rem", lineHeight: 1.8, color: "var(--gray)", fontWeight: 300, maxWidth: 440, marginBottom: "2.5rem" }}>
            Visionaries helps insurance agents level up in every aspect of life while providing the framework to serve others and build a successful career.
          </p>
          <OnboardingLink className="btn-primary">
            JOIN THE TEAM{" "}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </OnboardingLink>
        </div>
        <div className="home-hero-right">
          <Image src="/DSC02610.webp" alt="Visionaries team" fill priority sizes="50vw" style={{ objectFit: "cover", opacity: 0.85 }} />
        </div>
      </section>

      <div className="ticker-wrap" aria-hidden="true">
        <div className="ticker-track">
          {Array.from({ length: 2 }).map((_, i) => (
            <span key={i}>
              <span className="ticker-item">BE INTENTIONAL</span>
              <span className="ticker-sep">&nbsp;✦&nbsp;</span>
              <span className="ticker-item">BE PRESENT</span>
              <span className="ticker-sep">&nbsp;✦&nbsp;</span>
              <span className="ticker-item">EXPRESS GRATITUDE</span>
              <span className="ticker-sep">&nbsp;✦&nbsp;</span>
              <span className="ticker-item">SPEAK NO NEGATIVITY</span>
              <span className="ticker-sep">&nbsp;✦&nbsp;</span>
              <span className="ticker-item">GROWTH MINDSET</span>
              <span className="ticker-sep">&nbsp;✦&nbsp;</span>
              <span className="ticker-item">EXTREME ACCOUNTABILITY</span>
              <span className="ticker-sep">&nbsp;✦&nbsp;</span>
              <span className="ticker-item">VISIONARIES</span>
              <span className="ticker-sep">&nbsp;✦&nbsp;</span>
            </span>
          ))}
        </div>
      </div>

      <section className="stat-banner">
        <p className="stat-label">Proven Impact</p>
        <div className="stat-number">1,000+</div>
        <div className="stat-sub">FAMILIES PROTECTED MONTHLY.</div>
        <div className="stat-sub" style={{ fontSize: "clamp(1rem,2vw,2rem)", color: "var(--gold)", marginTop: "0.3rem", fontFamily: "'Bebas Neue'", letterSpacing: "0.1em" }}>
          AND WE&apos;RE JUST GETTING STARTED.
        </div>
        <p className="stat-desc">
          Real impact, real results. Built by agents who are committed to serving others and leveling up every aspect of their lives.
        </p>
        <OnboardingLink className="btn-outline-white" style={{ borderColor: "var(--gold)", color: "var(--gold)" }}>
          JOIN THE TEAM
        </OnboardingLink>
      </section>

      <section className="built-section">
        <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(2.5rem,4vw,4rem)", letterSpacing: "0.05em", textAlign: "center", marginBottom: "3rem" }} className="fade-up">
          BUILT BY AGENTS, FOR AGENTS.
        </h2>
        <div className="photo-grid">
          <div className="photo-cell tall"><img src="/IMG_2774.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell"><img src="/GIO08752.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell wide"><img src="/DSC00460.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell"><img src="/DSC05988.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell"><img src="/DSC02693.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell"><img src="/deboyer2.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell"><img src="/mentor.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell tall"><img src="/GIO09308-Enhanced-NR.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell"><img src="/fist_bump.webp" alt="Team" loading="lazy" /></div>
          <div className="photo-cell wide"><img src="/bootcamp.webp" alt="Team" loading="lazy" /></div>
          {isDesktop && (
            <div className="photo-cell">
              <img src="/no_negativity.webp" alt="Team" loading="lazy" />
            </div>
          )}
        </div>
      </section>

      <section className="era-section">
        <div className="era-image">
          <Image src="/new_beginning.webp" alt="New Era" fill sizes="50vw" loading="lazy" style={{ objectFit: "cover" }} />
        </div>
        <div className="era-text fade-up">
          <div className="era-divider" />
          <h2>
            THE START OF
            <br />
            A NEW ERA
          </h2>
          <p>
            Visionaries isn&apos;t like every other agency. We provide unmatched training and support while helping agents improve mentally, physically, spiritually, and financially. This is way more than a career move. It&apos;s a framework to serve others and build a life you&apos;re proud of.
          </p>
          <Link href="/about" className="btn-outline-white">
            LEARN MORE{" "}
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="12 5 19 12 12 19" />
            </svg>
          </Link>
        </div>
      </section>

      <section className="why-section">
        <h2 className="fade-up">WHY VISIONARIES?</h2>
        <div className="why-grid">
          <div className="why-item fade-up">
            <div className="why-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3>1-ON-1 MENTORSHIP</h3>
            <p>Every agent is paired with a dedicated mentor. Sales training, leadership habits, and personal development from day one.</p>
          </div>
          <div className="why-item fade-up">
            <div className="why-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 9H4a2 2 0 0 1-2-2V5h4" />
                <path d="M18 9h2a2 2 0 0 0 2-2V5h-4" />
                <path d="M12 17v4" />
                <path d="M8 21h8" />
                <path d="M6 5h12v6a6 6 0 0 1-12 0V5Z" />
              </svg>
            </div>
            <h3>TOTAL DEVELOPMENT</h3>
            <p>We help agents improve mentally, physically, spiritually, and financially. Growth isn&apos;t just about sales here.</p>
          </div>
          <div className="why-item fade-up">
            <div className="why-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="7" width="20" height="14" rx="2" />
                <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                <line x1="12" y1="12" x2="12" y2="16" />
                <line x1="10" y1="14" x2="14" y2="14" />
              </svg>
            </div>
            <h3>LEADS & COACHING</h3>
            <p>Access to multiple lead vendors, sales training, and ongoing coaching so you never have to figure it out alone.</p>
          </div>
          <div className="why-item fade-up">
            <div className="why-icon">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                <polyline points="17 6 23 6 23 12" />
              </svg>
            </div>
            <h3>ALL 50 STATES</h3>
            <p>We&apos;re recruiting agents nationwide. No matter where you are, Visionaries has a place for you. We&apos;ll even help you get licensed.</p>
          </div>
        </div>
      </section>

      <section className="home-testimonial">
        <div className="home-test-text fade-up">
          <p className="intro">But don&apos;t just take our word for it.</p>
          <p style={{ fontFamily: "'Bebas Neue'", fontSize: "1.2rem", letterSpacing: "0.1em", marginBottom: "1rem" }}>TAKE THEIRS ↓</p>
          <div className="tname">
            JOHN
            <br />
            BAOCIUS
          </div>
          <p>
            John joined Visionaries looking for something more. Through the mentorship and training, he transformed his career and his life. His story is proof that the framework works.
          </p>
          <Link href="/testimonials" className="test-cta">
            MORE STORIES →
          </Link>
        </div>
        <div className="home-test-img">
          <Image src="/DSC01930.webp" alt="John Baocius" fill sizes="50vw" loading="lazy" style={{ objectFit: "cover" }} />
        </div>
      </section>

      <section className="cta-band">
        <h2>
          THE GREATEST TEAM TO EVER DO IT.
          <br />
          <span>JOIN US.</span>
        </h2>
        <OnboardingLink className="btn-gold">
          JOIN OUR TEAM
        </OnboardingLink>
      </section>
    </div>
  );
}
