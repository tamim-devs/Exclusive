import React from "react";
import BreadCrumb from "../BreadCrumb/BreadCrumb";
import Slider from "react-slick";
import { useGetAllProductQuery } from "../../features/Api/exclusiveApi";
import ProductCart from "../common/commonComponet/ProductCart";
import Heading from "../common/commonComponet/Heading";
import ProductSkeleton from "../helpers/ProductSkeleton";

const WishListComponent = () => {
  const { data, isLoading, error } = useGetAllProductQuery();
  let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 3,
  };
  return (
    <div className="container">
      <div className="my-10">
        <BreadCrumb />
      </div>
      <div className="head flex items-center justify-between mb-[60px]">
        <p className="text-black2626 font-poppins text-xl font-normal leading-7 capitalize">
          wishlist (4)
        </p>
        <button className="common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12">
          move all to bag
        </button>
      </div>
      {/* Wishlist items */}
      <div className="mb-[78px] flex flex-col">
        <Slider {...settings}>
          {isLoading
            ? [...new Array(5)]?.map((item, index) => (
                <div className="pr-4" key={index}>
                  <ProductSkeleton />
                </div>
              ))
            : data?.data?.map((item) => (
                <div className="pr-4" key={item._id}>
                  <ProductCart itemData={item} />
                </div>
              ))}
        </Slider>
      </div>
      {/* Wishlist items */}

      {/* Just for you */}
      <div className="flex items-center justify-between mb-16">
        <Heading title="just for you" description={false} />
        <div className="common_btn text-text2-black bg-transparent border-text-7d8 hover:text-primary-fff hover:bg-button-red hover:border-button-red py-4 px-12">
          see all
        </div>
      </div>
      <div className="flex flex-col mb-36">
        <Slider {...settings}>
          {isLoading
            ? [...new Array(5)]?.map((item, index) => (
                <div className="pr-4" key={index}>
                  <ProductSkeleton />
                </div>
              ))
            : data?.data?.map((item) => (
                <div className="pr-4" key={item._id}>
                  <ProductCart itemData={item} />
                </div>
              ))}
        </Slider>
      </div>
      {/* Just for you */}
    </div>
  );
};

export default WishListComponent;
