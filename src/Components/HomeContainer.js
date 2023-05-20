import React from 'react'
import Delivery from '../Assets/delivery.png'
import HeroBg from '../Assets/heroBg.png'
import {heroData} from './Data'






const HomeContainer = () => {
  return (
    <section id='home' className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex flex-col items-start justify-center flex-1 gap-6'>
        <div className='flex items-center justify-center gap-8 px-4 py-1 drop-shadow-xl bg-orange-200 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
          <div className="w-8 h-8 bg-white rounded-full overflow-hidden">
            <img src={Delivery} alt="delivery" className='w-full h-full object-contain' />
          </div>
        </div>

        <p className='text-[2.5rem] lg:text-[4.5rem] font-bold  tracking-wide text-headingColor'>Fastest Delivery In <span className='text-orange-600 text-[3rem] lg:text-[5rem]'>Your City</span></p>

        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas eveniet id iusto neque quos cum tenetur optio dolorum ad, doloribus nostrum? Quod explicabo recusandae nostrum maxime voluptas porro quos autem!</p>

        <button type='button' className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all duration-100 ease-in-out'>Order Now</button>
      </div>


      <div className='py-2 flex-1 flex items-center justify-center relative'>
        <img src={HeroBg} className='w-full h-420 lg:w-auto lg:h-650 ml-auto' alt="" />
        <div className="w-full h-full gap-4 flex-wrap flex items-center absolute top-0 left-0 justify-center py-4">
          {
            heroData && heroData.map(n => (
              <div key={n.id} className="lg:w-190 drop-shadow-lg p-4 flex flex-col items-center justify-center bg-cardOverlay backdrop-blur-md rounded-3xl">
                <img src={n.imgSrc} className='w-20 lg:w-40 -mt-10 lg:-mt-20' alt="I1" />
                <p className="text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4">{n.name}</p>

                <p className="text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3">{n.decp}</p>

                <p className="text-sm font-semibold text-headingColor">
                  <span className='text-xs text-red-600'>$</span> {n.price}
                </p>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
