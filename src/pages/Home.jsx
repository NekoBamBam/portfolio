import React from 'react'
import fondo from "../assets/astronautafondo.mp4"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div
      className="hero h-full w-full"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={fondo} type="video/mp4" />
        Tu navegador no soporta videos de fondo.
      </video>
      <div className="hero-overlay bg-opacity-50"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Bienvenido!</h1>
          <p className="mb-5">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iusto rem similique inventore, perspiciatis mollitia ex exercitationem excepturi odio corporis voluptates autem aliquid ut ducimus, repellat nesciunt laudantium magnam! Fuga, voluptas?
          </p>
          <Link to={"/contact"}>
            <button className="btn bg-[#70214d] text-[#ABD2FA]">Contact😳</button>
          </Link>
        </div>
      </div>

    </div>



  )

}

export default Home