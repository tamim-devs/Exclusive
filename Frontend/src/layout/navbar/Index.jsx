import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { IoSearchOutline } from "react-icons/io5";
import { IoIosStarOutline, IoMdHeartEmpty } from "react-icons/io";
import { MdShoppingCart } from "react-icons/md";
import { IoMdContact } from "react-icons/io";
import { RiContactsLine } from "react-icons/ri";
import { FiShoppingBag } from "react-icons/fi";
import { RxCrossCircled } from "react-icons/rx";
import { TbLogout2 } from "react-icons/tb";

const Navbar = () => {
  const [account, setAccount] = useState(false);

  // useEffect(()=>{
  //     window.addEventListener("click",(event)=>{
  //         if (userAccountRef.current.contains(event.target)) {
  //             setAccount(!account)
  //         } else {
  //             setAccount(false)
  //             // console.log('false');

  //         }

  //     })
  // },[account])
  let handleDropdown = (event) => {
    setAccount(!account);
  };
  const navItem = [
    {
      id: 1,
      item: "home",
    },
    {
      id: 2,
      item: "product",
    },
    {
      id: 3,
      item: "contact",
    },
    {
      id: 4,
      item: "signup",
    },
  ];
  return (
    <nav className="pt-10 pb-4 border-text-7d8 border-[1px] border-solid z-50">
      <div className="container">
        <div className="main-wrapper flex items-center justify-between">
          <div className="heading">
            <h1 className="text-text2-black font-inter text-2xl font-bold leading-[.72px] transition-all ease-linear duration-200 hover:text-primary-363 cursor-pointer">
              Excluseive
            </h1>
          </div>
          <div className="menu">
            <ul className="flex items-center justify-center gap-12 ">
              {navItem.map((nav, id) => (
                <li key={id} className="UnderLine">
                  <NavLink
                    to={`/${nav.item}`}
                    className={({ isActive }) =>
                      isActive
                        ? "font-poppins text-button-red text-base font-normal leading-6 capitalize transition-all ease-linear duration-200 hover:text-hover-btn-red"
                        : "font-poppins text-text2-black text-base font-normal leading-6 capitalize transition-all ease-linear duration-200 hover:text-text-7d8"
                    }
                  >
                    {nav.item}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative flex items-center gap-7 flex-end">
            <input
              type="text"
              className="py-2 px-6 bg-secondary-f5f rounded text-xs font-poppins font-normal leading-4 text-black "
              placeholder="What are you looking for?"
            />
            <span className="absolute right-[43%] text-lg top-1/2 -translate-y-1/2 ">
              <IoSearchOutline />
            </span>
            <div className="flex items-center gap-4">
              <span className="text-2xl cursor-pointer">
                <IoMdHeartEmpty />
              </span>
              <span className="text-2xl cursor-pointer numberIcon">
                <MdShoppingCart />
              </span>
              <div className="contact">
                <span
                  onClick={handleDropdown}
                  className="text-3xl cursor-pointer text-button-red rounded relative"
                >
                  <IoMdContact />
                </span>
                {account && (
                  <div className="dropdown_main absolute right-0 top-[155%] pl-5 pt-5 pr-3 pb-2 bg-slate-400 rounded flex flex-col gap-3">
                    <div className="dropdown_item flex items-center gap-4 group cursor-pointer">
                      <span className="account_dropdown_span">
                        <RiContactsLine />
                      </span>
                      <h4 className="account_dropdown_heading">
                        Manage My Account
                      </h4>
                    </div>
                    <div className="dropdown_item flex items-center gap-4 group cursor-pointer">
                      <span className="account_dropdown_span">
                        <FiShoppingBag />
                      </span>
                      <h4 className="account_dropdown_heading">my order</h4>
                    </div>
                    <div className="dropdown_item flex items-center gap-4 group cursor-pointer">
                      <span className="account_dropdown_span">
                        <RxCrossCircled />
                      </span>
                      <h4 className="account_dropdown_heading">
                        my collections
                      </h4>
                    </div>
                    <div className="dropdown_item flex items-center gap-4 group cursor-pointer">
                      <span className="account_dropdown_span">
                        <IoIosStarOutline />
                      </span>
                      <h4 className="account_dropdown_heading">my reviews</h4>
                    </div>
                    <div className="dropdown_item flex items-center gap-4 group cursor-pointer">
                      <span className="account_dropdown_span">
                        {" "}
                        <TbLogout2 />
                      </span>
                      <h4 className="account_dropdown_heading">logout</h4>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
