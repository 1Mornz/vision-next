import type { Metadata } from "next";
import AboutPage from "@/components/pages/AboutPage";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata("/about");

export default function About() {
  return <AboutPage />;
}
