import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";

const ProductSkeleton = () => {
  return (
    <div className="w-full animate-pulse my-8 overflow-hidden">
      <div className="w-full h-[230px] mb-5 bg-gray-200 rounded relative overflow-hidden"></div>
      <div className="flex flex-col gap-2">
        <div className="h-6 bg-gray-200 w-3/4 rounded"></div>
        <div className="flex gap-3">
          <div className="h-6 bg-gray-200 w-1/4 rounded"></div>
          <div className="h-6 bg-gray-300 w-1/4 rounded"></div>
        </div>
        <div className="flex gap-1 mt-2">
          {[...new Array(5)].map((_, index) => (
            <div key={index} className="h-5 w-5 bg-gray-200 rounded"></div>
          ))}
        </div>
      </div>
      <div className="absolute bottom-[-40px] left-0 h-9 w-full bg-gray-300 px-3 py-5 rounded-b-md flex items-center justify-center capitalize"></div>
    </div>
  );
};

export default ProductSkeleton;
