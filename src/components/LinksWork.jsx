import React from 'react'
import poke from "../assets/poke.png"

export const ClickImg = [
  {
    img: poke,
    href: "https://github.com/NekoBamBam/pokemon",

  }
]

function Works() {
  return (
    <div>
      {ClickImg.map(({ img,href}, index) => {
        return (
          <div className="gap-4">
            <div
              key={index}
              className=" bg-[#f0f0f0] text-[#2f003f] shadow-xl "
            >
              <figure className="ml-6 ">
                <img className="h-1/3 w-1/3 " src={img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title"></h2>
                <span className="flex flex-row"></span>
                <p></p>
                <div className="card-actions justify-start">
                  <a href={href} target="_blank">
                    <button className="btn btn-neutral bg-transparent text-black">
                      Watch👀
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
export default Works