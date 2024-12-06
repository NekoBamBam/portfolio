import React from "react";
import sapu from "../assets/sapu.png"

const projects = [
  {
    title: "SapuCraft",
    description: "Una breve descripción de este proyecto increíble.",
    image: sapu,
    link: "https://lawcito.github.io/minecraft-web/ ",
  },
  {
    title: "Pokemon",
    description: "Este es otro proyecto que muestra mi habilidad.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tuUsuario/proyecto2",
  },
  {
    title: "Proyecto 3",
    description: "Un proyecto con diseño avanzado y funcionalidad.",
    image: "https://via.placeholder.com/300",
    link: "https://github.com/tuUsuario/proyecto3",
  },
];

function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 h-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0daab7] mb-4">Mis Trabajos y Contribuciones</h1>
        
        <p className="text-lg text-[gray-500]">
          Aquí están algunos de los proyectos en los que he trabajado.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 lg:px-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow duration-300"
          >
            <figure>
              <img
                src={project.image}
                alt={project.title}
                className="object-cover h-48 w-full "
              />
            </figure>
            <div className="card-body bg-[#0E4749] ">
              <h2 className="card-title text-[#95C623] ">{project.title}</h2>
              <p>{project.description}</p>
              <div className="card-actions justify-end">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                >
                  Ver Proyecto
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
