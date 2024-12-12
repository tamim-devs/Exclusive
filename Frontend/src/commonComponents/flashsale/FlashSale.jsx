import React from "react";
import Heading from "../Heading";
import Timer from "../Timer";
import ProductCard from "../ProductCard";
import Slider from "react-slick";

const FlashSale = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
    autoplay: true,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };

  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
  }
  
  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  return (
    <div className="mt-[140px] mb-[60px]">
      <div className="container">
        <div className="flex items-end gap-x-[87px]">
          <Heading title={"Today’s"} description={"Flash Sales"} />
          <Timer timeofOffer={1} />
        </div>

        <div className="slider-container">
          <Slider {...settings}>
            {[...new Array(11)].map((_,index) => (
              <div className="pr-5">
                <ProductCard />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default FlashSale;
