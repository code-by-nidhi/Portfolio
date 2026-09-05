import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Hero } from "@/components/sections/hero";
import { Journey } from "@/components/sections/journey";
import { MarqueeStrip } from "@/components/sections/marquee-strip";
import { Practice } from "@/components/sections/practice";
import { Skills } from "@/components/sections/skills";
import { Work } from "@/components/sections/work";
import { PortraitFlight } from "@/components/ui/portrait-flight";

export default function HomePage() {
  return (
    <>
      {/* The single portrait shared by the hero and the About section. */}
      <PortraitFlight />
      <Hero />
      <MarqueeStrip />
      <About />
      <Practice />
      <Work />
      <Skills />
      <Journey />
      <Contact />
    </>
  );
}
