import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function Project() {
  const [project, setProject] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/projects.json");
      const data = await response.json();
      setProject(data);
    }
    getData();
  }, []);
  return (
    <section id="projects">
      <div className="headline-container">
        <h2>Clients</h2>
      </div>
      {project.map((project) => (
        <div key={project.id}>
          <NavLink to={`/projects/${project.id}`}>Læs mere</NavLink>
        </div>
      ))}
    </section>
  );
}
