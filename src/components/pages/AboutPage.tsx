"use client";

import Image from "next/image";
import { useApplyModal } from "@/context/ApplyModalContext";
import { useFadeUp } from "@/hooks/useFadeUp";

const TEAM = [
  {
    name: "JOE TURNER",
    role: "Co-founder",
    image: "/joe_turner.webp",
    alt: "Joe Turner",
    bio: "Joe Turner is a co-founder of Visionary Wealth Group and focuses on leadership development, team growth, and building a new standard in the financial services industry.",
  },
  {
    name: "JP DEBOYER",
    role: "Co-founder",
    image: "/jp_deboyer.webp",
    alt: "JP Deboyer",
    bio: "JP Deboyer is a Co-Founder of Visionary Wealth Group, where he drives strategic growth, organizational development, and expansion. His focus is on building a high-performance company designed for long-term scale, leadership, and impact.",
  },
  {
    name: "LUKAS FICARA",
    role: "Chief Technology Officer",
    image: "/lucas_ficara.webp",
    alt: "Lukas Ficara",
    bio: "Lukas Ficara is the Chief Technology Officer responsible for overseeing the company's technology strategy, engineering teams, and product infrastructure. He specializes in building scalable systems, implementing automation, and leading high-performing development teams that power business growth and innovation.",
  },
  {
    name: "BEN BANIA",
    role: "Director of Agent Development",
    image: "/ben_bania.webp",
    alt: "Ben Bania",
    bio: "Ben Bania is the Director of Agent Development where he leads agent training and scaling high-performing agents.. His focus is on building a culture of discipline, accountability, and high performance while helping scale a world-class organization.",
  },
  {
    name: "CHRIS MUMBY",
    role: "President of Sales",
    image: "/chris_mumby.webp",
    alt: "Chris Mumby",
    bio: "Chris Mumby is the President of Sales where he leads sales strategy, performance, and team production across the organization. He is focused on driving consistent results, developing top producers, and building a culture centered on discipline, execution, and growth.",
  },
];

export default function AboutPage() {
  const { openApplyModal } = useApplyModal();
  const ref = useFadeUp<HTMLDivElement>();

  return (
    <div className="page active" id="page-about" ref={ref}>
      <section className="about-hero">
        <div className="about-hero-text">
          <p className="section-eyebrow">Our Story</p>
          <div className="gold-divider" />
          <h1 className="section-title" style={{ color: "var(--white)" }}>
            BUILT ON
            <br />
            PURPOSE.
          </h1>
          <p className="section-body" style={{ color: "rgba(255,255,255,0.6)", marginTop: "1rem", marginBottom: "2.5rem" }}>
            We didn&apos;t start Visionaries to build a company. We started it to help insurance agents level up in every aspect of life, providing the framework to serve others and build a successful career.
          </p>
          <button className="btn-outline-white" onClick={openApplyModal}>
            JOIN THE TEAM
          </button>
        </div>
        <div className="about-hero-img">
          <Image src="/DSC02610.webp" alt="About Visionaries" fill sizes="50vw" style={{ objectFit: "cover", opacity: 0.75 }} />
        </div>
      </section>

      <div className="stats-strip">
        <div className="stat-box">
          <div className="big">1,000+</div>
          <div className="small">Families Protected Monthly</div>
        </div>
        <div className="stat-box">
          <div className="big">50</div>
          <div className="small">States Covered</div>
        </div>
        <div className="stat-box">
          <div className="big">4</div>
          <div className="small">Pillars of Growth</div>
        </div>
        <div className="stat-box">
          <div className="big">1:1</div>
          <div className="small">Mentorship Model</div>
        </div>
      </div>

      <section className="about-story">
        <div className="about-story-img">
          <Image src="/GIO09308-Enhanced-NR.webp" alt="Our story" fill sizes="50vw" loading="lazy" style={{ objectFit: "cover" }} />
        </div>
        <div className="about-story-text fade-up">
          <p className="section-eyebrow">Who We Are</p>
          <div className="gold-divider" />
          <h2 className="section-title" style={{ fontSize: "clamp(2rem,4vw,3.5rem)" }}>
            A DIFFERENT
            <br />
            KIND OF
            <br />
            AGENCY.
          </h2>
          <p className="section-body" style={{ marginTop: "1.2rem", marginBottom: "1.2rem" }}>
            Most agencies hand you a script and wish you luck. We hand you one-on-one mentorship, sales training, leadership habit development, and lead strategy training. Our agents don&apos;t just build careers, they level up mentally, physically, spiritually, and financially.
          </p>
          <p className="section-body">
            We recruit in all 50 states and welcome everyone from complete beginners to experienced agents, former athletes to entrepreneurs. Not licensed yet? We&apos;ll help you get there. Culture is everything and we protect it fiercely.
          </p>
        </div>
      </section>

      <section className="about-team-section fade-up">
        <p className="section-eyebrow" style={{ textAlign: "center" }}>
          The People
        </p>
        <h2 style={{ fontFamily: "'Bebas Neue'", fontSize: "clamp(2rem,4vw,4rem)", letterSpacing: "0.06em", textAlign: "center", marginBottom: "0.5rem" }}>
          MEET THE TEAM
        </h2>
        <p style={{ textAlign: "center", fontSize: "0.9rem", color: "var(--gray)", fontWeight: 300, marginBottom: "4rem", maxWidth: 500, marginLeft: "auto", marginRight: "auto", marginTop: "0.5rem" }}>
          The leaders who built the system, and who show up every single day to make it work for you.
        </p>
        <div className="about-team-grid">
          {TEAM.map((member) => (
            <div key={member.name} className="team-card">
              <div className="team-card-img">
                <Image src={member.image} alt={member.alt} width={600} height={600} loading="lazy" />
              </div>
              <div className="team-card-text">
                <h3>{member.name}</h3>
                <div className="role">{member.role}</div>
                <div className="bio">
                  <p>{member.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-band">
        <h2>
          READY TO LEVEL UP IN
          <br />
          <span>EVERY ASPECT OF LIFE?</span>
        </h2>
        <button className="btn-gold" onClick={openApplyModal}>
          JOIN THE TEAM
        </button>
      </section>
    </div>
  );
}
