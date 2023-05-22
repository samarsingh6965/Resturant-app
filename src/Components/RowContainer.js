import React from 'react';
import { MdShoppingBasket } from 'react-icons/md'
import { motion } from 'framer-motion';


const RowContainer = ({ flag, data }) => {

  return (
    <div className={`w-full py-12 flex items-center gap-3 ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex flex-wrap'}`}>
      {data && data.map(item => (
        <div key={item.id} className="w-300 min-w-[300px] md:min-w-[340px] md:w-340 my-12 rounded-lg p-2 backdrop-blur-lg bg-cardOverlay hover:drop-shadow-lg">
          <div className="w-full h-32 flex items-center justify-between">
            <motion.img
              whileHover={{ scale: 1.2 }}
              src={item.imageURL} alt=""
              className='w-40 -mt-8 drop-shadow-2xl' />
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md">
              <MdShoppingBasket className='text-white' />
            </motion.div>

          </div>

          <div className="w-full flex flex-col justify-end items-end">
            <p className="text-textColor text-base md:text-lg font-semibold">{item.title}</p>
            <p className="text-sm mt-1 text-gray-500">{item.calories} Calories</p>
            <div className="flex items-center gap-8">
              <p className='text-lg text-headingColor font-semibold'>
                <span className='text-sm text-red-500'>$</span> {item.price}
              </p>
            </div>
          </div>

        </div>
      ))}

    </div>
  )
}

export default RowContainer
