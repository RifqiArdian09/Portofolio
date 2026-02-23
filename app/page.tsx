import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import FeaturedProjects from "@/components/featured-projects";
import Certificates from "@/components/certificates";
import { BinaryBackground } from "@/components/binary-background";

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-black">
      <Navbar />

      <main className="pt-32 pb-20 px-6 md:px-24 xl:px-32 max-w-[1400px] mx-auto overflow-x-hidden">
        {/* Full Width Hero Section */}
        <section id="beranda" className="mb-20">
          <Hero />
        </section>

        {/* Dedicated GitHub Activity Section */}
        <section id="github" className="mb-24">
          <div className="flex items-center gap-3 mb-8">
            <div className="bg-accent h-2 w-2"></div>
            <h2 className="text-3xl md:text-5xl font-black uppercase tracking-tighter">
              Aktivitas <span className="text-foreground/20 italic">GitHub</span>
            </h2>
          </div>
        </section>

        {/* Separator / Visual Break */}
        <div className="w-full h-px bg-foreground/10 my-20"></div>

        {/* Featured Projects - Full Width Bold */}
        <section id="projects" className="py-20">
          <FeaturedProjects />
        </section>

        {/* Certificates - Asymmetric Layout */}
        <section id="certificates" className="py-20">
          <Certificates />
        </section>

        <Footer />
      </main>

      {/* Global Decorative Grid ID */}
    </div>
  );
}
