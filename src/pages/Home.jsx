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
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-6">
        <h1 className="text-5xl md:text-6xl font-bold mb-6">¡Bienvenido!</h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto rem
          similique inventore, perspiciatis mollitia ex exercitationem excepturi
          odio corporis voluptates autem aliquid ut ducimus, repellat nesciunt
          laudantium magnam! Fuga, voluptas?
        </p>
        <Link to={"/contact"}>
          <button className="btn px-6 py-3 bg-[#70214d] text-[#ABD2FA] font-semibold rounded-lg hover:bg-[#902a62] transition duration-300">
            Contáctame
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
