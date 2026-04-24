import { Chrome } from "@/components/portfolio/chrome";
import { Hero } from "@/components/portfolio/hero";
import { About } from "@/components/portfolio/about";
import { Experience } from "@/components/portfolio/experience";
import { Skills } from "@/components/portfolio/skills";
import { Projects } from "@/components/portfolio/projects";
import { OpenSource } from "@/components/portfolio/open-source";
import { Contact } from "@/components/portfolio/contact";
import { Footer } from "@/components/portfolio/footer";
import { RevealScript } from "@/components/portfolio/reveal-script";

export default function Home() {
  return (
    <div className="page">
      <Chrome />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <OpenSource />
      <Contact />
      <Footer />
      <RevealScript />
    </div>
  );
}
