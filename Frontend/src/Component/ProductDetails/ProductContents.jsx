import React from "react";
import Star from "../common/commonComponet/Star";
import Button from "../button/Button";
import { FaRegHeart } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { LuRefreshCw } from "react-icons/lu";
import UseDiscountCalculation from "../../Hook/UseDiscountCalculation";

const ProductContents = ({ data }) => {
  const size = [
    { id: 1, size: " xs" },
    { id: 2, size: "sm" },
    { id: 3, size: "m" },
    { id: 4, size: "l" },
    { id: 5, size: "xl" },
  ];
  const {
    discountPercentage,
    price,
    rating,
    name,
    stock,
    review,
    description,
    returnPolicy,
    shippingInformation,
  } = data;
  return (
    <div className="main">
      <div className="head border-b-2 border-solid border-text-7d8 pb-6">
        <h1 className="font-inter font-semibold text-text2-black text-2xl leading-6 tracking-[0.72px]">
          {name ? name : "Havic HV G-92 Gamepad"}
        </h1>
        <div className="flex items-center gap-2 my-4">
          <span>
            <Star rating={rating} />
          </span>
          <span className="font-poppins font-normal text-text-7d8 text-sm leading-5 pr-2">
          {`review (${review})`}
          </span>
          <span className="font-poppins font-normal text-button-green text-sm leading-5 capitalize border-l-2 border-solid border-text-7d8 pl-4">
            {stock ? stock : "in stock"} stock
          </span>
        </div>
        <span className="font-inter font-normal text-text2-black text-2xl leading-5 tracking-[0.72px]">
          ${Math.round(UseDiscountCalculation(price,discountPercentage)) || 0}
        </span>
        <span className="font-inter font-normal text-text-7d8 text-2xl leading-5 tracking-[0.72px] line-through ml-4">
          ${price}
        </span>
        <p className="font-poppins font-normal text-text2-black text-sm leading-5 mt-6">
          {description ? description : 'Description missing'}
        </p>
      </div>
      <div className="body">
        {/* //colors */}
        <div className="flex items-center gap-x-6">
          <span className="inline-block text-text2-black font-inter text-xl font-normal leading-5 tracking-[0.6px] capitalize my-6">
            colors:
          </span>
          <div className="flex items-center gap-x-2">
            <div className="h-6 w-6 border-1 border-primary-fff hover:border-[3px] border-solid hover:border-text2-black cursor-pointer rounded-full flex items-center justify-center group">
              <span className="inline-block h-6 w-6 group-hover:h-[16px] group-hover:w-[16px] rounded-full bg-sky-400"></span>
            </div>
            <div className="h-6 w-6 border-1 border-primary-fff hover:border-[3px] border-solid hover:border-text2-black cursor-pointer rounded-full flex items-center justify-center group">
              <span className="inline-block h-6 w-6 group-hover:h-[16px] group-hover:w-[16px] rounded-full bg-red-300"></span>
            </div>
          </div>
        </div>
        {/* size */}
        <div className="flex items-center gap-x-6">
          <span className="text-text2-black font-inter text-xl font-normal leading-5 tracking-[0.6px] capitalize my-6">
            size:
          </span>
          <div className="flex items-center gap-x-4">
            {size?.map((item, id) => (
              <div
                key={id}
                className="flex items-center justify-center rounded h-9 w-9 text-text2-black border-[1px] border-solid border-gray-300 cursor-pointer py-[6px] px-[7px] hover:bg-text-7d8 hover:text-primary-fff"
              >
                <span className=" font-poppins text-sm font-semibold leading-5 uppercase">
                  {item.size}
                </span>
              </div>
            ))}
          </div>
        </div>
        {/* increment, button, love */}
        <div className="flex items-center justify-between gap-4 mt-6">
          {/* increment */}
          <div>
            <span className="inline-block py-3 px-4 text-text2-black font-poppins text-2xl font-medium leading-7 border-2 border-solid rounded-l-lg border-gray-300 hover:bg-button-red hover:text-primary-fff hover:border-button-red cursor-pointer">
              -
            </span>
            <span className="inline-block py-3 px-7 text-text2-black font-poppins text-2xl font-medium leading-7 border-2 border-solid border-gray-300 hover:bg-button-red hover:text-primary-fff hover:border-button-red cursor-pointer">
              2
            </span>
            <span className="inline-block py-3 px-4 text-text2-black font-poppins text-2xl font-medium leading-7 border-2 border-solid rounded-r-lg border-gray-300 hover:bg-button-red hover:text-primary-fff hover:border-button-red  cursor-pointer">
              +
            </span>
          </div>
          {/* button */}
          <div>
            <Button className="common_btn py-3 px-12" text="buy now" />
          </div>
          <div className="flex items-center justify-center rounded h-12 w-12 text-text2-black border-[1px] border-solid border-gray-300 cursor-pointer py-[6px] px-[7px] hover:bg-button-red hover:text-primary-fff hover:border-button-red group">
            <span className="text-text2-black font-poppins text-2xl font-semibold leading-5 uppercase  group-hover:text-primary-fff">
              <FaRegHeart />
            </span>
          </div>
        </div>
      </div>
      {/* delivery */}
      <div className="foot mt-10">
        <div className="flex items-center gap-4 w-full border border-gray-300 pt-6 pl-4 pb-4 pr-12">
          <span className="inline-block text-text2-black text-4xl">
            <TbTruckDelivery />
          </span>
          <div className="flex flex-col gap-2">
            <span className="inline-block font-poppins text-base font-medium leading-6 text-text2-black capitalize">
              free delivery
            </span>
            <span className="inline-block font-poppins text-xs font-medium leading-5 text-text2-black underline">
              {shippingInformation ? shippingInformation : 'missing'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-4 w-full border border-gray-300 pt-6 pl-4 pb-4 pr-12">
          <span className="inline-block text-text2-black text-4xl">
            <LuRefreshCw />
          </span>
          <div className="flex flex-col gap-2">
            <span className="inline-block font-poppins text-base font-medium leading-6 text-text2-black capitalize">
              Return Delivery
            </span>
            <span className="inline-block font-poppins text-xs font-medium leading-5 text-text2-black">
              {returnPolicy ? returnPolicy : "missing"}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductContents;
