import React, { useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import { IoReorderThree } from "react-icons/io5";

const Navbar = () => {
  const [visible , setVisible] = useState(false);

  const handleClik = (vissibe) => {
    setVisible(!visible);
  }

  return (
    <div onClick={() =>handleClik(true)} className=''>
        <nav className='navbar'>
        <div>
          <img src={logo} width={150} alt=''></img>
        </div>
        <div className=' flex max-sm:hidden gap-3'>
          <button className='button1'>
            <span>Sign up</span>
          </button>
          <button className='button1'>
            <span>Login</span>
          </button>
        </div>

        <button onClick={() => handleClik(true)} className=' max-sm:flex hidden justify-center items-center '>
          <IoReorderThree className='text-3xl'/>
        </button>

        {
          visible === true && (
            <div className='absolute w-[40%] p-2 bg-richblack-5 h-screen z-10 top-0 right-0   visible'>
              <button onClick={() =>handleClik(true)} className=' max-sm:flex hidden justify-center items-center '>
                <IoReorderThree className='text-3xl'/>
              </button>
              <div className='flex flex-col gap-5 mt-5 '>
                <button className='py-1 px-2 border-solid border-[1px] border-richblack-900 rounded-md hover:bg-richblack-900 hover:text-richblack-5'>Login</button>
                <button className='py-1 px-2 border-solid border-[1px] border-richblack-900 rounded-md'>Sign up</button>
              </div>
            </div>
          )
        }

      </nav>
      
    </div>
  )
}

export default Navbar
