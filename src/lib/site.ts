export const BASE_URL = "https://thevisionarywealthgroup.com";
export const DEFAULT_TITLE = "Visionaries | The Greatest Team To Ever Do It";
export const DEFAULT_DESCRIPTION =
  "Visionaries helps agents level up in every aspect of life through mentorship, training, and leadership development.";
export const DEFAULT_IMAGE = `${BASE_URL}/og-banner.png`;

export const US_STATES = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
] as const;

export type PageMeta = {
  title: string;
  description: string;
  path: string;
};

export const PAGE_META: Record<string, PageMeta> = {
  "/": {
    title: "Visionaries | The Greatest Team To Ever Do It",
    description:
      "Visionaries helps agents level up mentally, physically, spiritually, and financially through elite mentorship, training, and leadership development.",
    path: "/",
  },
  "/about": {
    title: "About Visionaries | Our Story and Mission",
    description:
      "Learn how Visionaries was built by agents for agents, with a mission to create growth, impact, and long-term success across all 50 states.",
    path: "/about",
  },
  "/values": {
    title: "Visionaries Values | The Pillars We Build On",
    description:
      "Explore the core values that define Visionaries culture, from intentionality and gratitude to accountability and a relentless growth mindset.",
    path: "/values",
  },
  "/testimonials": {
    title: "Visionaries Testimonials | Real Agent Stories",
    description:
      "Read real stories from Visionaries agents and see how mentorship, training, and culture are driving personal and professional transformation.",
    path: "/testimonials",
  },
  "/contact": {
    title: "Contact Visionaries | Join the Team",
    description:
      "Get in touch with Visionaries to apply, ask questions, and learn more about mentorship, licensing support, and opportunities nationwide.",
    path: "/contact",
  },
  "/privacy": {
    title: "Privacy Policy | Visionaries",
    description:
      "Review the Visionaries Privacy Policy to understand how we collect, use, store, and protect your information.",
    path: "/privacy",
  },
  "/terms": {
    title: "Terms of Service | Visionaries",
    description:
      "Read the Visionaries Terms of Service governing access and use of our website, content, and onboarding experience.",
    path: "/terms",
  },
};

export function buildMetadata(path: string) {
  const meta = PAGE_META[path] ?? {
    title: DEFAULT_TITLE,
    description: DEFAULT_DESCRIPTION,
    path,
  };
  const canonicalUrl = `${BASE_URL}${meta.path === "/" ? "" : meta.path}`;

  return {
    title: meta.title,
    description: meta.description,
    alternates: { canonical: canonicalUrl },
    openGraph: {
      type: "website" as const,
      siteName: "Visionaries",
      title: meta.title,
      description: meta.description,
      url: canonicalUrl,
      images: [
        {
          url: DEFAULT_IMAGE,
          width: 1200,
          height: 630,
          type: "image/png",
          alt: "Visionaries leadership event with a speaker on stage raising his fist.",
        },
      ],
    },
    twitter: {
      card: "summary_large_image" as const,
      title: meta.title,
      description: meta.description,
      images: [DEFAULT_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}
