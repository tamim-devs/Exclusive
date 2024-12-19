import React from "react";
import { FaEye, FaRegStar } from "react-icons/fa"; // You can also use skeleton versions of these icons
import { CiHeart } from "react-icons/ci";

const Skeleton = () => {
  return (
    <div className="mt-10">
      <div className="w-full">
        {/* Skeleton Card */}
        <div className="bg-[#F5F5F5] px-3 pt-4 pb-20 rounded relative cursor-pointer group animate-pulse">
          <div className="flex items-center justify-between">
            {/* Skeleton for the discount tag */}
            <span className="w-16 h-6 bg-gray-300 rounded-md"></span>

            {/* Skeleton for the eye icon */}
            <span className="w-9 h-9 bg-gray-300 rounded-full"></span>
          </div>

          <div className="flex justify-between">
            <div className="w-full h-[152px] flex-1">
              {/* Skeleton for the image */}
              <div className="w-full h-full bg-gray-300"></div>
            </div>
            {/* Skeleton for the heart icon */}
            <span className="mt-2 w-9 h-9 bg-gray-300 rounded-full"></span>
          </div>

          {/* Skeleton for the "Add to Cart" button */}
          <div className="overlay opacity-0 absolute left-0 bottom-0 text-lg font-medium items-center w-full h-12 flex justify-center bg-black duration-500 group-hover:opacity-100 hover:opacity-75 cursor-pointer">
            <div className="w-24 h-6 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        {/* Skeleton for the Product Details */}
        <div className="flex flex-col items-start gap-y-2 mt-4">
          <div>
            {/* Skeleton for the product name */}
            <div className="w-36 h-6 bg-gray-300 rounded-md"></div>
          </div>
          <div className="flex gap-x-3 items-center cursor-pointer">
            {/* Skeleton for the price */}
            <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
            {/* Skeleton for the crossed-out original price */}
            <div className="w-16 h-6 bg-gray-300 rounded-md"></div>
          </div>

          {/* Skeleton for the rating stars */}
          <div className="flex items-center gap-x-2">
            {[...new Array(5)].map((_, index) => (
              <span className="text-yellow-500">
                {/* Skeleton for the star icon */}
                <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
              </span>
            ))}
            {/* Skeleton for the number of reviews */}
            <div className="w-12 h-4 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
