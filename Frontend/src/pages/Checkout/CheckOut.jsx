import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import MyImg from "../../assets/joy.png";
import { ImCross } from "react-icons/im";
import { RiVisaLine } from "react-icons/ri";
import bkashImg from "../../assets/checkout/bkash.png";
import masterCardImg from "../../assets/checkout/master_card.png";
import visaCardImg from "../../assets/checkout/visa.png";
import nagad from "../../assets/checkout/nagad.png";
import monitorImg from "../../assets/checkout/monitor.png";
import Button from "../../component/button/Button";
const CheckOut = () => {
  return (
    <div className="container">
      <div className="py-20">
        <BreadCrumb />
      </div>
      <div className="main mb-36">
        <h1 className="font-inter font-medium text-text2-black text-4xl leading-8 tracking-[1.44px] capitalize mb-12">
          Billing Details
        </h1>
        <div className="content_part flex justify-between">
          <div className="part1 flex flex-col gap-8 w-[40%]">
            {/* first name start*/}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first_name"
                className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
              >
                First name
                <span className="text-secondary2-db44 text-base">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                //   onChange={Formik.handleChange}
                //   value={Formik.values.firstName}
                className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                // placeholder="Rimel"
                required
              />
            </div>
            {/* first name end*/}

            {/* company name start */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first_name"
                className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
              >
                Company Name
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                //   onChange={Formik.handleChange}
                //   value={Formik.values.firstName}
                className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            {/* company name end */}

            {/* street address start */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first_name"
                className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
              >
                Street Address
                <span className="text-secondary2-db44 text-base">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                //   onChange={Formik.handleChange}
                //   value={Formik.values.firstName}
                className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                // placeholder="Rimel"
                required
              />
            </div>
            {/* street address end */}

            {/* apartment start */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first_name"
                className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
              >
                Apartment, floor, etc. (optional)
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              />
            </div>
            {/* apartment end*/}

            {/* town/city start */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first_name"
                className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
              >
                Town/City
                <span className="text-secondary2-db44 text-base">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                //   onChange={Formik.handleChange}
                //   value={Formik.values.firstName}
                className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                // placeholder="Rimel"
                required
              />
            </div>
            {/* town/city end*/}

            {/* Phone Number start*/}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first_name"
                className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
              >
                Phone Number
                <span className="text-secondary2-db44 text-base">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                //   onChange={Formik.handleChange}
                //   value={Formik.values.firstName}
                className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                // placeholder="Rimel"
                required
              />
            </div>
            {/* Phone Number end */}

            {/* email address start */}
            <div className="flex flex-col gap-2">
              <label
                htmlFor="first_name"
                className="block mb-2 account_style text-text-7d8 font-poppins text-base leading-6 font-normal"
              >
                Email Address
                <span className="text-secondary2-db44 text-base">*</span>
              </label>
              <input
                type="text"
                id="firstName"
                name="firstName"
                //   onChange={Formik.handleChange}
                //   value={Formik.values.firstName}
                className="bg-secondary-f5f rounded text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                // placeholder="Rimel"
                required
              />
            </div>
            {/* email address end */}

            {/* checkbox start */}
            <div>
              <div className="flex items-start mb-6">
                <div class="flex items-center h-5">
                  <input
                    type="checkbox"
                    className="w-4 h-4 bg-secondary2-db44"
                  />
                </div>
                <label
                  for="remember"
                  class="ms-2 font-poppins font-normal text-base leading-6"
                >
                  Save this information for faster check-out next time
                </label>
              </div>
            </div>
            {/* checkbox end */}
          </div>
          <div className="part2 w-[40%] mt-7 ">
            {/* product section start */}
            <div className="flex flex-col gap-8">
              <div className="product flex items-center w-[80%] flex-1 ">
                <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize overflow-hidden flex gap-4 items-center w-[270px] ">
                  <img
                    src={MyImg}
                    alt="not found"
                    className="h-12 w-12 object-fill group"
                  />
                  <h6 className="font-poppins font-normal text-text2-black text-base leading-6 capitalize truncate ">
                    gaming console
                  </h6>
                </div>
                <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize pl-24">
                  $600
                </div>
              </div>
              <div className="product flex items-center w-[80%] flex-1 ">
                <div className="font-poppins font-normal text-text2-black text-base leading-6 capitalize overflow-hidden flex gap-4 items-center w-[270px] ">
                  <img
                    src={monitorImg}
                    alt="not found"
                    className="h-12 w-12 object-fill group"
                  />
                  <h6 className="font-poppins font-normal text-text2-black text-base leading-6 capitalize truncate ">
                    LCD Monitor
                  </h6>
                </div>
                <div className="flex-1 font-poppins font-normal text-text2-black text-base leading-6 capitalize pl-24">
                  $600
                </div>
              </div>
            </div>
            {/* product section end */}

            {/* Calculation section start */}
            <div className="flex flex-wrap flex-row gap-4 mt-8">
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
            {/* Calculation section end */}

            {/* Payment method start */}
            <div className="payment_method1 mt-[34px] flex items-center gap-[140px] ">
              <div className="flex gap-4 items-center">
                <div className="h-6 w-6 rounded-full border-2 border-text2-black "></div>
                <p className="font-poppins font-normal text-base text-text2-black leading-6 capitalize">
                  bank
                </p>
              </div>
              <div className="banking_icons flex gap-2">
                <div className="w-10 h-7 overflow-hidden cursor-pointer">
                  <img
                    src={bkashImg}
                    alt="not found"
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="w-10 h-7 overflow-hidden cursor-pointer">
                  <img
                    src={masterCardImg}
                    alt="not found"
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="w-10 h-7 overflow-hidden cursor-pointer">
                  <img
                    src={visaCardImg}
                    alt="not found"
                    className="w-full h-full object-fill"
                  />
                </div>
                <div className="w-10 h-7 overflow-hidden cursor-pointer">
                  <img
                    src={nagad}
                    alt="not found"
                    className="w-full h-full object-fill"
                  />
                </div>
              </div>
            </div>
            <div className="payment_method2 mt-8">
              <div className="flex gap-4 items-center">
                <div className="h-6 w-6 rounded-full border-2 border-text2-black flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-text2-black"></div>
                </div>
                <p className="font-poppins font-normal text-base text-text2-black leading-6 capitalize">
                  Cash on delivery
                </p>
              </div>
            </div>
            {/* Payment method end */}

            {/* Apply coupon start */}
            <div className="my-8">
              <div className="flex items-center gap-4">
                <input
                  type="text"
                  placeholder="Coupon code"
                  className="font-poppins font-normal text-base text-text-7d8 py-4 px-10 border border-text-7d8 rounded"
                />
                <Button text="apply coupon" className="common_btn" />
              </div>
            </div>
            {/* Apply coupon end */}

            {/* Button start */}
            <Button text="place order" className="common_btn" />
            {/* Button end */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
