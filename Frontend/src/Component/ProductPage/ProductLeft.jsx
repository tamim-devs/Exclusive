import React, { useState } from "react";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

const ProductLeft = ({ categoryData, isLoading, error }) => {
  // console.log(categoryData)
  const [dropdown, setDropdown] = useState(null);
  let handleDropdown = (id) => {
    setDropdown((prev) => {
      return prev === id ? null : id;
    });
  };
  return (
    <div className="w-[20%] pt-10 ">
      {/* hero section side category */}
      <div className="w-full flex flex-col gap-4 ">
        <h3 className="font-poppins text-xl font-bold text-black2626">
          Shop by Category
        </h3>
        {isLoading
          ? [...new Array(10)]?.map((item, index) => (
              <>
                <div
                  key={index}
                  className="animate-pulse flex items-center justify-between mr-4 cursor-pointer"
                >
                  <div className="h-7 w-full bg-gray-300 rounded"></div>
                </div>
              </>
            ))
          : categoryData?.map((item) => (
              <>
                <div
                  className=" group transition-all ease-linear duration-200 flex flex-col mr-4 cursor-pointer"
                  key={item._id}
                >
                  <ul
                    className="text-lg capitalize font-normal font-poppins leading-6 text-text2-black pl-0 group-hover:text-text-7d8 group-hover:pl-2 transition-all ease-linear duration-200 w-full py-2 flex items-center justify-between"
                    onClick={() => handleDropdown(item._id)}
                  >
                    <li>{item?.name}</li>
                    {dropdown == item._id ? (
                      <FaChevronDown />
                    ) : (
                      item?.subCategory.length > 0 && (
                        <span>
                          <FaChevronRight />
                        </span>
                      )
                    )}
                  </ul>
                  <div
                    className={`${dropdown == item._id ? "block" : "hidden"}`}
                  >
                    {item?.subCategory &&
                      item?.subCategory?.map((subItem) => (
                        <li className="text-text2-black text-lg hover:text-slate-600 capitalize font-normal font-poppins leading-6 mt-[10px]">{subItem?.name}</li>
                      ))}
                  </div>
                </div>
              </>
            ))}
        {/* //shpo by color part */}
        <div className="color">
          <h3 className="font-poppins text-xl font-bold text-black2626 capitalize mt-10">
            shop by color
          </h3>
          <div className="flex flex-col gap-4 mt-5">
            <div className="colors flex gap-3 items-center pl-0 hover:pl-4 transition-all ease-linear duration-200 cursor-pointer">
              <span className="icon h-3 w-3 rounded-full bg-black"></span>
              <div className="text">
                <span className="text-text-7d8 font-poppins text-base font-normal leading-7 capitalize">
                  colors 1
                </span>
              </div>
            </div>
            <div className="colors flex gap-3 items-center pl-0 hover:pl-4 transition-all ease-linear duration-200 cursor-pointer">
              <span className="icon h-3 w-3 rounded-full bg-red-500"></span>
              <div className="text">
                <span className="text-text-7d8 font-poppins text-base font-normal leading-7 capitalize">
                  colors 2
                </span>
              </div>
            </div>
            <div className="colors flex gap-3 items-center pl-0 hover:pl-4 transition-all ease-linear duration-200 cursor-pointer">
              <span className="icon h-3 w-3 rounded-full bg-button-green"></span>
              <div className="text">
                <span className="text-text-7d8 font-poppins text-base font-normal leading-7 capitalize">
                  colors 3
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductLeft;
