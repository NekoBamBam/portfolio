import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import Footer from "../components/Footer";

const skills = [
  { name: "JavaScript", percentage: 85, color: "#f7df1e" },
  { name: "React", percentage: 80, color: "#61dafb" },
  { name: "CSS", percentage: 90, color: "#264de4" },
  { name: "Node.js", percentage: 75, color: "#3c873a" },
  { name: "UI/UX Design", percentage: 70, color: "#ff5722" },
  { name: "SQL", percentage: 50, color: "#EF3E36" },
];

function SkillsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col">
      {/* Contenido principal */}
      <div className="flex-grow flex flex-col items-center py-10">
        <h1 className="text-4xl font-bold mb-8 text-[#0daab7]">My Skills</h1>
        <p className="text-lg text-gray-400 mb-12 w-4/5 text-center">
          Estas son algunas de mis habilidades técnicas y creativas, con un
          enfoque en desarrollo web y diseño intuitivo.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 px-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-4 bg-gray-800 p-6 rounded-lg shadow-lg 
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
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default SkillsPage;
