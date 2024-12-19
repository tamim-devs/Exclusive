import React from "react";
import Skeleton from "../helpers/Skeleton.jsx";
import { IoMdArrowBack } from "react-icons/io";
import { IoArrowForward } from "react-icons/io5";
import { useRef } from "react";
import Timer from './Timer';
import Slider from "react-slick";
import Heading from './Heading';


const ProductCommonLayout = ({
  ProductCard = () => {
    <Skeleton />;
  },
  heading = "Todays",
  description = "Flash Sale",
  timeStamp = false,
  timeofOffer = 0,
  isArrowsTrue = false,
  partialItemShow = 4,
  componentData = [],
  isLoading = false,
  // viewButton = false,
  // rows = 1,
}) => {
  const sliderRef = useRef(null);
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow ,
    slidesToScroll: 3,
    autoplay: true,
  };
  const next = () => {
    sliderRef.current.slickPrev();
  };
  const prev = () => {
    sliderRef.current.slickNext();
  };

  return (
    <>
      <div className="mt-[140px] mb-[60px]">
        <div className="container">
          <div className="flex justify-between items-center">
          <div className="flex items-end  gap-x-[87px]">
            <Heading title={heading} description={description} />
            {timeStamp && <Timer timeofOffer={timeofOffer} />}
          </div>
          <div>
          {isArrowsTrue && (
            <div className="flex items-center gap-x-4">
              <h1
                onClick={next}
                className="cursor-pointer w-[46px] h-[46px] bg-white_5F5 rounded-full flex items-center justify-center hover:bg-black738 hover:text-white_FFFFFF transition"
              >
                <span className="text-xl">
                  <IoMdArrowBack />
                </span>
              </h1>
              <h1
                onClick={prev}
                className="cursor-pointer w-[46px] h-[46px] bg-white_5F5 rounded-full flex items-center justify-center hover:bg-black738 hover:text-white_FFFFFF transition"
              >
                <span className="text-xl">
                  <IoArrowForward />
                </span>
              </h1>
            </div>
          )}
          </div>
          </div>
          <div>
            <div className="slider-container">
              <Slider ref={sliderRef} {...settings}>
              {[...new Array(partialItemShow || 4)].map((_,index)=>(
                <div className={partialItemShow > 4 ? "mr-10" :"pr-6"}>
                  <ProductCard/>
                </div>
              ))}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductCommonLayout;
