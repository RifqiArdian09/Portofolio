import Footer from "@/components/footer";
import Hero from "@/components/hero";
import { Navbar } from "@/components/navbar";
import FeaturedProjects from "@/components/featured-projects";
import Certificates from "@/components/certificates";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="overflow-hidden">
        <Hero />
      
        <section id="projects">
          <FeaturedProjects />
        </section>
        <section id="certificates">
          <Certificates />
        </section>
        <Footer />
      </main>
    </>
  );
}
