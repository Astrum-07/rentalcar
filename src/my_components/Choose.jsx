import React from 'react'

const Choose = () => {
  return (
    <div>
        <section>
            <div className="mycontainer">
                <h2 className='font-semibold text-4xl text-center text-white pt-14 mb-3'>Choose the car of your dreams</h2>
                <p className=' font-normal text-base leading-[150%] text-center text-white'>We provide our customers with the most incredible driving emotions. <br />That is why there are only world-class cars in our fleet</p>

                <div className="buttons flex sm:flex-row flex-col  items-center justify-center gap-5 sm:gap-10 mt-8">
                    <button className='sm:w-auto w-full border border-solid border-gray-400  bg-transparent font-medium text-base text-center text-white px-10 py-4 hover:bg-[#299764] transition-[1s] cursor-pointer rounded-[100px]'>Compact</button>
                    <button className=' sm:w-auto w-full border border-solid border-gray-400   bg-transparent font-medium text-base text-center text-white px-10 py-4 hover:bg-[#299764] transition-[1s] cursor-pointer rounded-[100px]'>Sports cars</button>
                    <button className=' sm:w-auto w-full border border-solid border-gray-400  bg-transparent font-medium text-base text-center text-white px-10 py-4 hover:bg-[#299764] transition-[1s] cursor-pointer rounded-[100px]'>Vans </button>
                </div>
            </div>
        </section>
    </div>
  )
}

export default Choose