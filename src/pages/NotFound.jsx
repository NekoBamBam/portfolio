import React from "react";
import { Link } from "react-router-dom";
import errorImage from "../assets/luffy.jpg"; // Reemplaza con tu imagen

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-gray-900 text-white">
      <img
        src={errorImage}
        alt="404 Not Found"
        className="w-3/4 max-w-md mb-6"
      />
      <h1 className="text-3xl md:text-4xl font-bold mb-4">Página no encontrada</h1>
      <p className="text-gray-400 mb-6 text-center">
        Lo sentimos, no podemos encontrar la página que buscas.
      </p>
      <Link to="/">
        <button className="px-6 py-3 bg-[#04cc9c] text-[#1d3031] font-semibold rounded-lg hover:bg-[#357c59] transition duration-300">
          Volver al Inicio
        </button>
      </Link>
    </div>
  );
};

export default NotFound;
