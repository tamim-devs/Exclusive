import React from "react";

const SkeletonOne = ({count = 9}) => {
  return (
    <div className="grid grid-cols-1 gap-4 pt-10">
      {[...new Array(count)].map((_, index) => (
        <div className="flex" key={index}>
          <div className="w-64 h-10 bg-gray-300 animate-pulse rounded"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonOne;
