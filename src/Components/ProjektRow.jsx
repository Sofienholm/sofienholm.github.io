export default function ProjekttRow({ client }) {
  return (
    <section className="client-row">
      <article>
        <h3>{client.name}</h3>
        <h4>{client.subtitle}</h4>
        <p>{client.body}</p>
        <section className="client-links">
          {client.links.map((link, index) => (
            <a
              key={`${client.id}-${index}`}
              href={link.url}
              rel="noreferrer"
              target="_blank"
            >
              {link.text} <i className="ion-ios-arrow-forward"></i>
              <i className="ion-ios-arrow-forward"></i>{" "}
            </a>
          ))}
        </section>
      </article>
      <figure>
        <img src={client.image} alt="House of Vincent" />
      </figure>
    </section>
  );
}
