import SingleClient from "./SingleClient";
import { clientsData } from "./clientsData";

const Clients = () => {
  // Duplicate the clients data multiple times to ensure seamless infinite scrolling
  const duplicatedClients = [...clientsData, ...clientsData, ...clientsData, ...clientsData];

  return (
    <section className="dark:bg-dark overflow-hidden pt-12">
      <div className="container ">
        <div className="relative">
          {/* Marquee container with infinite scroll */}
          <div className="flex animate-scroll whitespace-nowrap">
            {duplicatedClients.map((client, i) => (
              <SingleClient key={`${client.id}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
