import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Mousewheel, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "./Projects.css";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await fetch("/data/projects.json");
      const data = await res.json();
      setProjects(data);
    })();
  }, []);

  return (
    <section className="projects-section">
      <div className="projects-header">
        <h2>Projects</h2>
        <p>Et udvalgt galleri af mine cases – scroll ned for at bladre.</p>
      </div>

      <Swiper
        modules={[EffectFade, Mousewheel, Pagination]}
        effect="fade"
        speed={1200}
        loop={false}
        // VIGTIGT: ingen forceToAxis → vertikal scroll styrer nu horisontal swiper
        mousewheel={{
          releaseOnEdges: true,
          thresholdDelta: 20,
          sensitivity: 1,
        }}
        pagination={{ clickable: true }}
        className="projects-swiper"
      >
        {projects.map((project) => (
          <SwiperSlide key={project.id}>
            <article className="slide">
              <div className="slide-media">
                <img src={project.image} alt={project.title} />
              </div>

              <div className="slide-text">
                <h3 className="slide-title">
                  {project.title} <span className="year">· {project.year}</span>
                </h3>
                <p className="slide-desc">{project.description}</p>
                <NavLink to={`/projects/${project.id}`} className="btn">
                  Se detaljer
                </NavLink>
              </div>

              {/* Outline-overskrift som i templaten */}
              <h1 className="slide-outline">Portfolio</h1>
            </article>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
