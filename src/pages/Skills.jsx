import React from "react";
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
    color: "#f7df1e",
    link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction",
  },
  {
    name: "React",
    logo: react,
    color: "#61dafb",
    link: "https://reactjs.org/",
  },
  {
    name: "CSS",
    logo: css,
    color: "#264de4",
    link: "https://developer.mozilla.org/es/docs/Web/CSS",
  },
  {
    name: "Node.js",
    logo: nodejs,
    color: "#3c873a",
    link: "https://nodejs.org/en/",
  },
  {
    name: "UI/UX Design",
    logo: uiux,
    color: "#ff5722",
    link: "https://www.interaction-design.org/literature/topics/ui-design",
  },
  {
    name: "SQL",
    logo: sql,
    color: "#EF3E36",
    link: "https://datademia.es/blog/que-es-sql",
  },
  {
    name: "C",
    logo: c,
    color: "#2471a3",
    link: "https://www.w3schools.com/c/c_intro.php",
  },
  {
    name: "Python",
    logo: python,
    color: "#f9e79f",
    link: "https://www.python.org/",
  },
  {
    name: "C++",
    logo: c1,
    color: "#f9e79f",
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

function SkillsPage() {
  return (
    <div
      className="text-white flex flex-col"
      style={{
        backgroundImage: `url(${fondo1})`,
        backgroundRepeat: "repeat",
        backgroundSize: "auto",
      }}
    >
      <div className="flex-grow flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-8 text-[#0daab7]">My Skills</h1>

        <p className="text-lg text-gray-400 mb-12 w-4/5 text-center">
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
              className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-md drop-shadow-md shadow-[#049c92]
              transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <img
                src={skill.logo}
                alt={skill.name}
                className="w-16 h-16 object-contain"
              />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </a>
          ))}
        </div>

        {/* HABILIDADES BLANDAS */}
        <h2 className="text-3xl font-bold mb-6 text-[#0daab7]">
          Habilidades Blandas
        </h2>
        <p className="text-lg text-gray-400 mb-10 w-4/5 text-center">
          También desarrollo habilidades interpersonales que potencian mi forma
          de trabajar y colaborar en equipo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 w-4/5">
          {softSkills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-lg shadow-md text-center font-medium text-sm sm:text-base hover:scale-105 transition transform duration-300 flex items-center justify-center gap-2"
            >
              <span className="text-xl">{skill.icon}</span>
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
