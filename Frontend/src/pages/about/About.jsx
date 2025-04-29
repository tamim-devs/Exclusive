import React, { useState } from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import AboutImg from "../../assets/about/about.jpg";
import { FaHouseUser } from "react-icons/fa";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { GiPaperBagOpen } from "react-icons/gi";
import { TbMoneybag } from "react-icons/tb";
import EmployeeAbout from "../../component/aboutComponent/EmployeeAbout";
import OurService from "../../component/homePage/OurService/Index";
import Slider from "react-slick";
import ScrollToTop from "react-scroll-to-top";
const About = () => {
  let aboutArray = [
    {
      id: 1,
      title: "10.5k",
      comment: "Sallers active our site",
      logo: <FaHouseUser />,
    },
    {
      id: 2,
      title: "33k",
      comment: "Mopnthly Produduct Sale",
      logo: <MdOutlineCurrencyExchange />,
    },
    {
      id: 3,
      title: "45.5k",
      comment: "Customer active in our site",
      logo: <GiPaperBagOpen />,
    },
    {
      id: 4,
      title: "25k",
      comment: "Anual gross sale in our site",
      logo: <TbMoneybag />,
    },
  ];
  let pera1 =
    "Launced in 2015, Exclusive is South Asia's premier online shopping makterplace with an active presense in Bangladesh. Supported by wide range of tailored marketing, data and service solutions, Exclusive has 10,500 sallers and 300 brands and serves 3 millioons customers across the region. ";
  let pera2 =
    "Exclusive has more than 1 Million products to offer, growing at a very fast. Exclusive offers a diverse assotment in categories ranging  from consumer.";

  const [currentSlide, setCurrentSlide] = useState(0);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
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
          left: "50%",
          bottom: "-100px",
          transform: "translateX(-50%)",
          // maxWidth: "100%", // Optional: constrain width
          overflow: "hidden", // Hide any overflow
        }}
      >
        <ul
          style={{
            margin: "0px",
            display: "flex",
            gap: "8px", // Add a bit of spacing
            justifyContent: "center",
            flexWrap: "wrap", // Wrap if too many dots
            padding: 0,
            listStyle: "none",
          }}
        >
          {dots}
        </ul>
      </div>
    ),
    customPaging: (i) =>
      i == currentSlide ? (
        <div
          style={{
            width: "13px",
            height: "13px",
            backgroundColor: "#DB4444",
            // border: "3px #DB4444 solid",
            borderRadius: "50%",
            cursor: "pointer",
            display: "block",
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
  return (
    <div className="container">
      <div className="pt-20 pb-10">
        <BreadCrumb />
      </div>
      <ScrollToTop
        smooth
        color="#db4444"
        className="flex items-center justify-center rounded "
      />
      {/* Our Story section start */}
      <section className="our_story_main flex flex-wrap gap-[95px] items-center justify-between">
        <div className="part1_content w-[40%] ">
          <h1 className="text-text2-black text-[54px] font-poppins font-bold leading-[64px] tracking-[3.24px] capitalize mb-10">
            our story
          </h1>
          <div className="flex items-start flex-col gap-6">
            <p className="font-poppins font-normal text-base leading-6">
              {pera1}
            </p>
            <p className="font-poppins font-normal text-base leading-6">
              {pera2}
            </p>
          </div>
        </div>
        <div className="part2_bigImg w-[50%] h-[600px] overflow-hidden rounded relative right-[-42px] ">
          <img
            src={AboutImg}
            alt="not found"
            className="h-full w-full object-cover"
          />
        </div>
      </section>
      {/* Our Story section end */}

      {/* Our achivement section start */}
      <section className="py-[140px]">
        <div className="main flex items-center gap-[34px] flex-wrap justify-between">
          {aboutArray.map((item) => (
            <div
              key={item.id}
              className="py-9 px-9 flex flex-col items-center justify-center rounded shadow-md w-[270px] bg-transparent hover:bg-secondary2-db44 hover:shadow-none ease-linear duration-300 cursor-pointer group"
            >
              <div className="icons flex items-center justify-center bg-text-7d8 w-20 h-20 rounded-full group-hover:bg-[#edc7c7] ease-linear duration-300">
                <div className="bg-text2-black w-16 h-16 rounded-full flex items-center justify-center group-hover:bg-primary-fff ease-linear duration-300">
                  <span className="text-primary-fff text-4xl group-hover:text-text2-black ease-linear duration-300">
                    {item.logo}
                  </span>
                </div>
              </div>
              <div className="Numbers mt-6 mb-3">
                <span className="text-text2-black text-[32px] font-inter font-bold leading-8 tracking-[1.28px] group-hover:text-text-faf ease-linear duration-300">
                  {item.title}
                </span>
              </div>
              <div className="comments">
                <p className="text-text2-black font-poppins text-base font-base leading-6 group-hover:text-text-faf ease-linear duration-300">
                  {item.comment}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Our achivement section end */}

      {/* Our Employee section start */}
      <section className="mb-48">
        <div className="slider-container">
          <Slider {...settings}>
            {[...new Array(6)].map(() => (
              <div className="mx-8">
                <EmployeeAbout />
              </div>
            ))}
          </Slider>
        </div>
      </section>
      {/* Our Employee section end */}

      {/* Our services section start */}
      <section className="">
        <OurService />
      </section>
      {/* Our services section end */}
    </div>
  );
};

export default About;
