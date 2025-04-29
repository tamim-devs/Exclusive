import React, { useState } from "react";
import Button from "../../component/button/Button";
import login from "../../assets/login/login.png";
import { useFormik } from "formik";
import LoginValidation from "../../validation/auth/LoginValidation";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
const SignuPage = () => {
  const [showHide, setShowHide] = useState(false);
  const initialValues = {
    name: "",
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
          <div className="Img_part w-[70%] h-[601px] overflow-hidden relative left-[-42px]">
            <img
              src={login}
              alt="not found"
              className="w-full h-full object-fill"
            />
          </div>

          {/* log in part */}
          <div className="text_part w-[30%]">
            <div className="flex flex-col gap-12">
              {/* Heading part */}
              <div className="headings flex flex-col gap-6">
                <h1 className="font-inter text-text2-black text-4xl font-medium leading-8 traking-[1.44px]">
                  Create an account
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
                    name="name"
                    placeholder="Name"
                    onChange={Formik.handleChange}
                    value={Formik.values.name}
                    className="w-[370px] border-b border-solid border-b-slate-300 py-2 font-poppins font-normal text-text2-black text-base leading-6"
                  />
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
                        className="absolute right-[5%] top-[20%] translate-y-[20%]  text-xl cursor-pointer"
                        onClick={handleHideShow}
                      >
                        <IoEye />
                      </span>
                    ) : (
                      <span
                        className="absolute right-[5%] top-[20%] translate-y-[20%] text-xl cursor-pointer"
                        onClick={handleHideShow}
                      >
                        <FaEyeSlash />
                      </span>
                    )}
                  </div>
                  {Formik.touched.password && Formik.errors.password ? (
                    <p className="text-red-600">{Formik.errors.password}</p>
                  ) : null}
                  <div className="flex flex-col items-center gap-4">
                    <Button
                      type="submit"
                      text="Create Account"
                      className="common_btn py-4 px-12 w-full"
                    />
                    <div className="w-full common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12 flex gap-4 items-center justify-center">
                      <span className="text-2xl">
                        <FcGoogle />
                      </span>
                      <p className="text-base"> Sign up with Google </p>
                    </div>
                    
                    <div className="flex gap-3 mt-7">
                      <p className="font-poppins font-normal text-text-7d8 text-base leading-6 capitalize ">
                        Already have account?
                      </p>
                      <Link
                        to="/login"
                        className="font-poppins font-medium text-text-7d8 text-base leading-6 capitalize underline"
                      >
                        login
                      </Link>
                    </div>
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

export default SignuPage;
