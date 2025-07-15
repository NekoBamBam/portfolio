import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const skills = [
  { name: "JavaScript", percentage: 85, color: "#f7df1e", link: "https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Introduction" },
  { name: "React", percentage: 80, color: "#61dafb", link: "https://reactjs.org/" },
  { name: "CSS", percentage: 80, color: "#264de4", link: "https://developer.mozilla.org/es/docs/Web/CSS" },
  { name: "Node.js", percentage: 75, color: "#3c873a", link: "https://nodejs.org/en/" },
  { name: "UI/UX Design", percentage: 70, color: "#ff5722", link: "https://www.interaction-design.org/literature/topics/ui-design" },
  { name: "SQL", percentage: 50, color: "#EF3E36", link: "https://datademia.es/blog/que-es-sql" },
  { name: "C", percentage: 70, color: "#2471a3", link: "https://www.w3schools.com/c/c_intro.php" },
  { name: "Python", percentage: 5, color: "#f9e79f", link: "https://www.python.org/" },
  {name: "Trabajo en equipo🫱🏽‍🫲🏾", percentage: 90, color: "#f9e79f"},
];

function SkillsPage() {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Contenido principal */}
      <div className="flex-grow flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-8 text-[#0daab7]">My Skills</h1>
        <p className="text-lg text-gray-400 mb-12 w-4/5 text-center">
          Estas son algunas de mis habilidades técnicas y creativas, con un
          enfoque en desarrollo web y diseño intuitivo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {skills.map((skill, index) => (
            <a
              key={index}
              href={skill.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-md drop-shadow-md shadow-[#049c92]
                transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              <CircularProgressbar
                value={skill.percentage}
                text={`${skill.percentage}%`}
                styles={buildStyles({
                  textSize: "16px",
                  pathColor: skill.color,
                  textColor: "#fff",
                  trailColor: "#444",
                })}
                className="w-24 h-24"
              />
              <h2 className="text-xl font-semibold">{skill.name}</h2>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default SkillsPage;
