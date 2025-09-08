import ProjektRow from "./ProjektRow";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function ProjektSection() {
  const [clients, setClients] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data/clients.json");
      const data = await response.json();
      setClients(data);
    }
    getData();
  }, []);
  return (
    <section id="clients">
      <div className="headline-container">
        <h2>Clients</h2>
      </div>
      {clients.map((client) => (
        <div key={client.id}>
          <ProjektRow client={client} />
          <NavLink to={`/clients/${client.id}`}>Læs mere</NavLink>
        </div>
      ))}
    </section>
  );
}
