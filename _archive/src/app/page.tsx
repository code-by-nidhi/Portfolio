import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import TechStrip from "@/components/tech-strip";
import Services from "@/components/services";
import Projects from "@/components/projects";
import WhyMe from "@/components/why-me";
import Skills from "@/components/skills";
import About from "@/components/about";
import FreelanceCTA from "@/components/freelance-cta";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import CoachingModal from "@/components/coaching-modal";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0B0F17] text-slate-100 selection:bg-indigo-500/30 selection:text-white relative">
      <CoachingModal />
      <Navbar />
      <Hero />
      <TechStrip />
      <Services />
      <Projects />
      <WhyMe />
      <Skills />
      <About />
      <FreelanceCTA />
      <Contact />
      <Footer />
    </main>
  );
}
