import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import AccountInputs from "../../component/Flowbite/AccountInputs";

const MyAccount = () => {
  return (
    <div className="container">
      {/* header part */}
      <div className="py-20 flex items-center justify-between">
        <BreadCrumb />
        <span className="font-poppins font-normal text-sm text-text2-black leading-6 flex items-center capitalize">
          welcome!
          <span className="ml-2 font-poppins font-normal text-sm text-hover-btn-red leading-6 flex items-center">
            md Rimel
          </span>
        </span>
      </div>
      {/* header part */}

      {/* body part */}
      <div className="body mb-36 flex gap-24 flex-wrap justify-between">
        {/* account side bar Start*/}
        <div className="account_sidebar w-[20%]">
          <div className="mb-6">
            <h3 className="account_style font-medium text-text2-black mb-4 cursor-pointer">
              manage my account
            </h3>
            <ul className="ml-9 flex flex-col items-start gap-2 ">
              <li className="account_style cursor-pointer text-secondary2-db44">
                My Profile
              </li>
              <li className="account_style cursor-pointer">Address Book</li>
              <li className="account_style cursor-pointer">
                My Payment Options
              </li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="account_style font-medium text-text2-black mb-4 cursor-pointer">
              My Orders
            </h3>
            <ul className="ml-9 flex flex-col items-start gap-2 ">
              <li className="account_style cursor-pointer text-secondary2-db44">My Returns</li>
              <li className="account_style cursor-pointer">My Cancellations</li>
            </ul>
          </div>
          <div className="mb-6">
            <h3 className="account_style font-medium text-text2-black mb-4 cursor-pointer">
            My WishList
            </h3>
           
          </div>
        </div>
        {/* account side bar End*/}

        {/* account_details */}
        <div className="account_details w-[70%]">
            <AccountInputs/>
        </div>
        {/* account_details */}
      </div>
      {/* body part */}
    </div>
  );
};

export default MyAccount;
