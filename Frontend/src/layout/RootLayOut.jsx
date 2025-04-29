import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './footer/Footer'
import Header from './header/Index'
import Navbar from './navbar/Index'

const RootLayOut = () => {
  return (
    <div>
        <div className='flex flex-col'>
            <Header/>
            <Navbar/>
        </div>
            <Outlet/>
        <Footer/>
    </div>
  )
}

export default RootLayOut