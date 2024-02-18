import React from 'react'
import Navbar from '../common/Navbar'
import HeroSection from '../Homepage/HeroSection'
import Steps from './Steps';
import Testimoni from './Testimoni';
import Footer from '../Homepage/Footer';

const HomePage = () => {
  return (
    <div className="App bg-black">
      <div className='bg-[#4608ad]'>
        <Navbar/>
      </div>
      <div>
        <HeroSection/>
      </div>
      <div className='w-full steps-bg'>
        <Steps/>
      </div>
      <div className='w-full testimoni'>
       <Testimoni/>
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default HomePage
