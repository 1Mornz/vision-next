"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import OnboardingLink from "@/components/OnboardingLink";

const NAV_LINKS = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/values", label: "VALUES" },
  { href: "/testimonials", label: "TESTIMONIALS" },
  { href: "/contact", label: "CONTACT" },
] as const;

export default function Navbar() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [navbarScrolled, setNavbarScrolled] = useState(false);
  const [navLogoSrc, setNavLogoSrc] = useState("/logo.webp");

  const closeMobileMenu = useCallback(() => setMenuOpen(false), []);

  useEffect(() => {
    closeMobileMenu();
  }, [pathname, closeMobileMenu]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => {
    const handleScroll = () => setNavbarScrolled(window.scrollY > 50);
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMobileMenu();
    };
    const handleOutsideClick = (e: MouseEvent) => {
      if (!menuOpen) return;
      const nav = document.getElementById("navbar");
      if (nav && !nav.contains(e.target as Node)) closeMobileMenu();
    };
    const handleResize = () => {
      if (window.innerWidth > 960) closeMobileMenu();
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("keydown", handleEsc);
    document.addEventListener("click", handleOutsideClick);
    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("keydown", handleEsc);
      document.removeEventListener("click", handleOutsideClick);
      window.removeEventListener("resize", handleResize);
    };
  }, [menuOpen, closeMobileMenu]);

  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };

  return (
    <nav id="navbar" className={navbarScrolled ? "scrolled" : undefined}>
      <div className="nav-inner">
        <ul className="nav-links">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link href={link.href} className={isActive(link.href) ? "active" : undefined}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <Link href="/" className="nav-brand" aria-label="Visionaries home">
          <Image
            className="nav-logo-icon"
            src={navLogoSrc}
            alt="Visionaries logo"
            width={28}
            height={28}
            onError={() => setNavLogoSrc("/logo.png")}
            priority
          />
          <span className="nav-logo-text">
            VISIONARIES<span>.</span>
          </span>
        </Link>

        <div className="nav-right">
          <OnboardingLink className="nav-apply-btn">JOIN</OnboardingLink>
          <button
            type="button"
            className={`hamburger${menuOpen ? " open" : ""}`}
            aria-label="Toggle menu"
            aria-controls="mobileMenu"
            aria-expanded={menuOpen}
            onClick={(e) => {
              e.stopPropagation();
              setMenuOpen((open) => !open);
            }}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu${menuOpen ? " open" : ""}`}
        id="mobileMenu"
        aria-hidden={!menuOpen}
      >
        {NAV_LINKS.map((link) => (
          <Link key={link.href} href={link.href} onClick={closeMobileMenu}>
            {link.label}
          </Link>
        ))}
        <OnboardingLink className="mobile-apply-btn" onClick={closeMobileMenu}>
          JOIN THE TEAM →
        </OnboardingLink>
      </div>
    </nav>
  );
}
