import { Description } from "@/components/Description";
import Hero from "@/components/Hero";
import { Intro } from "@/components/Intro";
import Services from "@/components/Services";

export default function Home() {
  return (
    <main>
      <Hero/>
      <Intro/>
      <Services/>
      <Description/>
    </main>
  );
}
