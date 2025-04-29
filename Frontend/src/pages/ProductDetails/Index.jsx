import React from "react";
import BreadCrumb from "../../component/BreadCrumb/BreadCrumb";
import ProductImgDetails from "../../component/ProductDetails/ProductImgDetails";
import { useGetProductByCategoryQuery } from "../../features/Api/productApi";
import { useGetSingleProductDetailsQuery,useGetAllBestSellingQuery } from "../../features/Api/exclusiveApi";
import ProductContents from "../../component/ProductDetails/ProductContents";
import ProductsDetailsSkeleton from "../../component/helpers/ProductsDetailsSkeleton";
import { useParams } from "react-router-dom";
import Heading from "../../component/common/commonComponet/Heading";
import ProductCart from "../../component/common/commonComponet/ProductCart";
// import ProductSkeleton from "../../component/helpers/ProductSkeleton";
import Slider from "react-slick";
const ProductDetails = () => {
  const params = useParams();
  const { data,isLoading,error } = useGetSingleProductDetailsQuery(
    params?.id
  );
  // console.log(data?.data);
  const relatedCategory = useGetAllBestSellingQuery()
  const mapRelatedCategory = relatedCategory?.data?.data;
  const nowMap = mapRelatedCategory?.map((item)=>{
    return item?.product
  })
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <div className="pt-20 pb-36">
      <div className="container">
        {isLoading ? (
          <ProductsDetailsSkeleton />
        ) : (
          <>
            <div className="pb-20">
              <BreadCrumb />
            </div>
            <div className="productDetails_main flex  justify-between  ">
              <div className="img_part w-[62%] h-full">
                <ProductImgDetails image={data?.data?.image} />
              </div>
              <div className="content_part  w-[32%] h-full">
                <ProductContents data={data?.data && data?.data} />
              </div>
            </div>
          </>
        )}
        {/* bottom part */}
        <div className="main_bottom mt-36">
          <Heading title="related item" description={false} />
          <div className="cursor-grab">
            <Slider {...settings}>
              {nowMap?.map((item, index) => (
                <div className="pr-7" key={index}>
                  <ProductCart itemData={item} />
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
