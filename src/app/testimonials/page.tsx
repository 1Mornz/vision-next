import type { Metadata } from "next";
import TestimonialsPage from "@/components/pages/TestimonialsPage";
import { buildMetadata } from "@/lib/site";

export const metadata: Metadata = buildMetadata("/testimonials");

export default function Testimonials() {
  return <TestimonialsPage />;
}
