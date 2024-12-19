import React from 'react'
import ProductCommonLayout from '../../../commonComponents/ProductCommonLayout'
import CategoryItem from '../../../commonComponents/categoryItem/CategoryItem.jsx'


const Category = () => {
  return (
    <div>
      <ProductCommonLayout heading={"category"} description={'Browse by Category'}
      isArrowsTrue= {'true'}
      ProductCard={CategoryItem}
      partialItemShow= {8}
      />
    </div>
  )
}

export default Category