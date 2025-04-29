import React from "react";

const ProductsDetailsSkeleton = () => {
  return (
    <>
      <span className="inline-block w-[20%] h-6 bg-gray-300 rounded mb-20"></span>
      <div className="animate-pulse flex items-center justify-between gap-10">
        {/* Left Side - Image Section */}
        <div className="flex space-x-6 w-[62%]">
          {/* Small Images */}
          <div className="flex flex-col space-y-4 w-[25%]">
            <div className="w-32 h-28 bg-gray-300 rounded"></div>
            <div className="w-32 h-28 bg-gray-300 rounded"></div>
            <div className="w-32 h-28 bg-gray-300 rounded"></div>
            <div className="w-32 h-28 bg-gray-300 rounded"></div>
          </div>
          {/* Main Image */}
          <div className="w-[74%] h-[500px] bg-gray-300 rounded"></div>
        </div>

        {/* Right Side - Product Details */}
        <div className="space-y-4  w-[32%]">
          {/* Product Title */}
          <div className="w-3/4 h-6 bg-gray-300 rounded"></div>

          {/* Rating */}
          <div className="flex space-x-2">
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            <div className="w-5 h-5 bg-gray-300 rounded"></div>
            <div className="w-12 h-5 bg-gray-300 rounded"></div>
          </div>

          {/* Price */}
          <div className="w-1/3 h-8 bg-gray-300 rounded"></div>

          {/* Description */}
          <div className="w-full h-12 bg-gray-300 rounded"></div>

          {/* Colors */}
          <div className="flex space-x-4">
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
            <div className="w-6 h-6 bg-gray-300 rounded-full"></div>
          </div>

          {/* Sizes */}
          <div className="flex space-x-4">
            <div className="w-10 h-10 bg-gray-300 rounded"></div>
            <div className="w-10 h-10 bg-gray-300 rounded"></div>
            <div className="w-10 h-10 bg-gray-300 rounded"></div>
            <div className="w-10 h-10 bg-gray-300 rounded"></div>
          </div>

          {/* Quantity & Button */}
          <div className="flex items-center space-x-4">
            <div className="w-20 h-10 bg-gray-300 rounded"></div>
            <div className="w-32 h-12 bg-gray-300 rounded"></div>
          </div>

          {/* Delivery Options */}
          <div className="space-y-4">
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
            </div>
            <div className="flex space-x-4">
              <div className="w-10 h-10 bg-gray-300 rounded"></div>
              <div className="w-3/4 h-6 bg-gray-300 rounded"></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsDetailsSkeleton;
