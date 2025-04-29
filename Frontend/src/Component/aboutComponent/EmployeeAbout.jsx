import React from "react";
import professionalImg from "../../assets/about/about_pro.png";
import { FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
const EmployeeAbout = () => {
  return (
    <div className="main w-[350px]">
      <div className="big_img px-7 pt-7 h-[430px] overflow-hidden bg-secondary-f5f">
        <img
          src={professionalImg}
          alt="not found"
          className="h-full w-full object-contain"
        />
      </div>
      <div className="text_content flex flex-col gap-4 items-start mt-8">
        <h2 className="font-inter font-medium text-3xl text-text2-black leading-8 tracking-[1.28px] capitalize">
          tom cruise
        </h2>
        <h4 className="font-poppins font-normal text-base text-text2-black leading-6 capitalize">
          founder & chairman
        </h4>
        <div className="icons flex gap-4">
          <span className="text-text2-black text-2xl font-bold cursor-pointer">
            <FiTwitter />
          </span>
          <span className="text-text2-black text-2xl font-bold cursor-pointer">
            <FaInstagram />
          </span>
          <span className="text-text2-black text-2xl font-bold cursor-pointer">
            <FaLinkedinIn />
          </span>
        </div>
      </div>
    </div>
  );
};

export default EmployeeAbout;
