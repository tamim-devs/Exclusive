import React from 'react'
import { FaRegStar, FaStar, FaStarHalfAlt } from "react-icons/fa";
const Star = ({rating = 2.5}) => {
    const stars = Array.from({length:5}, (_,index)=>{
      if(rating >= index + 1){
          return <FaStar key={index} className='text-yellow-300 text-xl  cursor-pointer'/>
        }else if(rating >= index + .5){
          return <FaStarHalfAlt key={index} className='text-yellow-300 text-xl  cursor-pointer'/>
        }else{
          return <FaStar  key={index} className='text-secondary-f5f text-xl hover:text-yellow-400 cursor-pointer'/>
        }
    })
  return (
    <div className='flex gap-1 items-center'>
        {stars}
    </div>
  )
}

export default Star