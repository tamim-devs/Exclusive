import React from "react";
import { CiMobile4 } from "react-icons/ci";

const CategoryCart = ({itemData}) => {
  return (
    <div className="main w-full">
      <div className="py-6 px-14 bg-text-faf rounded border-[1px] border-text-7d8 hover:bg-secondary2-db44 hover:border-bg-secondary2-db44 hover:text-primary-fff group cursor-pointer transition-all ease-linear duration-300 text-text2-black">
        <div className="flex flex-col gap-4 items-center justify-center">
          <span className="text-[56px]">
            <img src={itemData?.image} alt="not found" className="w-full h-full object-fill"/>
          </span>
          <h2 className="font-poppins text-base font-normal leading-6 capitalize ">{itemData.name}</h2>
        </div>
      </div>
    </div>
  );
};

export default CategoryCart;
