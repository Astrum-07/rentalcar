import React from 'react'

const Hero = () => {
  return (
    <div>
        <section>
            <div className="mycontainer">
                <div className="parent w-full sm:h-[500px] h-[300px] rounded-3xl bg-[url('src/assets/img/herobg.png')] bg-cover bg-center mt-36 my-10 ">
                    <h1 className='font-semibold text-4xl text-center text-white pt-14 mb-3'>Compact cars</h1>
                    <p className=' font-normal text-base text-center text-white'>Rent cars as you are comfortable and where you are <br /> comfortable.</p>

                    <form className='sm:w-[50%] w-full shadow-[0_4px_10px_0_rgba(0,0,0,0.15)] bg-white  rounded-[100px] flex items-center justify-between pl-4 p-1 mx-auto sm:mt-[310px] mt-20 '>
                        <input className='w-full outline-none' type="search" placeholder='Find the car of your dreams' />
                        <button className='bg-[#299764] rounded-[100px] text-white py-3.5 px-4'><i class="fa-solid fa-magnifying-glass"></i></button>
                    </form>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Hero