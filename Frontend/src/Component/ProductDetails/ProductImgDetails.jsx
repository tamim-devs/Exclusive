import React, { useState } from "react";
import controller from "../../assets/joy.png";
import "react-inner-image-zoom/lib/InnerImageZoom/styles.css";
import InnerImageZoom from "react-inner-image-zoom";
const ProductImgDetails = ({ image }) => {
  let [initialImg, setInitialImg] = useState(
    image[0] ||
      "https://images.unsplash.com/photo-1741097574041-d70d3fe6a3ab?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  );
  return (
    <div className="flex items-center justify-between overflow-hidden">
      {/* small images part */}
      <div className="small_img w-[20%] h-full flex flex-col  gap-8 ">
        {image?.map((singleImg,index) => (
          <div className="child1 w-[170px] h-[138px] py-3 px-6 bg-secondary-f5f flex items-start justify-center rounded cursor-pointer" key={index}>
            <img
              src={singleImg}
              alt="not found"
              className="h-full w-full object-fill "
              onClick={() => setInitialImg(singleImg)}
            />
          </div>
        ))}
        
        <div className="child1 w-[170px] h-[138px] py-3 px-6 bg-secondary-f5f flex items-start justify-center rounded cursor-pointer">
          <img
            src={
              "https://images.unsplash.com/photo-1741097574041-d70d3fe6a3ab?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            }
            alt="not found"
            className="h-full w-full object-fill"
            onClick={() =>
              setInitialImg(
                "https://images.unsplash.com/photo-1741097574041-d70d3fe6a3ab?q=80&w=1528&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              )
            }
          />
        </div>
      </div>
      {/* big img part */}
      <div className="big_img w-[74%] h-full bg-secondary-f5f px-7 pt-[130px]  pb-[90px]   flex items-center justify-center rounded">
        <div className="w-[446px] h-[460px]  overflow-hidden ">
          <InnerImageZoom
            src={initialImg}
            className="h-full w-full object-fill"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductImgDetails;
