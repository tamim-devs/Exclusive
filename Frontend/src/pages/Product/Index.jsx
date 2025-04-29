import React from "react";
import ProductLeft from "../../component/ProductPage/ProductLeft";
import { useGetCategoryListQuery, useGetSubCategoryQuery } from "../../features/Api/exclusiveApi";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import ProductRight from "../../component/ProductPage/ProductRight";

const ProductPage = () => {
  const { data,isLoading,error} = useGetCategoryListQuery();
  const categoryList = data?.data.map((item)=>{
    return item
  })
  const subCategory = useGetSubCategoryQuery()
  return (
    <div className="mb-[104px]">
      <div className="container">
        <div className="mt-20 ">
          <BreadCrumb />
        </div>
        <div className="flex justify-between gap-[97px]">
          <ProductLeft
            categoryData={categoryList}
            isLoading={isLoading}
            error={error}
          />
          <ProductRight/>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
