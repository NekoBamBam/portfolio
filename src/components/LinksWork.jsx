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
              className=" flex card card-side bg-[#f0f0f0] text-[#2f003f] shadow-xl border "
            >
              <figure className="ml-6">
                <img className="h-40 w-40 " src={img} alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data} </h2>
                <span className="flex flex-row">{icon}</span>
                <p>{datas} </p>
                <div className="card-actions justify-end">
                  <a href={href} target="_blank">
                    <button className="btn btn-neutral text-white">
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
export default LinksWork