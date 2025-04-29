import React, { useState } from "react";
import login from "../../assets/login/login.png";
import Button from "../../component/button/Button";
import { useFormik } from "formik";
import LoginValidation from "../../validation/auth/LoginValidation";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
const LogIn = () => {
  const [showHide, setShowHide] = useState(false);
  const initialValues = {
    emailOrphoneNumber: "",
    password: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    validationSchema: LoginValidation,
    onSubmit: (values) => {
      // console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleHideShow = () => {
    setShowHide(!showHide);
  };
  return (
    <div className="main pt-[60px] pb-36">
      <div className="container">
        <div className="flex gap-[100px] justify-between items-center">
          {/* image part */}
          <div className="Img_part w-[60%] h-[601px] overflow-hidden">
            <img
              src={login}
              alt="not found"
              className="w-full h-full object-fill"
            />
          </div>

          {/* log in part */}
          <div className="text_part w-[40%]">
            <div className="flex flex-col gap-12">
              {/* Heading part */}
              <div className="headings flex flex-col gap-6">
                <h1 className="font-inter text-text2-black text-4xl font-medium leading-8 traking-[1.44px]">
                  Log in to Exclusive
                </h1>
                <h4 className="font-poppins font-medium text-text2-black text-base leading-6">
                  Enter your details below
                </h4>
              </div>
              {/* inputs and button part */}
              <form onSubmit={Formik.handleSubmit}>
                <div className="body_parts flex flex-col gap-10">
                  <input
                    type="text"
                    name="emailOrphoneNumber"
                    placeholder="Email or Phone Number"
                    onChange={Formik.handleChange}
                    value={Formik.values.emailOrphoneNumber}
                    className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6"
                  />
                  {Formik.touched.emailOrphoneNumber &&
                  Formik.errors.emailOrphoneNumber ? (
                    <p className="text-red-500">
                      {Formik.errors.emailOrphoneNumber}
                    </p>
                  ) : null}
                  {/* password section */}
                  <div className="relative">
                    <input
                      type={`${showHide ? "text" : "password"}`}
                      placeholder="Password"
                      name="password"
                      onChange={Formik.handleChange}
                      value={Formik.values.password}
                      className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6 "
                    />
                    {showHide ? (
                      <span
                        className="absolute right-[25%] top-[20%] translate-y-[20%]  text-xl cursor-pointer"
                        onClick={handleHideShow}
                      >
                        <IoEye />
                      </span>
                    ) : (
                      <span
                        className="absolute right-[25%] top-[20%] translate-y-[20%] text-xl cursor-pointer"
                        onClick={handleHideShow}
                      >
                        <FaEyeSlash />
                      </span>
                    )}
                  </div>
                  {Formik.touched.password && Formik.errors.password ? (
                    <p className="text-red-600">{Formik.errors.password}</p>
                  ) : null}
                  <div className="flex items-center gap-[87px]">
                    <Button
                      type="submit"
                      text="log in"
                      className="common_btn py-4 px-12"
                    />
                    <p className="font-poppins font-normal text-secondary2-db44 text-base leading-6 capitalize cursor-pointer">
                      forget password?
                    </p>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
