import Navigation from "@/components/navigation";
import Hero from "@/components/sections/hero";
import About from "@/components/sections/about";
import Skills from "@/components/sections/skills";
import Projects from "@/components/sections/projects";
import Certifications from "@/components/sections/certifications";
import Education from "@/components/sections/education";
import Achievements from "@/components/sections/achievements";
import Experience from "@/components/sections/experience";
import Contact from "@/components/sections/contact";
import Footer from "@/components/sections/footer";
import CertificateModal from "@/components/certificate-modal";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Achievements />
      <Experience />
      <Contact />
      <Footer />
      <CertificateModal />
    </div>
  );
}
