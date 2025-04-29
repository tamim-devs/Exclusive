import React from "react";
import { CiHeart } from "react-icons/ci";
import { IoEyeOutline } from "react-icons/io5";
import product from "../../../assets/product.svg";
import Image from "../../image/Image";
import UseDiscountCalculation from "../../../Hook/UseDiscountCalculation";
import Star from "./Star";
import { Link } from "react-router-dom";

const ProductCart = ({ itemData }) => {
  return (
    <Link to={`/productDetails/${itemData._id}`}>
      <div className="main w-full my-[20px]">
        <div className="main_wrapper">
          {/* //part one */}
          <div className="img_part w-full h-[230px] mb-5 bg-text-faf rounded group relative overflow-hidden ">
            <div className="px-3 py-3">
              <div className="item_part relative">
                {/* itemData?.discountPercentage !== undefined && itemData?.discountPercentage !== null , ensures that a discount exists if none then hide this part*/}
                {itemData?.discountPercentage !== undefined &&
                itemData?.discountPercentage !== null ? (
                  <span className="py-1 px-3 bg-secondary2-db44 text-primary-fff font-poppins text-xs font-normal leading-4 tracking-tighter-[2px] rounded-sm">
                    -{itemData?.discountPercentage}%
                  </span>
                ) : (
                  <span className="py-1 px-3 bg-transparent text-primary-fff font-poppins text-xs font-normal leading-4 tracking-tighter-[2px] rounded-sm">
                    -{itemData?.discountPercentage}%
                  </span>
                )}
                <div className="icons absolute right-0 -mt-[26px] z-[999]">
                  <div className="flex flex-col gap-[4px]">
                    <div className="h-8 w-8 bg-primary-fff flex items-center justify-center rounded-[100%] hover:bg-secondary2-db44 cursor-pointer transition-all ease-linear duration-200">
                      <span className=" text-2xl hover:text-primary-fff  transition-all ease-linear duration-200">
                        <CiHeart />
                      </span>
                    </div>
                    <div className="icons h-8 w-8 bg-primary-fff flex items-center justify-center rounded-[100%] hover:bg-secondary2-db44 cursor-pointer transition-all ease-linear duration-200">
                      <div className=" text-2xl hover:text-primary-fff transition-all ease-linear duration-200">
                        <IoEyeOutline />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* //Image part */}
              <div className="img w-[150px] h-[152px] bg-text-faf mx-10 my-5  overflow-hidden">
                <Image
                  //**PROBLEM**- This prevents the "Cannot read property of undefined (reading '0')" error.

                  //Array.isArray(itemData?.image) => Ensures that itemData.image exists and is an array
                  //itemData?.image.length > 0 => Ensures the array is not empty
                  //If both conditions are met, itemData.image[0] is used; otherwise, it falls back to product
                  src={
                    Array.isArray(itemData?.image) && itemData?.image.length > 0
                      ? itemData?.image[0]
                      : product
                  }
                  alt="not found"
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            {/* //add to cart */}
            <div className="absolute bottom-[-42px]  left-0  h-9 w-full bg-text2-black px-3 py-5 rounded-b-md  flex items-center justify-center capitalize group-hover:bottom-[-1px] transition-all ease-linear duration-200 cursor-pointer">
              <h4 className="text-primary-fff font-poppins text-[16px] font-medium leading-6">
                add to cart
              </h4>
            </div>
          </div>
          {/* //part two */}
          <div className="comment part flex flex-col gap-2">
            <h3
              className="text-text2-black font-poppins text-lg font-medium leading-6 capitalize w-full truncate"
              style={{
                overflow: "hidden",
                whiteSpace: "nowrap",
                textOverflow: "ellipsis",
                maxWidth: "200px",
              }}
            >
              {itemData ? itemData?.name : "hAVIT hV-g92 gamepad"}
            </h3>
            <div className="flex gap-3">
              <span className="font-poppins text-secondary2-db44 text-[16px] font-medium leading-6">
                $
                {UseDiscountCalculation(
                  itemData ? itemData?.price : "10",
                  itemData ? itemData?.discountPercentage : "1"
                ).toFixed(2)}
                {/* ${itemData ? itemData.price : "120"} */}
              </span>
              <span className="font-poppins text-text-7d8 text-[16px] font-medium leading-6 line-through">
                ${itemData ? itemData?.price : "120"}
              </span>
            </div>
            <div className="start mt-2 flex items-center gap-2">
              {/* {[...new Array(5)].map((_, index) => ( */}
              <span>
                <Star rating={itemData ? itemData?.rating : "1"} />
              </span>
              {/* ))} */}
              <h3 className="text-text-7d8 opacity-50 font-medium text-lg font-popins">
                ({itemData && itemData.review ? itemData.review : "0"})
              </h3>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ProductCart;
