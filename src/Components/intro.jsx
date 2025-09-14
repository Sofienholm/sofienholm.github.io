import img5 from "../assets/intro.png";
import "./intro.css";

export default function Intro() {
  return (
    <section className="intro-section">
      <div className="intro-text">
        <h2>Welcome to My Portfolio</h2>
        <p>
          Jeg er multimediedesign-studerende med en passion for frontend og et
          kreativt øje for design. Jeg elsker at kombinere struktur og æstetik i
          mine løsninger.
        </p>
        <a href="/about" className="intro-btn">
          Læs mere om mig
        </a>
      </div>

      <div className="intro-image">
        <img src={img5} alt="Intro" />
      </div>
    </section>
  );
}
