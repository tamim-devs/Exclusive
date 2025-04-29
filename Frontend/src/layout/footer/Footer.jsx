import React from "react";
import { GoPaperAirplane } from "react-icons/go";
import QrCode from "../../assets/QR.png";
import apple from "../../assets/apple.png";
import playStore from "../../assets/playStore.png";
import { FaFacebookF, FaLinkedinIn, FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io";

const Footer = () => {
  return (
    <>
      <footer className="bg-text2-black ">
        <div className="container">
          <div className="main _wrapper flex items-baseline gap-[60px] justify-between py-20 ">
            {/* heading part */}
            <div className="flex flex-col gap-4">
              <h3 className="font-inter text-primary-fff text-2xl font-bold leading-6 capitalize tracking-[0.78px]">
                exclusive
              </h3>
              <h4 className="font-poppins text-primary-fff text-xl font-medium leading-7 capitalize ">
                subscribe
              </h4>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6">
                Get 10% off your first order
              </p>
              <div className="text-primary-fff relative">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="py-2 px-2   rounded text-text-7d8 bg-transparent border-2 border-solid border-primary-fff "
                />
                <span className="absolute top-1/2 -translate-y-1/2 right-3 cursor-pointer text-xl">
                  <GoPaperAirplane />
                </span>
              </div>
            </div>
            {/* Support part */}
            <div className="flex flex-col gap-4 w-[175px]">
              <h3 className="font-poppins text-primary-fff text-xl font-medium leading-7 capitalize tracking-[0.78px]">
                support
              </h3>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6">
                111 Bijoy sarani, Dhaka, DH 1515, Bangladesh.
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6">
                exclusive@gmail.com
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6">
                +88015-88888-9999
              </p>
            </div>
            {/* Account part */}
            <div className="flex flex-col gap-4 w-[175px]">
              <h3 className="font-poppins text-primary-fff text-xl font-medium leading-7 capitalize tracking-[0.78px]">
                Account
              </h3>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 capitalize">
                My Account
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 capitalize">
                Login / Register
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 capitalize">
                Cart
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 capitalize">
                wishlist
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 capitalize">
                shop
              </p>
            </div>
            {/* Quick Link part */}
            <div className="flex flex-col gap-4 w-[175px]">
              <h3 className="font-poppins text-primary-fff text-xl font-medium leading-7 capitalize tracking-[0.78px]">
                quick link
              </h3>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 capitalize">
                Privacy Policy
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 capitalize">
                Terms Of Use
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 uppercase">
                FAq
              </p>
              <p className="font-poppins text-primary-fff text-base font-normal leading-6 capitalize">
                Contact
              </p>
            </div>
            {/* Download App part */}
            <div className="flex flex-col gap-3 ">
              <h3 className="font-poppins text-primary-fff text-xl font-medium leading-7 capitalize tracking-[0.78px]">
                download app
              </h3>
              <p className="font-poppins text-text-7d8 text-xs font-medium leading-4 capitalize">
                Save $3 with App New User Only
              </p>
              <div className="QR flex gap-2">
                <div className="qr w-20 h-20 overflow-hidden">
                  <img
                    src={QrCode}
                    alt="not found"
                    className="h-full w-full object-fill"
                  />
                </div>
                <div className="playStore w-full flex flex-col gap-1 ">
                  <img
                    src={apple}
                    alt="not found"
                    className="w-[110px] h-[40px]"
                  />
                  <img
                    src={playStore}
                    alt="not found"
                    className="w-[110px] h-[40px]"
                  />
                </div>
              </div>
              <div className="icons mt-4 flex gap-6 items-start ">
                <span className="text-2xl text-primary-fff cursor-pointer">
                  <FaFacebookF />
                </span>
                <span className="text-2xl text-primary-fff cursor-pointer">
                  <FaTwitter />
                </span>
                <span className="text-2xl text-primary-fff cursor-pointer">
                  <IoLogoInstagram />
                </span>
                <span className="text-2xl text-primary-fff cursor-pointer">
                  <FaLinkedinIn />
                </span>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="flex items-center justify-center pb-6 pt-4 bg-text2-black border-t-[1px] border-solid border-text-7d8">
        <p className="text-text-7d8 font-poppins text-base font-normal leading-6">
          &copy; Copyright Sazzad 2025. All right reserved
        </p>
      </div>
    </>
  );
};

export default Footer;
