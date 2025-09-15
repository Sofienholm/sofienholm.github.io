import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import styles from "./ProjectsSlider.module.css";
import { useNavigate } from "react-router-dom";

const projects = [
  {
    title: "BEDR BEER",
    subtitle: "Branding & Interaktivt Design",
    image: "/assets/BEDRBEER/bedrbeer-1.png",
    slug: "/projects/bedr-beer",
  },
  {
    title: "Cykelcyklus",
    subtitle: "UX & Infografik",
    image: "/assets/CYCLE/cycle-1.png",
    slug: "/projects/cykelcyklus",
  },
  {
    title: "Plakat",
    subtitle: "Grafisk Design",
    image: "/assets/POSTER/poster-1.png",
    slug: "/projects/plakat",
  },
  // tilføj flere projekter her…
];

export default function ProjectsSlider() {
  const navigate = useNavigate();

  return (
    <section className={styles.sliderWrapper}>
      <Swiper
        modules={[EffectFade, Mousewheel, Pagination]}
        effect="fade"
        speed={2000}
        loop
        mousewheel={{ forceToAxis: true }}
        pagination={{ clickable: true }}
        className={styles.swiper}
      >
        {projects.map((p, idx) => (
          <SwiperSlide key={idx}>
            <div className={styles.slide} onClick={() => navigate(p.slug)}>
              <img src={p.image} alt={p.title} className={styles.image} />
              <div className={styles.textWrapper}>
                <h1 className={styles.title}>
                  {p.title} <br />
                  <span>{p.subtitle}</span>
                </h1>
                <h1 className={styles.outline}>Portfolio</h1>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
