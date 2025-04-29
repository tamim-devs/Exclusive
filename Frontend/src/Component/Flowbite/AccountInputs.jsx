import React, { useState } from "react";
import "flowbite";
import { useFormik } from "formik";
import { FaEyeSlash } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import AccountValidation from "../../validation/account/AccountValidation";
const AccountInputs = () => {
  const [showHide, setShowHide] = useState(false);
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    currentPassword: "",
    newPassword: "",
    confirmPassword: "",
  };
  const Formik = useFormik({
    initialValues: initialValues,
    // validationSchema: AccountValidation,
    onSubmit: (values) => {
      // console.log(values);
      alert(JSON.stringify(values, null, 2));
    },
  });
  const handleHideShow = () => {
    setShowHide(!showHide);
  };
  return (
    <div className="main_div shadow-lg py-10 px-20">
      <form onSubmit={Formik.handleSubmit}>
        <h1 className="text-secondary2-db44 font-poppins font-medium text-xl leading-7 capitalize mb-4">
          edit your profile
        </h1>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <label
              htmlFor="first_name"
              className="block mb-2 account_style text-text2-black"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              onChange={Formik.handleChange}
              value={Formik.values.firstName}
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Rimel"
              required
            />
          </div>
          <div>
            <label
              htmlFor="last_name"
              className="block mb-2 account_style text-text2-black"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              onChange={Formik.handleChange}
              value={Formik.values.lastName}
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Doe"
              required
            />
          </div>
          <div>
            <label
              htmlFor="company"
              className="block mb-2 account_style text-text2-black"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              onChange={Formik.handleChange}
              value={Formik.values.email}
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="enteryour@email.com"
              required
            />
            {/* {Formik.touched.email && Formik.errors.email ? (
              <p className="text-red-600">{Formik.errors.email}</p>
            ) : null} */}
          </div>
          <div>
            <label className="block mb-2 account_style text-text2-black">
              address
            </label>
            <input
              type="text"
              id="address"
              name="address"
              onChange={Formik.handleChange}
              value={Formik.values.address}
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="Kingston, 5236, United State"
              required
            />
          </div>
        </div>
        {/* password changes */}
        <div className="mb-6 flex flex-col gap-4">
          <label
            htmlFor="password"
            className="block mb-2 account_style text-text2-black"
          >
            Password changes
          </label>
          <div className="relative">
            <input
              type={showHide ? "text" : "password"}
              id="currentPassword"
              name="currentPassword"
              onChange={Formik.handleChange}
              value={Formik.values.currentPassword}
              className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Current password"
              required
            />
            {showHide ? (
              <span
                className="absolute right-8 top-[25%] translate-y-[-20% ] text-xl cursor-pointer text-text2-black"
                onClick={handleHideShow}
              >
                <IoEye />
              </span>
            ) : (
              <span
                className="absolute right-8 top-[25%] translate-y-[-20% ] text-xl cursor-pointer text-text2-black"
                onClick={handleHideShow}
              >
                <FaEyeSlash />
              </span>
            )}
          </div>
          <input
            type="password"
            id="newPassword"
            name="newPassword"
            onChange={Formik.handleChange}
            value={Formik.values.newPassword}
            className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="New password"
            required
          />
          {/* {Formik.touched.newPassword && Formik.errors.newPassword ? (
            <p className="text-red-600">{Formik.errors.newPassword}</p>
          ) : null} */}
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            onChange={Formik.handleChange}
            value={Formik.values.confirmPassword}
            className="bg-transparent text-text2-black font-poppins text-base font-normal leading-6  border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
            placeholder="Confirm password"
            required
          />
        </div>
        <div className="flex gap-6 ml-[350px]">
          <button
            type="reset"
            value="reset"
            className="common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12"
          >
            cancel
          </button>
          <button type="submit" className="common_btn">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};

export default AccountInputs;
