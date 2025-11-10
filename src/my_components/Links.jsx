import React from 'react'
import { DATA } from '../api'

const Links = () => {
  return (
    <div className='my-10'>
  <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mycontainer gap-4">
         {
        DATA.map((item)=>{
            return <div className='rounded-2xl bg-[#272727] p-6 flex flex-col gap-3'>
                <h2 className='font-semibold text-2xl text-white'>{item.title}</h2>
                <p className='font-medium text-base text-white'>{item.category}</p>
                <img src={item.image} alt="" />
                <div className="flex items-center justify-between">
                  <p className='font-medium text-base text-white'><i class="fa-solid fa-user"></i>{item.user}</p>
                  <p className='font-medium text-base text-white'><i class="fa-solid fa-car"></i>{item.scors}</p>
                </div>

                <div className="flex items-center justify-between">
                  <p className='font-medium text-base text-white'><i class="fa-solid fa-address-book"></i>{item.date}</p>
                  <p className='font-medium text-base text-white'><i class="fa-solid fa-fire-flame-simple"></i>{item.valume}</p>
                </div>
            </div>
        })
       }
  </div>
    </div>
  )
}

export default Links