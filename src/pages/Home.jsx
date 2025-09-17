import Hero from "./Hero.jsx";
import Intro from "../Components/intro.jsx";
import ProjectShowcase from "../Components/ProjectShowcase";
import beer1 from "../assets/BEDRBEER/BB1.png";
import beer2 from "../assets/BEDRBEER/BB2.png";
import beer3 from "../assets/BEDRBEER/BB3.png";

export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <ProjectShowcase
        title="BEDR BEER"
        heroImg={beer1}
        introText="Et webprojekt om alkoholfri øl..."
        gallery={[beer1, beer2, beer3]}
        outroText="Projektet viste hvordan jeg arbejder med branding og interaktivt design..."
      />

      <ProjectShowcase
        title="Plakat Projekt"
        heroImg="/img/plakat-hero.png"
        introText="Et responsivt plakatprojekt..."
        gallery={[
          "/img/plakat-1.png",
          "/img/plakat-2.png",
          "/img/plakat-3.png",
        ]}
        outroText="Her eksperimenterede jeg med farver, logo og baggrundsvideo..."
      />
    </div>
  );
}
