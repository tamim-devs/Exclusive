import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import { FaPhone, FaPhoneVolume } from "react-icons/fa";
import { Link } from "react-router-dom";
import { MdOutlineEmail } from "react-icons/md";
import Button from "../../component/button/Button";

const Contactpage = () => {
  return (
    <div className="container">
      <div className="py-20">
        <BreadCrumb />
      </div>
      <div className="main_for_flex mb-36 flex items-center gap-[60px] flex-wrap ">
        <div className="texts_content_part w-[30%] shadow-md py-12 px-9">
          {/* part1 start here */}
          <div className="part1 flex flex-col gap-5 border-b-2 border-text2-black">
            <div className="call flex items-center gap-4">
              <div className="icons h-10 w-10 bg-secondary2-db44 rounded-full text-primary-fff flex items-center justify-center cursor-pointer">
                <span className="text-xl ">
                  <FaPhone />
                </span>
              </div>
              <h4 className="text-text2-black font-poppins font-medium text-base leading-6">
                Call To Us
              </h4>
            </div>
            <p className="font-poppins font-normal text-text2-black text-sm leading-5">
              We are available 24/7, 7 days a week.
            </p>
            <Link className="font-poppins font-normal text-text2-black text-sm leading-5 mb-8">
              Phone: +8801611112222
            </Link>
          </div>
          {/* part1 end here */}

          {/* part2 start here */}
          <div className="part2 flex flex-col gap-4 mt-8">
            <div className="call flex items-center gap-4 mb-3">
              <div className="icons h-10 w-10 bg-secondary2-db44 rounded-full text-primary-fff flex items-center justify-center cursor-pointer">
                <span className="text-2xl">
                  <MdOutlineEmail />
                </span>
              </div>
              <h4 className="text-text2-black font-poppins font-medium text-base leading-6 capitalize">
                Write To US
              </h4>
            </div>
            <p className="font-poppins font-normal text-text2-black text-sm leading-5 w-[230px]">
              Fill out our form and we will contact you within 24 hours.
            </p>
            <Link
              to="https://mail.google.com"
              className="font-poppins font-normal text-text2-black text-sm leading-5"
            >
              Emails: customer@exclusive.com
            </Link>
            <Link
              to="https://mail.google.com"
              className="font-poppins font-normal text-text2-black text-sm leading-5"
            >
              Emails: support@exclusive.com
            </Link>
          </div>
          {/* part2 end here */}
        </div>
        <div className="input_fileds_part w-[60%] shadow-md py-11 px-7 flex flex-col gap-8 items-end">
          {/* input part */}
          <div className="flex items-center gap-5">
            <input
              type="text"
              id="firstName"
              name="firstName"
              // onChange={Formik.handleChange}
              // value={Formik.values.firstName}
              className="bg-secondary-f5f text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded focus:ring-blue-500 focus:border-blue-500 block w-full px-3 py-3"
              placeholder="Your name *"
              required
            />
            <input
              type="text"
              id="firstName"
              name="firstName"
              // onChange={Formik.handleChange}
              // value={Formik.values.firstName}
              className="bg-secondary-f5f text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 py-3"
              placeholder="Your Email *"
              required
            />
            <input
              type="text"
              id="firstName"
              name="firstName"
              // onChange={Formik.handleChange}
              // value={Formik.values.firstName}
              className="bg-secondary-f5f text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3"
              placeholder="Your phone *"
              required
            />
          </div>
          {/* input part */}
          {/* message part */}
          <textarea
            id="message"
            rows="4"
            className="block p-2.5 w-full h-[207px] font-poppins font-normal text-base text-text2-black bg-secondary-f5f rounded border leading-6 border-gray-300 focus:ring-blue-500 focus:border-blue-500 py-3"
            placeholder="You Message Here..."
          ></textarea>
          <div className="relative right-0">
            <Button className="common_btn " text="send message"/>
          </div>
          {/* message part */}
        </div>
      </div>
    </div>
  );
};

export default Contactpage;
