import React, { useState } from "react";
import { useGetAllProductQuery } from "../../features/Api/exclusiveApi";
import ProductCart from "../common/commonComponet/ProductCart";
import ShopByCategorySkeleton from "../helpers/ShopByCategorySkeleton";
const ProductRight = () => {
  const { data, error, isLoading } = useGetAllProductQuery();
  const productMap = data?.data?.map((item)=>{
    return item
  })
  // console.log(data)
  const [page, setpage] = useState(1);
  const [pagePerShow, setpagePerShow] = useState(9);
  let myLength = productMap?.length;
  let pageLength = Math.ceil(myLength / 9);
  
  let handlePaging = (index) => {
    if (index > 0 && index <= pageLength) {
      setpage(index);
    }
  };
  return (
    <div className="w-[70%] pt-10">
      {/* head part */}
      <div className="show flex items-center justify-end gap-2">
        <h3 className="font-poppins font-normal text-base text-text2-black leading-6 capitalize ">
          show :
        </h3>
        <select
          name=""
          id=""
          className="py-1 px-5 bg-transparent border-[1.5px] border-solid border-text-7d8 rounded-sm font-poppins font-normal text-base text-text2-black leading-6"
        >
          <option value="9">9</option>
          <option value="18">18</option>
          <option value="36">36</option>
        </select>
      </div>
      {/* body part */}
      {isLoading ? (
        <ShopByCategorySkeleton />
      ) : (
        <div className="body flex flex-wrap gap-7 items-center justify-between">
          {productMap
            ?.slice(page * 9 - 9, page * pagePerShow)
            .map((item) => (
              <div className="flex">
                <ProductCart itemData={item} />
              </div>
            ))}
          {/* flowbite pagination */}
        </div>
      )}
      {/* //pagination */}
      <div className="flex items-start gap-2 ">
        <div className="mt-11 ">
          <nav aria-label="Page navigation example">
            <ul className="inline-flex -space-x-px text-xl h-10 ">
              <li>
                <span
                  className="flex items-center justify-center px-4 h-10 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                  onClick={()=> handlePaging(page - 1)} 
                >
                  Previous
                </span>
              </li>
              {[...new Array(pageLength || 5)].map((_, index) => (
                <li>
                  <span
                    className={
                      index + 1 == page
                        ? "flex items-center justify-center px-5 h-10 bg-text2-black leading-[24px] bg-red-600 text-primary-fff cursor-pointer"
                        : "flex items-center justify-center px-5 h-10 bg-text2-black leading-[24px] text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                    }
                    onClick={() => handlePaging(index + 1)}
                  >
                    {index + 1}
                  </span>
                </li>
              ))}
              <li>
                <span
                  className="flex items-center justify-center px-4 h-10 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white cursor-pointer"
                  onClick={() => handlePaging(page + 1)}
                >
                  Next
                </span>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  );
};

export default ProductRight;
