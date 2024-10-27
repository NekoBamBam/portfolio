import React from 'react';
import { Link } from 'react-router-dom';
import fondoerror from "../assets/astrofondo2.jpg"

const NotFound = () => {
  return (
    <div className=' flex justify-center items-center h-full ' style={{
      backgroundImage: `url(${fondoerror})` ,
      backgroundRepeat: `no-repeat`,
    }}>
      <div>
      <Link to="/"  >
      <button className=" text-white bg-[#70214d] rounded-lg hover:bg-black">
        Regresar al inicio
      </button>
      </Link>
      </div>
    </div>
  );
};

export default NotFound;
