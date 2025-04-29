import React, { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";
import Heading from "./Heading";
import Timer from "./Timer";
import ProductCart from "./ProductCart";
// import ProductSkeleton from "../../Skeleton/ProductSkeleton";
import ProductSkeleton from "../../helpers/ProductSkeleton";

const ProductCommonLayouts = ({
  ProductCart = () => <ProductSkeleton />,
  timeStamp = false,
  timeOffer = 0,
  isArrow = false,
  heading = "today's sales",
  description = "flash sales",
  partialItemShow = 5,
  componentData = [],
  isLoading = false,
  isViewBtn = false,
  rows = 1,
  autoPlay = false,
}) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: partialItemShow || 4,
    slidesToScroll: partialItemShow - 1,
    rows: rows,
    autoplay: autoPlay,
  };
  //arrows right and left
  let slideRef = useRef(null);
  let next = () => {
    slideRef.current.slickPrev();
  };
  let prev = () => {
    slideRef.current.slickNext();
  };
  return (
    <div>
      <section className="pb-16">
        <div className="container">
          <div className="main_wrapper">
            {/* head section */}
            <div className="headPart flex items-end justify-between">
              {/* heading */}
              <div className="w-[40%]">
                <Heading title={heading} description={description} />
              </div>
              {/* Timer */}
              <div className="mb-[5px] w-[40%]">
                {timeStamp && <Timer timeOffer={timeOffer} />}
              </div>
              {/* arrow */}
              {isArrow && (
                <div className="flex gap-2 justify-end w-[20%] cursor-pointer">
                  <h1
                    onClick={next}
                    className="bg-secondary-f5f rounded-3xl h-12 w-12 flex items-center justify-center hover:bg-black hover:text-text-faf transition-all ease-linear duration-300"
                  >
                    <span className="text-lg">
                      <FaArrowLeft />
                    </span>
                  </h1>
                  <h1
                    onClick={prev}
                    className=" bg-secondary-f5f rounded-3xl h-12 w-12 flex items-center justify-center hover:bg-black hover:text-text-faf transition-all ease-linear duration-300"
                  >
                    <span className="text-lg">
                      <FaArrowRight />
                    </span>
                  </h1>
                </div>
              )}
              {isViewBtn && (
                <div>
                  <button className="common_btn">view all</button>
                </div>
              )}
            </div>
            {/* slider section */}
            <div className="slider-container mt-10">
              <Slider ref={slideRef} {...settings}>
                {isLoading
                  ? [...new Array(5)]?.map((item, index) => (
                      <div className={partialItemShow > 4 ? "pr-8" : "pr-6"}>
                        <ProductSkeleton />
                      </div>
                    ))
                  : componentData?.map((item, index) => (
                      <div className={partialItemShow > 4 ? "pr-8" : "pr-6 "}>
                        <ProductCart itemData={item ? item : {}} key={item._id} />
                      </div>
                    ))}
              </Slider>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductCommonLayouts;
