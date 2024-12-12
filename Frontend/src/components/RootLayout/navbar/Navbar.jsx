import React, { useState } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CiHeart, CiSearch } from 'react-icons/ci'
import { FaUser } from 'react-icons/fa'
import { ImCancelCircle } from 'react-icons/im'
import { IoMdStarOutline } from 'react-icons/io'
import { LuShoppingBag, LuUser } from 'react-icons/lu'
import { RiLogoutCircleLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const navItem = [
    {
    id: 1,
    item: "Home",
  },
  {
    id: 2,
    item: "Contact",
  },
  {
    id: 3,
    item: "About",
  },
  {
    id: 4,
    item: "Sign Up",
  }, 
]

  const [account, setAccount] = useState(false);

  const handleAccount = () => {
    setAccount(!account);
  };


  return (
    <>
    <div className='pt-10 pb-4 border-b-[1.5px] border-b-text_black7D8184'>
    <div className='container'>
         <div className='flex items-center justify-between'>
         <div>
            <h1 className='text-2xl font-bold font-inter text-text_black000000'>Exclusive</h1>
          </div>
          <div>

          </div>
          <div>
            <ul className='flex items-center gap-x-12'>
              {navItem?.map((nav)=>(
                 <li key={nav.id} className='menuUnderLine'>
                 <NavLink to={'/${nav.item}'} className={({ isActive, isPending})=>
                  isPending
                 ? "text-black text-base font-normal font-popins lead"
                 :isActive 
                 ? "bg-red-500 text-base  font-normal font-popins"
                 : "text-black text-base  font-normal font-popins"
                 }
                 >
                    {nav.item}
                 </NavLink>
               </li>
              ))}
             
            </ul>
          </div>
          <div className='basis-1/3 flex items-center gap-x-2 '>
             <div className='flex items-center'>
              <div className='py-2 bg-white_F5F5F5 px-3 flex items-center rounded-md'>
                  <input type="text" className='py-2 bg-white_F5F5F5 px-8   placeholder:text-sm rounded-md' placeholder='What are you looking for?'
                  /> 
             <CiSearch className='w-6 h-6 cursor-pointer' />
              </div>
             
             </div>
             <div className='flex items-center gap-x-6  '>
              <span  className='text-3xl text-text_black000000  cursor-pointer '>
                <CiHeart />
              </span>
              <span className='text-2xl text-text_black000000 amount cursor-pointer'>
                <BsCart3 className='' />
              </span>
              <span  className='text-2xl text-text_whiteFAFAFA rounded-full bg-redDB4444 p-2   
              cursor-pointer relative ' onClick={handleAccount}>
               <FaUser />
               {account &&(
               <div className='absolute -right-0 top-10 z-30 bg-[rgba(0,0,0,0.68)]   flex flex-col gap-y-4  py-7 w-64 '> 
                  <div className='flex flex-row items-center  hover:bg-white_F5F5F5 hover:py-3 gap-5 transition-all hover:text-text_black000000 text-white_F5F5F5 pl-5 cursor-pointer'>
                    <span className='text-3xl'> <LuUser /></span>
                    <h3 className='text-xl font-normal font-popins'>Manage My Account</h3>
                  </div>
                  <div className='flex flex-row items-center  hover:bg-white_F5F5F5 hover:py-3 gap-5 transition-all hover:text-text_black000000 text-white_F5F5F5 pl-5 cursor-pointer'>
                    <span className='text-3xl'>  <LuShoppingBag /></span>
                    <h3 className='text-xl font-normal font-popins'>My Order</h3>
                  </div>
                  <div className='flex flex-row items-center  hover:bg-white_F5F5F5 hover:py-3 gap-5 transition-all hover:text-text_black000000 text-white_F5F5F5 pl-5 cursor-pointer'>
                    <span className='text-3xl'>  <ImCancelCircle /></span>
                    <h3 className='text-xl font-normal font-popins'> My Cancellations</h3>
                  </div>
                  <div className='flex flex-row items-center  hover:bg-white_F5F5F5 hover:py-3 gap-5 transition-all hover:text-text_black000000 text-white_F5F5F5 pl-5 cursor-pointer'>
                    <span className='text-3xl'>    <IoMdStarOutline  /></span>
                    <h3 className='text-xl font-normal font-popins'> My Reviews </h3>
                  </div>
                  <div className='flex flex-row items-center  hover:bg-white_F5F5F5 hover:py-3 gap-5 transition-all hover:text-text_black000000 text-white_F5F5F5 pl-5 cursor-pointer'>
                    <span className='text-3xl'> <RiLogoutCircleLine /> </span>
                    <h3 className="text-xl font-normal font-popins">Logout</h3>
                  </div>
                  
                
    
              </div>
               )}
              </span>
              
             </div>
          </div>
         </div>
      </div>
    </div>
    </>
  )
}

export default Navbar