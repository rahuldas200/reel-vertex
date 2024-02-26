import React, { useState } from 'react'
import './Nav.css'
import logo from '../../assets/logo.gif'
import { Link } from 'react-router-dom';
import { TiThMenu } from "react-icons/ti";
import { RxCross2 } from "react-icons/rx";

const Navbar = () => {
  const [visible , setVisible] = useState(false);

  const handleToggle = (vissibe) => {
    setVisible(!visible);
  }

  return (
    <div className='bg-[#4608ad] border-b-black border-b-[1px]'>
    <nav className='navbar'>
      <Link to={"/"}>
        <div>
          <img src={logo}  width={150} alt='' className='text-white'></img>
        </div>
      </Link>
      <div className='flex max-sm:hidden gap-3'>
        <Link to={"/login"}>
          <button className="button-85" role="button">Login</button>
        </Link>
        <Link to={"/signup"}>
          <button className="button-85" role="button">Sign up</button>
        </Link>
      </div>

      <button onClick={handleToggle} className='max-sm:flex hidden justify-center items-center'>
        <TiThMenu className='text-2xl text-richblack-100'/>
      </button>

      {
        visible && (
          <div className='fixed inset-0 flex items-center justify-center  bg-[#000000c4] z-50'>
            <div className='bg-richblack-200 p-4 rounded-lg'>
              <button onClick={handleToggle} className='absolute top-0 left-0 m-4 text-white'>
                <RxCross2 className='text-2xl text-red-500'/>
              </button>
              <div className='flex flex-col gap-5 mt-5 min-h-36 min-w-40 justify-center '>
                <Link to={"/login"}>
                  <button className='py-2 px-2 w-full text-richblack-50 bg-black text-lg font-semibold border-solid border-[2px] border-[#000000cf] rounded-md hover:bg-richblack-900 hover:text-richblack-5'>Login</button>
                </Link>
                <Link to={"/signup"}>
                  <button className='py-2 px-2 w-full text-richblack-50 border-solid bg-black text-lg  border-[2px] border-[#080707cf]  rounded-md'>Sign up</button>
                </Link>
              </div>
            </div>
          </div>
        )
      }
    </nav>
  </div>
  )
}

export default Navbar
