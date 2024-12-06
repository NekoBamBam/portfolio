import React from "react";
import fondo from "../assets/zoro.jpeg";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${fondo})`,
        }}
      ></div>
      {/* Superposición de color */}
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      {/* Contenido */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-slate-300 px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">¡Bienvenido!</h1>
        <p className="text-base md:text-xl text-gray-300 mb-8">
          Bienvenido/s a mi humilde portfolio, en esta pequeña y sencilla page se puede observar un poco de mi, como persona y como diseñador Web, espero te guste😎.
        </p>
        <Link to="/me">
          <button className="btn px-6 py-3 bg-[#04cc9c] text-[#1d3031] font-semibold rounded-lg hover:bg-[#357c59] transition duration-300">
            Contáctame vía Email
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
