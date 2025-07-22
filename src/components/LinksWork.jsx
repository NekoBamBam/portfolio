import sapu from "../assets/sapu.png";
import poke from "../assets/poke.png";
import calcu from "../assets/calcu.png";
import tattoo from "../assets/tatu.png";
import batalla from "../assets/batalla.png"
import construccion from "../assets/construccion1.jpg"

const projects = [
  {
    title: "SapuCraft",
    description:
      "Esta pagina esta insipirada en un servidor de Minecraft con amigos.",
    image: sapu,
    link: "https://lawcito.github.io/minecraft-web/ ",
  },
  {
    title: "Tattoo Web",
    description: "Mi pagina personal de tattoo",
    image: tattoo,
    link: "https://nekobambam.github.io/tattoo-web/",
  },
  {
    title: "Calculadora",
    description: "Una pequeña calculadora realizada en el CFL",
    image: calcu,
    link: "https://nekobambam.github.io/CalcuCFL/",
  },
  {
    title: "Pokemon (Proximamente)",
    description: "Este es un gran juego (no me salió)",
    image: poke,
    link: "https://github.com/NekoBamBam/pokemon",
  },
  {
    title: "Batalla Naval",
    description:
      "Este es un juego que fue presentado en mi trabajo final de progrmación I realizado con 3 grandes compañeros de la factultad",
    image: batalla,
    link: "https://github.com/NekoBamBam/batallanaval1.0",
  },
  {
    tittle: "Anotador Mobile",
    description: "No mas spoilers",
    image: construccion,
  }
];

function Work() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 py-12 h-full">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#0daab7] mb-4">
          Mis Trabajos y Contribuciones
        </h1>

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
