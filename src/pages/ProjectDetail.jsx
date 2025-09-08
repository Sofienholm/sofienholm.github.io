import { useParams } from "react-router";

export default function ProjectDetail() {
  const { id } = useParams();

  return (
    <section className="ProjectDetail">
      <h1>Project Detail for ID: {id}</h1>
      {/* Her kan du senere hente og vise rigtige data baseret på id */}
    </section>
  );
}
