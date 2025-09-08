import ClientRow from "./ClientRow";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";

export default function ClientsSection() {
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
          <ClientRow client={client} />
          <NavLink to={`/clients/${client.id}`}>Læs mere</NavLink>
        </div>
      ))}
    </section>
  );
  console.log(clients);
}
