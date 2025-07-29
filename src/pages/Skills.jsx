import React, { useEffect, useState } from "react";
import js from "../assets/js1.webp";
import react from "../assets/react1.png";
import css from "../assets/css.png";
import nodejs from "../assets/nodejs.png";
import uiux from "../assets/uxui.png";
import sql from "../assets/sql.png";
import c from "../assets/c.png";
import python from "../assets/python.png";
import c1 from "../assets/c1.png";
import fondo1 from "../assets/fondo1.png";

const skills = [
  {
    name: "JavaScript",
    logo: js,
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction",
  },
  {
    name: "React",
    logo: react,
    link: "https://reactjs.org/",
  },
  {
    name: "CSS",
    logo: css,
    link: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    name: "Node.js",
    logo: nodejs,
    link: "https://nodejs.org/en/",
  },
  {
    name: "UI/UX Design",
    logo: uiux,
    link: "https://www.interaction-design.org/literature/topics/ui-design",
  },
  {
    name: "SQL",
    logo: sql,
    link: "https://datademia.es/blog/que-es-sql",
  },
  {
    name: "C",
    logo: c,
    link: "https://www.w3schools.com/c/c_intro.php",
  },
  {
    name: "Python",
    logo: python,
    link: "https://www.python.org/",
  },
  {
    name: "C++",
    logo: c1,
    link: "https://www.w3schools.com/cpp/default.asp",
  },
];

const softSkills = [
  { name: "Comunicación efectiva", icon: "🗣️" },
  { name: "Trabajo en equipo", icon: "🤝" },
  { name: "Resolución de problemas", icon: "🧠" },
  { name: "Adaptabilidad al cambio", icon: "🔄" },
  { name: "Gestión del tiempo", icon: "⏳" },
  { name: "Aprendizaje autónomo", icon: "📚" },
  { name: "Pensamiento crítico", icon: "💡" },
  { name: "Atención al detalle", icon: "🔍" },
  { name: "Recepción de feedback", icon: "🧭" },
];

// Hook para detectar si es mobile (ancho menor a 640px)
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    function checkMobile() {
      setIsMobile(window.innerWidth < 640);
    }
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return isMobile;
}

function SkillsPage() {
  const isMobile = useIsMobile();

  return (
    <div
      className="text-white flex flex-col bg-dark w-full"
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="w-full flex flex-col items-center py-10 px-4">
        <h1 className="text-4xl font-bold mb-8 text-info text-center">
          Habilidades y Conocimientos
        </h1>

        <p className="text-lg text-white mb-12 w-full sm:w-4/5 text-center">
          Estas son algunas de mis habilidades técnicas y creativas, con un
          enfoque en desarrollo web y diseño intuitivo.
        </p>

        {/* HABILIDADES TÉCNICAS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className={`group flex flex-col items-center gap-4 bg-gray-800/50 p-6 rounded-lg border border-transparent
                shadow-md drop-shadow-md shadow-[#049c92] backdrop-blur-md
                transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#04cc9c]`}
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className={`w-16 h-16 object-contain ${
                  isMobile ? "" : "group-hover:rotate-6 transition duration-300"
                }`}
              />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </a>
          ))}
        </div>

        {/* HABILIDADES BLANDAS */}
        <h2 className="text-3xl font-bold mb-6 text-info">
          Habilidades Blandas
        </h2>
        <p className="text-lg text-white mb-10 w-4/5 text-center">
          También desarrollo habilidades interpersonales que potencian mi forma
          de trabajar y colaborar en equipo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-4/5">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="group bg-gray-800 p-4 rounded-lg shadow-sm drop-shadow-md shadow-[#049c92] text-center font-medium text-sm sm:text-base hover:border-[#04cc9c] border border-transparent
              transition transform duration-300 flex items-center justify-center gap-2"
            >
              <span className={isMobile ? "" : "group-hover:animate-bounce"}>
                {skill.icon}
              </span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
