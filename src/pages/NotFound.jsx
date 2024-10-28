import React from 'react';
import { Link } from 'react-router-dom';
import fondoerror from "../assets/astrofondo2.jpg"

const NotFound = () => {
  return (
    <div className=' flex justify-center items-center h-full ' style={{
      backgroundImage: `url(${fondoerror})` ,
      backgroundRepeat: `no-repeat`,
    }}>
       <h1 className="text-9xl font-bold text-indigo-600">404</h1>
       <h2 className="text-3xl md:text-5xl font-semibold mt-4">Página no encontrada</h2>
       
      <div>
      <Link to="/"  >
      <button className="absolute bottom-16 left-1/2 px-4 py-4 text-white bg-[#88a19f] rounded-lg hover:bg-black">
        Regresar al inicio
      </button>
      </Link>
      </div>
    </div>
  );
};


export default NotFound;
