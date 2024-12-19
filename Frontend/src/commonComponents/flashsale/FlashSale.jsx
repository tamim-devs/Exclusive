import React from "react";
import ProductCommonLayout from "../ProductCommonLayout";
import ProductCard from "../ProductCard";

const FlashSale = () => {
  // const { data, error, isLoading } = useGetAllProductQuery();

  return (
    <>
      <div className="container">
        <div className="flex items-center flex-col  border-b-[2px] border-t-black_363738 mb-10">
          <ProductCommonLayout
            ProductCard={ProductCard}
            timeStamp={true}
            timeofOffer={2}
            isArrowsTrue={true}
            Heading="Todays"
            description="Flash Sale"
            //  partialItemShow = {4}
            // componentData = {data?.products}
            //  isLoading = {true}
          />
          <div className="pb-20 ">
            <button className="px-[48px] py-4 bg-black rounded text-md font-popins font-medium text-white_FFFFFF hover:opacity-75 cursor-pointer ">
              View All Products
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSale;
