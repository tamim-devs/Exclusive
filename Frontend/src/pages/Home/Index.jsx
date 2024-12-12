import React from 'react'
import Header from '../../components/RootLayout/header/Index'
import Navbar from '../../components/RootLayout/navbar/Navbar'
import Banner from '../../components/homePageComponents/banner/Banner'
import FlashSale from '../../commonComponents/flashsale/FlashSale'

const Homepage = () => {
  return (
    <>
      <Header/>
      <Navbar/>
      <Banner/>  
      <FlashSale/>    
    </>
  )
}

export default Homepage