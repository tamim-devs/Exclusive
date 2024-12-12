import React, { useState } from 'react'
import {category} from '../../../../Data/Data'
import { FaAngleRight } from 'react-icons/fa'
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import BannerImg from "../../../assets/Frame 560.jpg"


const Banner = () => {
  const [currentSlide, setcurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          bottom: "5%",
          left: "50%",
          transform: "translateX(-50%)",
          borderRadius: "10px",
          padding: "10px",
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          alignContent: 'center'
        }}
        
      >
        <ul style={{ margin: "0px", display: 'flex' }}> {dots} </ul>
      </div>
      
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#DB4444",
            border: "3px solid #ffff",
            marginRight: "12px",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "20px",
            height: "20px",
            borderRadius: "50%",
            background: "#ffff",
            opacity: "0.5",
            marginRight: "12px",
            cursor: "pointer",
            
          }}
        ></div>
      ), afterChange: function (currentSlide) {
        setcurrentSlide(currentSlide);
      },

  };

  return (
    <div>
        <div className='container'>
          <div className='flex justify-center'>
            <div className='w-[23%]  pt-10 border-r-[1.5px] border-r-text_black7D8184'>
              <ul >
                {category?.map((item)=>(
                    <div className='flex items-center hover:bg-gray-200 justify-between transition-all'>
                   <li className='font-popins  text-base text-text_black000000 font-normal py-4 cursor-pointer hover:px-5'>
                    {item.category}
                    </li>
                    {item.subCategory &&
                      <span className='pr-10 text-xl text-text_black000000 '>
                      <FaAngleRight />
                      </span>
                      }
                   </div>
                   ))}
               
              </ul>
            </div>
            <div className='w-[77%] h-[344px] pl-[45px] mt-10 '>
            <div className="slider-container">
            <Slider {...settings}>
              {[...new Array(4)].map((_,index)=>(
                <div key={index}>
                <img src={BannerImg} alt={BannerImg} className='w-full h-full object-cover' />
                </div>
              ))}
       
             </Slider>
    </div>
            </div>
          </div>
        </div>

    </div>
  )
}

export default Banner