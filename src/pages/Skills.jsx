import React, { useEffect, useState } from "react";
import js from "../assets/js1.webp";
import react from "../assets/react1.webp";
import css from "../assets/css.webp";
import nodejs from "../assets/nodejs.webp";
import uiux from "../assets/uxui.webp";
import sql from "../assets/sql.webp";
import c from "../assets/c.webp";
import python from "../assets/python.webp";
import fondo1 from "../assets/fondo1.png";
import git from "../assets/git.png"
import supa from "../assets/supa.webp"
import fire from "../assets/fire.png"
import vercel from "../assets/vercel.png"
import render from "../assets/render.png"
import django from "../assets/django.png"

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
    name: "React Native",
    logo: react,
    link: "https://reactnative.dev/",
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
    name: "Django",
    logo: django,
    link: "https://www.djangoproject.com/",
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
];
const tools = [
  {
    name: "Git",
    logo: git,
    link: "https://git-scm.com/",
  },
  {
    name: "Supabase",
    logo: supa,
    link: "https://supabase.com/",
  },
  {
    name: "FireBase",
    logo: fire,
    link: "https://firebase.google.com/?hl=es-419",
  },
  {
    name: "Vercel",
    logo: vercel,
    link: "https://vercel.com/",
  },
  {
    name: "Render",
    logo: render,
    link: "https://render.com/",
  },
  {
    name: "UI/UX Design",
    logo: uiux,
    link: "https://www.interaction-design.org/literature/topics/ui-design",
  },

]
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
          {skills.map((skill, index) => {
            const cardClass = `group flex flex-col items-center gap-4 ${isMobile
              ? "bg-gray-800"
              : "bg-gray-800/50 drop-shadow-md shadow-[#049c92] backdrop-blur-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#04cc9c]"
              } p-6 rounded-lg border border-transparent shadow-md`;

            return (
              <a
                key={index}
                href={skill.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <img
                  src={skill.logo}
                  alt={skill.name}
                  loading="lazy"
                  className={`w-16 h-16 object-contain ${isMobile
                    ? ""
                    : "group-hover:rotate-6 transition duration-300"
                    }`}
                />
                <h2 className="text-xl font-semibold">{skill.name}</h2>
              </a>
            );
          })}

        </div>
        {/* HABILIDADES EXTRA */}
        <h1 className="text-4xl font-bold mb-8 text-info text-center">
         Herramientas & Ecosistema
        </h1>

        <p className="text-lg text-white mb-12 w-full sm:w-4/5 text-center">
          Estas son algunas de mis habilidades extra como paginas de despliege, base de datos y demás
        </p>


        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          {tools.map((tools, index) => {
            const cardClass = `group flex flex-col items-center gap-4 ${isMobile
              ? "bg-gray-800"
              : "bg-gray-800/50 drop-shadow-md shadow-[#059d93] backdrop-blur-md transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl hover:ring-2 hover:ring-[#04cc9c]"
              } p-6 rounded-lg border border-transparent shadow-md`;

            return (
              <a
                key={index}
                href={tools.link}
                target="_blank"
                rel="noopener noreferrer"
                className={cardClass}
              >
                <img
                  src={tools.logo}
                  alt={tools.name}
                  loading="lazy"
                  className={`w-16 h-16 object-contain ${isMobile
                    ? ""
                    : "group-hover:rotate-6 transition duration-300"
                    }`}
                />
                <h2 className="text-xl font-semibold">{tools.name}</h2>
              </a>
            );
          })}

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
