// import React from 'react'
import React, { useState } from "react";
import { homeCategory } from "../../../data/data";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import heroImg from "../../../assets/hero_img.jpg";
import "slick-carousel/slick/slick.css";
import Slider from "react-slick";
import {
  useGetAllBannerQuery,
  useGetCategoryListQuery,
} from "../../../features/Api/exclusiveApi";
import HeroSectionSkeleton from "./HeroSectionSkeleton";
const HeroSection = () => {
  const { data, isLoading, isError } = useGetAllBannerQuery();
  const [dropdown, setDropdown] = useState(null);
  // console.log(data?.data)
  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    autoplay: true,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "10px",
          position: "absolute",
          left: "38%",
          bottom: "12px",
          // transform: "translateX(-50%)"
        }}
      >
        <ul style={{ margin: "0px", display: "flex", gap: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "13px",
            height: "13px",
            backgroundColor: "#DB4444",
            border: "3px #FFFFFF solid",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>
      ) : (
        <div
          style={{
            width: "13px",
            height: "13px",
            backgroundColor: "#7D8184",
            borderRadius: "50%",
            cursor: "pointer",
          }}
        ></div>
      ),
    afterChange: function (currentSlide) {
      setCurrentSlide(currentSlide);
    },
  };
  const category = useGetCategoryListQuery();
  let handleDropDown = (id) => {
    //prev = null (useState(null))
    setDropdown((prev) => {
      return prev == id ? null : id;
    });
  };
  return (
    <section>
      <div className="container">
        <div className="Main_wrapper flex mb-36">
          {isLoading ? (
            <HeroSectionSkeleton />
          ) : (
            <>
              {/* hero section side category */}
              <div className="w-[21%] border-r-2 border-r-text-7d8 pt-10 flex flex-col gap-4 ">
                {category?.data?.data?.map((item) => (
                  <>
                    <div
                      className="transition-all ease-linear duration-200 flex flex-col gap-2 justify-between  mr-4 cursor-pointer"
                      key={item._id}
                      onClick={() => handleDropDown(item._id)}
                    >
                      <ul className="text-lg capitalize font-normal font-poppins leading-6 text-text2-black pl-0 group-hover:text-primary-fff group-hover:pl-2 transition-all ease-linear duration-200 flex items-center justify-between bg-primary-fff hover:bg-blue-400 w-full py-3">
                        <li key={item._id}>{item.name}</li>
                        {item.subCategory?.length > 0 &&
                          (dropdown === item._id ? (
                            <FaChevronDown />
                          ) : (
                            <span className="group-hover:text-text-faf transition-all ease-linear duration-200 ">
                              <FaChevronRight />
                            </span>
                          ))}
                      </ul>
                      {/* //  if sub category exist then use arrow */}
                      <div
                        className={`${
                          dropdown === item._id ? "block" : "hidden"
                        }`}
                      >
                        {item?.subCategory &&
                          item?.subCategory?.map((subItem) => (
                            <ul className="mb-4" key={subItem._id}>
                              <li className="bg-slate-500 text-primary-fff py-2 px-2">
                                {subItem.name}
                              </li>
                            </ul>
                          ))}
                      </div>
                    </div>
                  </>
                ))}
              </div>

              {/* hero section Slider image*/}
              <div className="w-[79%]  ml-11 mt-10 h-full overflow-hidden cursor-grab">
                <div className="slider-container h-full w-full ">
                  <Slider {...settings}>
                    {/* an emty array for map */}
                    {data?.data.map((banners) => (
                      <div
                        key={banners._id}
                        className="h-[420px] w-full object-cover"
                      >
                        <img
                          src={banners.image}
                          alt="not found"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </Slider>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
