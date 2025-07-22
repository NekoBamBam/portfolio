import yo from "../assets/yo.jpg";
import fondo1 from "../assets/fondo1.png";
function Me() {
  return (
    <div
      className="min-h-screen bg-dark py-10 px-4 sm:px-10 flex flex-col items-center"
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <h2 className="text-4xl font-bold text-accent mb-8 text-center">
        Sobre Mí
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 max-w-7xl w-full">
        {/* Imagen */}
        <div className="w-40 md:w-1/4 rounded-full overflow-hidden shadow-lg border-2 border-accent flex-shrink-0">
          <img src={yo} alt="Coria Franco Nicolas" className="w-full h-auto" />
        </div>

        {/* Texto */}
        <div className="text-white text-center md:text-left text-base md:text-lg leading-relaxed md:w-1/2">
          <p>
            Hola! Soy{" "}
            <span className="text-accent font-semibold">
              Coria Franco Nicolás
            </span>
            , una persona apasionada por el{" "}
            <span className="text-accent font-semibold">diseño web</span>,
            siempre buscando aprender cosas nuevas y mejorar cada día.
            <span className="text-accent font-semibold">
              {" "}
              Me gusta trabajar en equipo
            </span>
            ,, compartir ideas y socializar para crear un ambiente ameno y
            colaborativo.
          </p>
          <br />
          <p>
            Me esfuerzo mucho para cumplir con los objetivos y entregar
            resultados de calidad. Creo que la combinación de creatividad,
            aprendizaje continuo y buena comunicación es clave para crecer
            profesionalmente.
          </p>
        </div>

        {/* Timeline */}
        <div className="md:w-1/4 w-full self-start -mt-24">
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start text-accent">2013</div>
              <div className="timeline-end timeline-box text-white">
                Bloque de comando Minecraft
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-accent h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <hr className="bg-accent" />
            </li>
            <li>
              <hr className="bg-accent" />
              <div className="timeline-start text-accent">Nov-2024</div>
              <div className="timeline-end timeline-box text-white">
                <a
                  href="https://lawcito.github.io/minecraft-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:underline text-fuchsia-600"
                >
                  SapuCraft!
                </a>
              </div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="text-accent h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-accent" />
            </li>
            <li>
              <hr className="bg-accent" />
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start text-accent">Dic-2024</div>
              <div className="timeline-end timeline-box  ">
                Programador Web CFL 404
              </div>
              <hr className="bg-accent" />
            </li>
            <li>
              <hr className="bg-accent" />
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start text-accent">Mar-2025</div>
              <div className="timeline-end timeline-box  ">
                Inicio Desarrollo Mobile CFL 404
              </div>
              <hr className="bg-accent" />
            </li>
            <li>
              <hr className="bg-accent" />
              <div className="timeline-start text-accent">Mar-2025</div>
              <div className="timeline-end timeline-box ">
                Inicio Tenicatura Universitaria en Progamación UTN
              </div>
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-accent"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="bg-accent" />
            </li>
            <li>
              <hr className="bg-accent" />
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 text-accent "
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start text-accent">Jul-2025</div>
              <div className="timeline-end timeline-box">Programación I</div>
              <hr className="bg-accent" />
            </li>
            <li>
              <hr className="" />
              <div className="timeline-start text-white">Dic-2025</div>
              <div className="timeline-end timeline-box  ">
                Fin Desarrollo Mobile
              </div>
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <hr className="" />
            </li>
            <li>
              <hr className="" />
              <div className="timeline-start text-white">Nov-2026</div>
              <div className="timeline-end timeline-box  ">
                Fin Tecnicatura Programación🥳
              </div>
              <div className="timeline-middle ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5 "
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Me;
