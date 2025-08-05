import sapu from "../assets/sapu.png";
import calcu from "../assets/calcu.png";
import tattoo from "../assets/tatu.png";
import batalla from "../assets/batalla.png";
import construccion from "../assets/construccion1.jpg";
import fondo1 from "../assets/fondo1.png";
import fondopoke from "../assets/pokemonfondo.png";

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
    title: "Pokemon (Beta)",
    description: "Improvisacion de un juego al que falta terminar",
    image: fondopoke,
    link: "https://nekobambam.github.io/pokemon/",
  },
  {
    title: "Batalla Naval",
    description:
      "Este es un juego que fue presentado en mi trabajo final de progrmación I realizado con 3 grandes compañeros de la factultad",
    image: batalla,
    link: "https://github.com/NekoBamBam/batallanaval1.0",
  },
  {
    tittle: "...",
    description: "En construcción",
    image: construccion,
  },
];

function Work() {
  return (
    <div
      className="min-h-screen bg-dark py-12 h-full"
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-info mb-4">
          Mis Trabajos y Contribuciones
        </h1>

        <p className="text-lg text-white">
          Aquí están algunos de los proyectos en los que he trabajado.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-3 gap-8 px-6 lg:px-24">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card bg-base-100  transition-all duration-300 hover:scale-105 hover:shadow-xl "
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
                  className="btn btn-outline text-[#95C623] border-[#95C623] hover:bg-[#95C623] hover:text-black"
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
