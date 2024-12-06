/* import React from "react";

const ContactCards = () => {
  const contacts = [
    { id: 1, name: "Contacto 1", description: "Descripción 1", link: "#" },
    { id: 2, name: "Contacto 2", description: "Descripción 2", link: "#" },
    { id: 3, name: "Contacto 3", description: "Descripción 3", link: "#" },
    { id: 4, name: "Contacto 4", description: "Descripción 4", link: "#" },
  ];

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl">
        {contacts.map((contact) => (
          <a
            key={contact.id}
            href={contact.link}
            className="card w-full bg-base-100 shadow-xl hover:scale-105 transform transition-transform duration-300"
          >
            <div className="card-body">
              <h2 className="card-title text-xl">{contact.name}</h2>
              <p>{contact.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactCards;
 */