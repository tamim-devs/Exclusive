import React from "react";
import SkeletonOne from "./SkeletonOne";



const Content = () => {
  return (
    <div className="w-[900px] h-[400px] bg-gray-300 animate-pulse rounded-md mt-10"></div>
  );
};

const HeroSectionSkeleton = () => {
  return (
    <div className="flex gap-20">
      <SkeletonOne/>
      <Content />
    </div>
  );
};

export default HeroSectionSkeleton;