import React from "react";
import yo from "../assets/yo.jpg";

function Me() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-gray-900 to-gray-800 p-6">
      <div className="max-w-4xl mx-auto">
        {/* Contenedor imagen + texto: en mobile vertical, en md horizontal */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-10 mb-10">
          {/* Avatar */}
          <div className="w-40 md:w-48 rounded-full overflow-hidden flex-shrink-0">
            <img src={yo} alt="Coria Franco Nicolas" className="w-full h-auto" />
          </div>
          {/* Texto */}
          <p className="text-white text-center md:text-left text-base md:text-lg leading-relaxed">
            Hola! Soy Coria Franco Nicolas, me gusta el diseño Web, soy creativo, me gusta aprender y emprender,
            no suelo llevarme mal con la gente y por último aguante a c r u y aguante gimnasia 🐺.
          </p>
        </div>

        {/* Timeline */}
        <ul className="border-l-4 border-[#04cc9c] pl-6 space-y-8">
          {[
            "Bloque de comando Minecraft",
            "Calculadora CFL",
            "SapuCraft!",
            "Programador Web CFL404",
            "Desarrollo Mobile CFL404",
            "Tenicatura Universitaria en Progamación UTN",
          ].map((item, i) => (
            <li key={i} className="relative">
              <span className="absolute -left-7 top-0 flex items-center justify-center w-6 h-6 rounded-full bg-[#04cc9c] text-gray-900">
                {/* Ícono check */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={3}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </span>
              <p className="text-white font-medium">{item}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Me;
