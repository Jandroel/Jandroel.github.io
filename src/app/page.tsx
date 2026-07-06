import { About } from "@/components/sections/About";
import { Contact } from "@/components/sections/Contact";
import { CreativeArchive } from "@/components/sections/CreativeArchive";
import { GithubSection } from "@/components/sections/GithubSection";
import { Hero } from "@/components/sections/Hero";
import { Process } from "@/components/sections/Process";
import { Projects } from "@/components/sections/Projects";
import { TechStack } from "@/components/sections/TechStack";
import { Timeline } from "@/components/sections/Timeline";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <TechStack />
      <Timeline />
      <GithubSection />
      <CreativeArchive />
      <Process />
      <Contact />
    </main>
  );
}
