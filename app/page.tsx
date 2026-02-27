import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import FeaturedProjects from "@/components/featured-projects";
import Certificates from "@/components/certificates";
import ContactForm from "@/components/contact-form";

export default function Home() {
  return (
    <div className="bg-background min-h-screen selection:bg-accent selection:text-accent-foreground">
      <Navbar />

      <main className="max-w-[1280px] mx-auto overflow-x-hidden">
        {/* Hero Section */}
        <section id="beranda" className="px-6">
          <Hero />
        </section>

        {/* Divider */}
        <div className="h-px bg-border mx-6" />

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

        {/* Contact Form */}
        <section id="contact" className="px-6 md:px-12">
          <ContactForm />
        </section>

        {/* Footer */}
        <div className="px-6 md:px-12">
          <Footer />
        </div>
      </main>
    </div>
  );
}
