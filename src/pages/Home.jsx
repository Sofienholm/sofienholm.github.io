import Hero from "./Hero.jsx";
import { NavLink } from "react-router";
import Intro from "../Components/intro.jsx";
import ProjectShowcase from "../Components/ProjectShowcase";
import beer1 from "../assets/BEDRBEER/BB1.png";
import beer2 from "../assets/BEDRBEER/BB2.png";
import beer3 from "../assets/BEDRBEER/BB3.png";
import beer4 from "../assets/BEDRBEER/BB4.png";
import pla1 from "../assets/PLAKATEN/poster1.png";
import pla2 from "../assets/PLAKATEN/poster2.png";
import pla3 from "../assets/PLAKATEN/poster3.jpg";
import pla4 from "../assets/PLAKATEN/poster4.png";
import styles from "../Components/ProjectShowcase.module.css";



export default function Home() {
  return (
    <div>
      <Hero />
      <Intro />
      <div className="new">
        <h2>Nye Projekter</h2>
      </div>

      <ProjectShowcase
        title="BEDR BEER"
        heroImg={beer1}
        introText="Et webprojekt om alkoholfri øl..."
        gallery={[beer4, beer2, beer3]}
        outroText="Projektet viste hvordan jeg arbejder med branding og interaktivt design..."
      />

      <ProjectShowcase
        title="PLAKATEN"
        heroImg={pla1}
        introText="Et responsivt plakatprojekt..."
        gallery={[pla2, pla3, pla4]}
        outroText="Her eksperimenterede jeg med farver, logo og baggrundsvideo..."
      />
      <div className={styles.alle}>
        <h3>
          Vil du se mere?
          <p>
            <NavLink to="/projects">Alle projekter</NavLink>
          </p>
        </h3>
      </div>
    </div>
  );
}
