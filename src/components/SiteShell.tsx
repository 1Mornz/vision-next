import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function SiteShell({ children }: { children: React.ReactNode }) {
  return (
    <div className="layout">
      <Navbar />
      <main id="main-content">{children}</main>
      <Footer />
    </div>
  );
}
