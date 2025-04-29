import React from "react";
import ProductCommonLayouts from "../../common/commonComponet/ProductCommonLayouts";
import ProductCart from '../../common/commonComponet/ProductCart'
import { useGetExploreProductQuery } from '../../../features/Api/exclusiveApi'
const ExploreProduct = () => {
    const { data, error, isLoading } = useGetExploreProductQuery()
    const exploreProductMap = data?.data?.map((item)=>{
      return item?.product
    })
    // console.log(data?.data?.)
  return (
    <section>
      <div className="container">
        <div className="flex flex-col items-center">
          <ProductCommonLayouts
            ProductCart={ProductCart}
            heading={"Our Products"}
            description={"Explore Our Products"}
            isArrow={true}
            partialItemShow={4}
            componentData={exploreProductMap}
            isLoading={isLoading}
            rows={2}
          />
          <div className="pb-20">
            <button className="common_btn">View All Products</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreProduct;
