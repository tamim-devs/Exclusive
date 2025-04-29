import React from "react";
import ProductCart from "../../common/commonComponet/ProductCart";
import ProductCommonLayouts from "../../common/commonComponet/ProductCommonLayouts";
import { useGetAllBestSellingQuery } from "../../../features/Api/exclusiveApi";
const BestSelling = () => {
    const {data,error,isLoading} = useGetAllBestSellingQuery()
    const bestSellingData = data?.data?.map((item)=>{
    // console.log(item.product)
    return item.product
  })
  return (
    <section className="mt-[70px]">
      <div className="container">
        <div className="border-b-[1px] border-b-text-7d8 mb-10 ">
          <ProductCommonLayouts
            ProductCart={ProductCart}
            heading={"this month"}
            description={"best selling products"}
            partialItemShow={4}
            isViewBtn = {true}
            componentData={bestSellingData}
            isLoading={isLoading}
            autoPlay={true}
          />
        </div>
      </div>
    </section>
  );
};

export default BestSelling;
