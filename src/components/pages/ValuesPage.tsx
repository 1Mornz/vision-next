"use client";

import Image from "next/image";
import OnboardingLink from "@/components/OnboardingLink";
import { useFadeUp } from "@/hooks/useFadeUp";

const VALUES = [
  { num: "01", title: "BE INTENTIONAL", image: "/DSC02693.webp", alt: "Be Intentional", text: "Every action, every conversation, every decision is made with purpose. We don't drift through days or phone it in. Intentionality is the foundation of everything we do and the standard we hold ourselves to.", reverse: false },
  { num: "02", title: "BE PRESENT", image: "/dialing.webp", alt: "Be Present", text: "Show up fully wherever you are. When you're on a call, be on the call. When you're with your team, be with your team. Presence is a discipline, and it separates those who grow from those who stay stuck.", reverse: true },
  { num: "03", title: "EXPRESS GRATITUDE", image: "/gratitude.webp", alt: "Express Gratitude", text: "Gratitude changes perspective and perspective changes everything. We lead with thankfulness, for the opportunity, for each other, and for every family we get to serve. That mindset fuels everything we build.", reverse: false },
  { num: "04", title: "SPEAK NO NEGATIVITY OUT LOUD", image: "/no_negativity.webp", alt: "Speak No Negativity", text: "Words shape reality. Complaining, gossip, and negativity have no place here. When challenges come, we address them head-on with solutions, not excuses. The energy you bring is the energy you attract.", reverse: true },
  { num: "05", title: "MAINTAIN A GROWTH MINDSET", image: "/growth_mindset.webp", alt: "Growth Mindset", text: "We believe talent is developed, not inherited. Every setback is a setup for a comeback. Agents at Visionaries are committed to constant improvement, learning from every win and every loss along the way.", reverse: false },
  { num: "06", title: "BEING ACCOUNTABLE", image: "/DSC02610.webp", alt: "Extreme Accountability", text: "No excuses, no blame, no pointing fingers. We own everything: our numbers, our mistakes, and our growth. The moment you take full responsibility is the moment everything changes.", reverse: true },
];

const PILLARS = [
  { title: "ONE-ON-ONE MENTORSHIP", text: "Every new agent is paired with a dedicated mentor. Not for a week, for as long as you need. The fastest path to success runs through someone who's already been there.", icon: "check" },
  { title: "SALES TRAINING", text: "Comprehensive sales training built on a proven, repeatable system. We don't reinvent the wheel. We run a process that works and we run it with precision.", icon: "clock" },
  { title: "LEADERSHIP HABITS", text: "We develop leaders, not just salespeople. Leadership habit development is woven into everything we do, building agents who can lead teams and shape futures.", icon: "users" },
  { title: "LEAD STRATEGY", text: "Access to multiple lead vendors and lead strategy training so you always have people to talk to. We equip you with the tools and coaching to keep your pipeline full.", icon: "chart" },
  { title: "LICENSING SUPPORT", text: "Not licensed yet? No problem. We help recruits obtain their insurance license so you can hit the ground running regardless of where you're starting from.", icon: "shield" },
  { title: "TOTAL LIFE DEVELOPMENT", text: "This is more than sales. We help agents improve mentally, physically, spiritually, and financially. Growth in every dimension of life is the Visionaries standard.", icon: "award" },
];

export default function ValuesPage() {
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div className="page active" id="page-values" ref={ref}>
      <section className="values-hero">
        <div className="values-hero-inner">
          <div className="values-hero-text fade-up">
            <p className="section-eyebrow">What We Stand For</p>
            <div className="gold-divider" />
            <h1 className="section-title">
              THE PILLARS
              <br />
              WE BUILD
              <br />
              ON.
            </h1>
            <p className="section-body" style={{ marginTop: "1.2rem", marginBottom: "2.5rem" }}>
              Our values aren&apos;t a slide deck or a poster on the wall. They&apos;re decisions we make every day, how we treat clients, train agents, and hold each other accountable.
            </p>
            <OnboardingLink className="btn-primary">
              JOIN THE TEAM
            </OnboardingLink>
          </div>
          <div className="values-hero-img">
            <Image src="/DSC00460.webp" alt="Our Values" fill sizes="50vw" style={{ objectFit: "cover" }} />
          </div>
        </div>
      </section>

      <section className="values-main">
        <div style={{ textAlign: "center" }} className="fade-up">
          <p className="section-eyebrow">Our Core</p>
          <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(2rem,4vw,4rem)", letterSpacing: "0.06em" }}>
            SIX VALUES.
            <br />
            ONE STANDARD.
          </h2>
        </div>
        <div className="values-main-grid">
          {VALUES.map((value) => (
            <div key={value.num} className={`value-big-card${value.reverse ? " reverse" : ""} fade-up`}>
              <div className="value-big-img">
                <Image src={value.image} alt={value.alt} width={600} height={380} loading="lazy" />
              </div>
              <div className="value-big-text">
                <div className="num">{value.num}</div>
                <h3>{value.title}</h3>
                <p>{value.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="values-manifesto">
        <p className="section-eyebrow">Our Manifesto</p>
        <div className="manifesto-quote fade-up">
          &quot;WE HELP AGENTS LEVEL UP IN EVERY ASPECT OF LIFE. MENTALLY. PHYSICALLY. SPIRITUALLY. FINANCIALLY. THIS IS<span> VISIONARIES</span>. THE GREATEST TEAM TO EVER DO IT.&quot;
        </div>
        <OnboardingLink className="btn-gold">
          LIVE THESE VALUES. JOIN US
        </OnboardingLink>
      </section>

      <section className="values-pillars">
        <div style={{ textAlign: "center", marginBottom: 0 }} className="fade-up">
          <p className="section-eyebrow">Training &amp; Support</p>
          <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(2rem,4vw,3.5rem)", letterSpacing: "0.06em", marginBottom: "0.5rem" }}>
            WHAT YOU GET
          </h2>
          <p style={{ fontSize: "0.9rem", color: "var(--gray)", fontWeight: 300, maxWidth: 500, margin: "0.5rem auto 0", lineHeight: 1.7 }}>
            The training, support, and resources that every Visionaries agent receives from day one.
          </p>
        </div>
        <div className="pillars-grid">
          {PILLARS.map((pillar) => (
            <div key={pillar.title} className="pillar-card fade-up">
              <div className="pillar-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                  <polyline points="22 4 12 14.01 9 11.01" />
                </svg>
              </div>
              <h4>{pillar.title}</h4>
              <p>{pillar.text}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>
          YOUR VALUES + OUR SYSTEM =
          <br />
          <span>UNSTOPPABLE.</span>
        </h2>
        <OnboardingLink className="btn-gold">
          JOIN THE TEAM
        </OnboardingLink>
      </section>
    </div>
  );
}
