import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import FeaturedProjects from "@/components/featured-projects";
import Certificates from "@/components/certificates";
import About from "@/components/about";
import { Boxes } from "@/components/ui/background-boxes";

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-accent-foreground relative overflow-hidden">
      <div className="fixed inset-0 z-0 pointer-events-none opacity-20">
        <Boxes />
      </div>

      <Navbar />

      <main className="max-w-[1280px] mx-auto overflow-x-hidden relative z-10">
        {/* Hero Section */}
        <section id="beranda" className="px-6">
          <Hero />
        </section>

        {/* Divider */}
        <div className="h-px bg-border mx-6" />

        {/* About Section */}
        <section id="about" className="px-6 md:px-12">
          <About />
        </section>

        {/* Divider */}
        <div className="h-px bg-border mx-6" />

        {/* Featured Projects */}
        <section id="projects" className="px-6 md:px-12">
          <FeaturedProjects />
        </section>

        {/* Divider */}
        <div className="h-px bg-border mx-6" />

        {/* Certificates */}
        <section id="certificates" className="px-6 md:px-12">
          <Certificates />
        </section>

        {/* Divider */}
        <div className="h-px bg-border mx-6" />

        {/* Footer */}
        <div className="px-6 md:px-12">
          <Footer />
        </div>
      </main>
    </div>
  );
}
