import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Projects() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProjects(data);
    }
    getData();
  }, []);
  return (
    <section id="projects">
      <div className="headline-container">
        <h2>Projects</h2>
      </div>
      <div className="grid">
        {projects.map((project) => (
          <article key={project.id} className="card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <NavLink to={`/projects/${project.id}`}>Se detaljer</NavLink>
          </article>
        ))}
      </div>
    </section>
  );
}
