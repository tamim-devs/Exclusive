import React, { useState } from 'react'
import ProductCommonLayouts from '../../common/commonComponet/ProductCommonLayouts'
import CategoryCart from '../../common/commonComponet/CategoryCart'
import { IoGameControllerOutline } from 'react-icons/io5';
import { CiCamera, CiHeadphones, CiMobile4 } from 'react-icons/ci';
import { BsSmartwatch } from 'react-icons/bs';
import { RiComputerLine } from 'react-icons/ri';
import { useGetCategoryQuery } from '../../../features/Api/exclusiveApi';

const categoryBrowse = [
  {
    id: 1,
    name: "mobile",
    img: <CiMobile4 />,
  },
  {
    id: 2,
    name: "computers",
    img: <RiComputerLine />,
  },
  {
    id: 3,
    name: "smartWatch",
    img: <BsSmartwatch />,
  },
  {
    id: 4,
    name: "camera",
    img: <CiCamera />,
  },
  {
    id: 5,
    name: "headphone",
    img: <CiHeadphones />,
  },
  {
    id: 6,
    name: "gaming",
    img: <IoGameControllerOutline />,
  },
];
const Category = () => {
  const {data , isLoading, error} = useGetCategoryQuery()
  const categoryData = data?.data.map((item)=>{
    return item
  })
  return (
    <div className='mt-20'>
        <ProductCommonLayouts 
            ProductCart={CategoryCart}
            isArrow = {true}
            partialItemShow={6}
            heading={"Categories"}
            description={"Browse By Category"}
            componentData={categoryData}
            autoPlay={true}
        />
    </div>
  )
}

export default Category