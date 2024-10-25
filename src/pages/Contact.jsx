import React from 'react'
import { carta } from '../utils/utils'

function Contact() {
  return (
    <div >
      {carta.map(({ img, href, data,datas }, index) => {
        return (
          <div className='gap-4'>
            <div key={index} className=" flex card card-side bg-white text-black shadow-xl border ">
              <figure className='ml-6'>
                <img className='h-40 w-40 '
                  src={img}
                  alt="" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{data} </h2>
                <p>{datas} </p>
                <div className="card-actions justify-end">
                  <a href={href} target='_blank' >

                    <button className="btn btn-neutral text-white">Watch👀</button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      })}

    </div>
  )
}

export default Contact