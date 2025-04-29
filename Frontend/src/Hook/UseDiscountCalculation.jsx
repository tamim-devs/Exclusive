import React from 'react'

const UseDiscountCalculation = (originalPrice, discountPercentage) => {
    const discountAmount = (originalPrice * discountPercentage) / 100;
    const discountPrice = originalPrice - discountAmount;
  return discountPrice;
}

export default UseDiscountCalculation