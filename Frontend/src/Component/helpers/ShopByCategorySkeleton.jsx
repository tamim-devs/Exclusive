import React from "react";

const ShopByCategorySkeleton = ({ count = 9 }) => {
  return (
    <div className="grid grid-cols-3 gap-4 pt-10">
      {[...new Array(count)].map((_, index) => (
        <div className="flex" key={index}>
          <div className="w-full h-40 bg-gray-500 animate-pulse rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default ShopByCategorySkeleton;
