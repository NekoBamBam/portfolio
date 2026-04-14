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
            <span className="text-accent font-semibold">Diseño web</span>,
            siempre buscando aprender cosas nuevas y mejorar cada día.
            <span className="text-accent font-semibold">
              {" "}
              Me gusta trabajar en equipo
            </span>
            , compartir ideas y socializar para crear un ambiente ameno y
            colaborativo.
          </p>
          <br />
          <p>
            Me esfuerzo mucho para cumplir con los objetivos y entregar
            resultados de calidad. Creo que la combinación de creatividad,
            aprendizaje continuo y buena comunicación es clave para crecer
            profesionalmente.
          </p>
          <br />
          <h2 className="text-2xl font-bold text-accent mb-10 text-center">
        Mis Estudios
      </h2>
          <p>
            Soy estudiante de la<a href="https://www.frlp.utn.edu.ar/tecnicatura-programacion" className="text-accent font-semibold" target="_blank"> Tecnicatura Universitaria en Programación
              en la UTN La Plata</a>, actualmente en curso y con fecha estimada de finalización en 2026.
            Además, en 2024, finalicé la formación en <a href="https://cfl404.ar/programador.html"  className="text-accent font-semibold" target="_blank">Programador Web en el
            Centro de Formación Laboral 404 Berisso.</a> También finalicé mi capacitación en
            noviembre del 2025 en <a href="https://cfl404.ar/Apps.html" className="text-accent font-semibold" target="_blank"> Desarrollador de Apps Mobile </a>En React Native en el mismo
            centro de formación. Desde siempre, he tenido interés en la programación y el
            desarrollo de aplicaciones, lo que me motivó a seguir estos estudios para adquirir
            conocimientos sólidos en el área. La combinación de formación académica en programación
            y en desarrollo web y móvil me permite tener una visión integral y práctica para afrontar
            desafíos tecnológicos y crear soluciones innovadoras.
          </p>
        </div>

        {/* Timeline */}
        <div className="w-full md:w-1/4 mt-0 md:-mt-24 self-start">
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-end md:timeline-start text-accent">2013</div>
              <div className="timeline-start md:timeline-end timeline-box text-white">
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
              <div className="timeline-start md:timeline-start text-accent">Mar-2024</div>
              <div className="timeline-end md:timeline-end timeline-box text-white">
                <a
                  href="https://lawcito.github.io/minecraft-web/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=""
                >
                  Inicio Programador Web CFL 404
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
              <div className="timeline-end md:timeline-start text-accent">Nov-2024</div>
              <div className="timeline-start md:timeline-end timeline-box text-white">
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
              <div className="timeline-end md:timeline-start text-accent">Mar-2025</div>
              <div className="timeline-start md:timeline-end timeline-box  ">
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
              <div className="timeline-end md:timeline-start text-accent">Jul-2025</div>
              <div className="timeline-start md:timeline-end timeline-box">Programación I en <a href="https://es.wikipedia.org/wiki/C_(lenguaje_de_programaci%C3%B3n)" target="_blank" className="text-blue-500 underline">C</a></div>
              <hr className="bg-accent" />
            </li>
            <li>
              <hr className="bg-accent" />
              <div className="timeline-start text-accent">Dic-2025</div>
              <div className="timeline-end timeline-box  ">
                Fin Desarrollo Mobile
              </div>
              <div className="timeline-middle text-accent ">
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
              <hr className="bg-accent" />
            </li>
            <li>
              <hr className="bg-accent" />
              <div className="timeline-middle">
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
              <div className="timeline-end md:timeline-start text-accent">
                Dic-2025
              </div>
              <div className="timeline-start md:timeline-end timeline-box ">
                Programación II en <a className="text-red-500 underline" target="_blank" href="https://www.djangoproject.com/">Python Django</a>
              </div>
              <hr className="" />
            </li>
            <li>
              <hr className="text-accent" />
              <div className="timeline-start ">
                Jun
              </div>
              <div className="timeline-end timeline-box">
                Programación III en <a className="text-yellow-500 underline" target="_blank" href="https://lenguajejs.com/javascript/">JavasCript</a> 
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
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:timeline-start">
                Dic
              </div>
              <div className="timeline-start md:timeline-end timeline-box">
                Programación IV
              </div>
              <hr className="" />
            </li>

            <li>
              <hr className="" />
              <div className="timeline-start md:timeline-start text-white">Dic🤞</div>
              <div className="timeline-end md:timeline-end timeline-box">
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
