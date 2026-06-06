"use client";

import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { ApplyModalProvider } from "@/context/ApplyModalContext";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <ApplyModalProvider>
      <div className="layout">
        <Navbar />
        <main id="main-content">{children}</main>
        <Footer />
      </div>
    </ApplyModalProvider>
  );
}
