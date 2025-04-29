import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import MyImg from "../../assets/joy.png";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { ImCross } from "react-icons/im";
const AddToCart = () => {
  return (
    <div>
      <div className="container">
        <div className="my-[60px]">
          <BreadCrumb />
        </div>
        {/* product head part */}
        <div className="body py-6 px-10 shadow-lg mb-10 rounded-md flex items-center justify-between gap-[280px]">
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            product
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            price
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize flex-1">
            quantity
          </div>
          <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize text-end flex-1">
            subtotal
          </div>
        </div>
        {/* product head part or details part */}
        <div className="h-[500px] overflow-y-scroll mb-9 scrollbar">
          {[...Array(7)].map((_, index) => (
            <div key={index} className="flex flex-col gap-10">
              <div className="body py-6 px-10 shadow-md mb-10 rounded-md flex items-center justify-between">
                <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize overflow-hidden flex gap-4 items-center flex-1 relative">
                  <img
                    src={MyImg}
                    alt="not found"
                    className="h-12 w-12 object-fill group"
                  />
                  <span className="text-sm text-primary-fff bg-button-red h-[20px] w-[20px] rounded-full flex items-center justify-center cursor-pointer absolute top-0 left-0">
                    <ImCross />
                  </span>
                  <h6 className="font-poppins font-normal text-text2-black text-base leading-6 capitalize truncate ">
                    LCD Monitor
                  </h6>
                </div>
                <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize pl-24">
                  $600
                </div>
                <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize flex justify-center items-center relative">
                  <input
                    type="number"
                    className="border border-text-7d8 rounded w-20 h-10 px-4 py-[6px]"
                  />
                  <div className="absolute flex flex-col left-[55%]">
                    <span className="cursor-pointer text-base">
                      <FaAngleUp />
                    </span>
                    <span className="cursor-pointer text-base">
                      <FaAngleDown />
                    </span>
                  </div>
                </div>
                <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize text-end">
                  $750
                </div>
              </div>
            </div>
          ))}
        </div>
        {/* product body part or details part*/}
        {/* button part  */}
        <div className="flex items-center justify-between mb-20">
          <button className="common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12">
            return to shop
          </button>
          <button className="common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12">
            update cart
          </button>
        </div>
        {/* button part  */}
        {/* footer part */}
        <div className="main_foot flex justify-between gap-[173px] flex-wrap mb-36">
          <div className="child1 w-[45%] h-8">
            <div className="flex items-center gap-4">
              <input
                type="text"
                placeholder="Coupon code"
                className="font-poppins font-normal text-base text-text-7d8 py-4 pl-6 pr-24 border border-text-7d8 rounded"
              />
              <button className="common_btn">apply coupon</button>
            </div>
          </div>
          <div className="child2 w-[35%] h-[370px] border-2 border-text-7d8 rounded px-6 py-8">
            <h4 className="font-poppins font-semibold text-xl text-text2-black leading-7 capitalize mb-6">
              cart total
            </h4>
            <div className="flex flex-wrap flex-row gap-4">
              {/* Subtotal */}
              <div className="w-[400px] border-b-[3px] border-solid border-b-slate-300 pb-4 flex items-center justify-between">
                <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                  subtotal:
                </h5>
                <span className="font-poppins font-medium text-text2-black leading-6 text-base">
                  $400
                </span>
              </div>
              {/* Subtotal*/}
              {/* Shipping Fee */}
              <div className="w-[400px] border-b-[3px] border-solid border-b-slate-300 pb-4 flex items-center justify-between">
                <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                  Shipping:
                </h5>
                <span className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                  free
                </span>
              </div>
              {/* Shipping Fee*/}
              {/* Total amount  */}
              <div className="w-[400px] flex items-center justify-between">
                <h5 className="font-poppins font-medium text-text2-black leading-6 text-base capitalize">
                  total:
                </h5>
                <span className="font-poppins font-medium text-text2-black leading-6 text-base">
                  $400
                </span>
              </div>
              {/* Total amount */}
            </div>
            <div className="flex items-center justify-center my-10 ">
              <button className="common_btn">Procees to checkout</button>
            </div>
          </div>
        </div>
        {/* footer part */}
      </div>
    </div>
  );
};

export default AddToCart;
