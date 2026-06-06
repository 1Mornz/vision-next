import Image from "next/image";
import Link from "next/link";

type LegalPageProps = {
  title: React.ReactNode;
  subtitle: string;
  heroImage: string;
  heroAlt: string;
  lastUpdated: string;
  children: React.ReactNode;
};

export default function LegalPage({ title, subtitle, heroImage, heroAlt, lastUpdated, children }: LegalPageProps) {
  return (
    <div className="page active">
      <section className="page-hero page-hero-dark">
        <div className="page-hero-text">
          <p className="section-eyebrow">Legal</p>
          <div className="gold-divider" />
          <h1 className="section-title">{title}</h1>
          <p className="section-body">{subtitle}</p>
        </div>
        <div className="page-hero-img">
          <Image src={heroImage} alt={heroAlt} fill sizes="50vw" loading="lazy" style={{ objectFit: "cover" }} />
        </div>
      </section>

      <section className="legal-content">
        <div className="legal-inner">
          <p className="legal-date">Last Updated: {lastUpdated}</p>
          {children}
        </div>
      </section>
    </div>
  );
}

export function LegalLink({ href, children }: { href: string; children: React.ReactNode }) {
  return <Link href={href}>{children}</Link>;
}
