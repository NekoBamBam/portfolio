import React from 'react'
import fondo from "../assets/zoro1.gif"
import { Link } from 'react-router-dom'


function Home() {
  return (
    <div
      className="hero h-full w-full bg-[#474755] "
    >
      <img src={fondo} alt="" />
      <div className="hero-overlay bg-opacity-15"></div>
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