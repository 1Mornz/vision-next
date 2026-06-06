export type VideoTestimonial = {
  id: number;
  name: string;
  role: string;
  hook: string;
  poster: string;
  videoSrc: string;
  mp4Src: string;
};

export type AgentTestimonial = {
  id: number;
  image: string;
  alt: string;
  quote: string;
  author: string;
  meta: string;
  videoMp4: string;
  videoWebm: string;
};

export const videoTestimonials: VideoTestimonial[] = [
  {
    id: 1,
    name: "Jaden Jankowski",
    role: "Visionaries Agent",
    hook: "From door-to-door sales to impact: My journey",
    poster: "/testimonials/jaden_still.webp",
    videoSrc: "/testimonials/jaden.webm",
    mp4Src: "/testimonials/jaden.mp4",
  },
  {
    id: 2,
    name: "Kolin Leduc",
    role: "Visionaries Agent",
    hook: "From struggle to sales: My success story",
    poster: "/testimonials/leduc_still.webp",
    videoSrc: "/testimonials/leduc.webm",
    mp4Src: "/testimonials/leduc.mp4",
  },
];

export const agentTestimonials: AgentTestimonial[] = [
  {
    id: 1,
    image: "/growth_mindset.webp",
    alt: "Tommy Harris",
    quote:
      "I used to start strong and fade out by midweek. At Visionaries, I learned how to run my schedule like a pro and stack winning habits daily. That discipline changed both my production and my mindset.",
    author: "TOMMY HARRIS",
    meta: "Visionaries Agent",
    videoMp4: "/testimonials/agents/harris.mp4",
    videoWebm: "/testimonials/agents/harris.webm",
  },
  {
    id: 2,
    image: "/jackson_pisano.webp",
    alt: "Jackson Pisano",
    quote:
      "Coming in without industry experience was intimidating, but the training was clear and repeatable. I always knew what to do next. Within months, I went from guessing to performing with purpose.",
    author: "JACKSON PISANO",
    meta: "Visionaries Agent",
    videoMp4: "",
    videoWebm: "",
  },
  {
    id: 3,
    image: "/gianni.webp",
    alt: "Gianni Khalil",
    quote:
      "What stood out to me was the standard. Everyone here takes ownership, shows up prepared, and backs each other up. That environment forced me to elevate and become sharper in every part of life.",
    author: "GIANNI KHALIL",
    meta: "Visionaries Agent",
    videoMp4: "/testimonials/agents/gianni.mp4",
    videoWebm: "/testimonials/agents/gianni.webm",
  },
  {
    id: 4,
    image: "/caiden_sloan.webp",
    alt: "Caiden Sloan",
    quote:
      "I started with no license, no script, and no clue where to begin. Visionaries gave me a step-by-step path, real mentorship, and constant feedback. The progress felt real because the process was real.",
    author: "CAIDEN SLOAN",
    meta: "Visionaries Agent",
    videoMp4: "/testimonials/agents/sloan.mp4",
    videoWebm: "/testimonials/agents/sloan.webm",
  },
  {
    id: 5,
    image: "/john_baocius.webp",
    alt: "John Bagocius",
    quote:
      "Before this team, I relied on motivation. Here, I built systems. The coaching around leadership and pipeline management helped me stop reacting and start operating like a professional.",
    author: "JOHN BAOCIUS",
    meta: "Visionaries Agent",
    videoMp4: "/testimonials/agents/bagocius.mp4",
    videoWebm: "/testimonials/agents/bagocius.webm",
  },
  {
    id: 6,
    image: "/alex_mush.webp",
    alt: "Alex Mush",
    quote:
      "Visionaries gave me more than sales skills. I became better at communication, decision-making, and self-discipline. That growth shows up at work, at home, and in how I lead myself every day.",
    author: "ALEX MUSHARBASH",
    meta: "Visionaries Agent",
    videoMp4: "/testimonials/alex.mp4",
    videoWebm: "/testimonials/alex.webm",
  },
];

export function hasTestimonialVideo(testimonial: AgentTestimonial) {
  return Boolean(testimonial.videoMp4 && testimonial.videoWebm);
}
