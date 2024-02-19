import React, { useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo.png'
import { IoReorderThree } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [visible , setVisible] = useState(false);

  const handleClik = (vissibe) => {
    setVisible(!visible);
  }

  return (
    <div  className='bg-[#4608ad] border-b-black border-b-[1px]'>
        <nav className='navbar'>
        <div>
          <img src={logo} width={150} alt='' className='text-white'></img>
        </div>
        <div className=' flex max-sm:hidden gap-3'>
          <Link to={"/login"}>
            <button class="button-85" role="button">Login</button>
          </Link>
          <Link to={"/signup"}>
            <button class="button-85" role="button">Sign up</button>
          </Link>
        </div>

        <button onClick={() => handleClik(true)} className=' max-sm:flex hidden justify-center items-center '>
          <IoReorderThree className='text-3xl'/>
        </button>

        {
          visible === true && (
            <div className='absolute w-[40%] p-2 bg-richblack-5 h-screen z-10 top-0 right-0   visible'>
              <button onClick={() =>handleClik(true)} className=' max-sm:flex hidden justify-center items-center text-white '>
                <IoReorderThree className='text-3xl text-white'/>
              </button>
              <div className='flex flex-col gap-5 mt-5 '>
                <Link to={"/login"}>
                  <button className='py-1 px-2 border-solid border-[1px] border-richblack-900 rounded-md hover:bg-richblack-900 hover:text-richblack-5'>Login</button>
                </Link>
                <Link>
                  <button className='py-1 px-2 border-solid border-[1px] border-richblack-900 rounded-md'>Sign up</button>
                </Link>
              </div>
            </div>
          )
        }

      </nav>
      
    </div>
  )
}

export default Navbar
