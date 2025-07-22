import React from "react";
import yo from "../assets/yo.jpg";

function AboutMe() {
  return (
    <div className="min-h-screen bg-[#1d3031] py-10 px-4 sm:px-10 flex flex-col items-center">
      <h2 className="text-4xl font-bold text-[#04cc9c] mb-8 text-center">
        Sobre Mí
      </h2>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-10 max-w-7xl w-full">
        {/* Imagen */}
        <div className="w-40 md:w-1/4 rounded-full overflow-hidden shadow-lg border-2 border-[#04cc9c] flex-shrink-0">
          <img src={yo} alt="Coria Franco Nicolas" className="w-full h-auto" />
        </div>

        {/* Texto */}
        <div className="text-white text-center md:text-left text-base md:text-lg leading-relaxed md:w-1/2">
          <p>
            Hola! Soy{" "}
            <span className="text-[#04cc9c] font-semibold">
              Coria Franco Nicolás
            </span>
            , una persona apasionada por el{" "}
            <span className="text-[#04cc9c] font-semibold">diseño web</span>,
            siempre buscando aprender cosas nuevas y mejorar cada día. Me gusta
            trabajar en equipo, compartir ideas y socializar para crear un
            ambiente ameno y colaborativo.
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
        <div className="md:w-1/4 w-full">
          <ul className="timeline timeline-vertical">
            <li>
              <div className="timeline-start text-white">2021</div>
              <div className="timeline-middle bg-[#04cc9c]"></div>
              <div className="timeline-end text-white">
                Empecé mi formación en desarrollo web.
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-start text-white">2022</div>
              <div className="timeline-middle bg-[#04cc9c]"></div>
              <div className="timeline-end text-white">
                Proyectos personales y primeros trabajos freelance.
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-start text-white">2023</div>
              <div className="timeline-middle bg-[#04cc9c]"></div>
              <div className="timeline-end text-white">
                Me enfoqué en React, Tailwind y diseño UI/UX.
              </div>
              <hr />
            </li>
            <li>
              <div className="timeline-start text-white">2024</div>
              <div className="timeline-middle bg-[#04cc9c]"></div>
              <div className="timeline-end text-white">
                Desarrollando proyectos más grandes y en equipo.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
