import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Capabilities from "@/components/Capabilities";
import InteractiveDashboards from "@/components/InteractiveDashboards";
import ProcessSection from "@/components/ProcessSection";
import ExperienceSection from "@/components/ExperienceSection";
import SkillTags from "@/components/SkillTags";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Capabilities />
        <InteractiveDashboards />
        <ProcessSection />
        <ExperienceSection />
        <SkillTags />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
