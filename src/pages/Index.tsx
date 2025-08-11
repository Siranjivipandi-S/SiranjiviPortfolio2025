import { About } from "@/components/About";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Navigation } from "@/components/Navigation";
import { Projects } from "@/components/Projects";
import { TechSkills } from "@/components/TechSkills";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <Hero />
        <About />
        <TechSkills />
        <Experience />
        <Education />
        <Projects />

        <Footer />
      </main>
    </div>
  );
};

export default Index;
