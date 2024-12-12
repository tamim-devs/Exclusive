import React from "react";
import { CiHeart } from "react-icons/ci";
import { FaEye, FaRegStar } from "react-icons/fa";
import image from "../assets/g92-2-500x500 1.png";

const ProductCard = () => {
  return (
    <div className="mt-10">
      <div className="w-full ">
        <div className="bg-[#F5F5F5]  px-3 pt-4 pb-20 rounded relative cursor-pointer group">
          <div className="flex items-center justify-between">
            <span className="px-2 py-2 rounded-md bg-redDB4444 inline-block font-popins text-sm text-white_FFFFFF font-normal">
              -40%
            </span>   
            <span
              className="w-9 h-9 leading-9 flex items-center
              justify-center text-center rounded-full bg-white_FFFFFF text-xl font-semibold "
            >
              <FaEye />
            </span>
          </div>
          <div className="flex  justify-between">
            <div className="w-full h-[152px] flex-1">
              <img
                src={image}
                alt={image}
                className="h-full w-full object-contain text-center"
              />
            </div>
            <span
              className=" mt-2 w-9 h-9 leading-9 flex items-center
              justify-center  text-center rounded-full bg-white_FFFFFF text-xl font-semibold cursor-pointer hover:bg-redDB4444 hover:text-white_FFFFFF "
            >
              <CiHeart className="text-black" />
            </span>
          </div>
          <div className="overlay opacity-0 absolute left-0 bottom-0  text-lg font-medium items-center w-full h-12 flex justify-center bg-black  duration-500 group-hover:opacity-100 hover:opacity-75 cursor-pointer">
            <h3 className="text-white">Add to Cart</h3>
          </div>
        </div>
        <div className="flex flex-col items-start gap-y-2 mt-4">
          <div>
            <h2 className='"text-lg font-popins font-medium cursor-pointer w-full '>
              HAVIT HV-G92 Gamepad
            </h2>
          </div>
          <div className="flex gap-x-3  items-center cursor-pointer">
            <span className="text-redDB4444 font-medium text-lg font-popins inline-block">
              {""}
              $120
            </span>
            <span className="text-text_black000000 opacity-50 font-medium text-lg font-popins inline-block line-through ">
              {""}
              $160
            </span>
          </div>

          <div className="flex items-center gap-x-2">
            {[...new Array(5)].map((_, index) => (
              <span className="text-yellow-500">
                <FaRegStar />
              </span>
            ))}
            <h2>{`(${[...new Array(5)]?.length})`}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
