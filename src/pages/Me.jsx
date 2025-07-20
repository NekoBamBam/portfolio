import React from "react";
import yo from "../assets/yo.jpg";

function Me() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 p-6 pb-20">
      <div className="max-w-4xl mx-auto">
        {/* Contenedor imagen + texto */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-10">
          {/* Avatar */}
          <div className="w-40 md:w-48 rounded-full overflow-hidden flex-shrink-0">
            <img
              src={yo}
              alt="Coria Franco Nicolas"
              className="w-full h-auto"
            />
          </div>
          {/* Texto */}
          <p className="text-white text-center md:text-left text-base md:text-lg leading-relaxed">
            Hola! Soy{" "}
            <span className="text-red-500 "> Coria Franco Nicolas</span>, Soy
            una persona apasionada por el
            <span className="text-red-500 "> diseño web</span>, siempre buscando
            aprender cosas nuevas y mejorar cada día. Me gusta trabajar en
            equipo, compartir ideas y socializar para crear un ambiente ameno y
            colaborativo. Además, me esfuerzo mucho para cumplir con los
            objetivos y entregar resultados de calidad. Creo que la combinación
            de creatividad, aprendizaje continuo y buena comunicación es clave
            para crecer profesionalmente.
          </p>
        </div>

        <ul className="timeline timeline-vertical ">
          <li>
            <div className="timeline-start timeline-box text-white">
              Bloque de comando Minecraft
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-[#04cc9c] h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-[#04cc9c]" />
          </li>
          <li>
            <hr className="bg-[#04cc9c]" />
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-[#04cc9c] h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box text-white">
              Calculadora CFL😢
            </div>
            <hr className="bg-[#04cc9c]" />
          </li>
          <li>
            <hr className="bg-[#04cc9c]" />
            <div className="timeline-start timeline-box text-white">
              SapuCraft!
            </div>
            <div className="timeline-middle">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="text-[#04cc9c] h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-[#04cc9c]" />
          </li>
          <li>
            <hr className="bg-[#04cc9c]" />
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#04cc9c]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-end timeline-box  ">
              Programador Web CFL 404
            </div>
            <hr className="bg-[#04cc9c]" />
          </li>
          <li>
            <hr className="bg-[#04cc9c]" />
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#04cc9c]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start timeline-box  ">
              Inicio Desarrollo Mobile CFL 404
            </div>
            <hr className="bg-[#04cc9c]" />
          </li>
          <li>
            <hr className="bg-[#04cc9c]" />
            <div className="timeline-end timeline-box ">
              Inicio Tenicatura Universitaria en Progamación UTN
            </div>
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#04cc9c]"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <hr className="bg-[#04cc9c]" />
          </li>
          <li>
            <hr className="bg-[#04cc9c]" />
            <div className="timeline-middle ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5 text-[#04cc9c] "
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <div className="timeline-start timeline-box  ">Programación I</div>
            <hr className="bg-[#04cc9c]" />
          </li>
          <li>
            <hr className="" />
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
          </li>
          <li>
            <hr className="" />
            <div className="timeline-start timeline-box  ">
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
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Me;
