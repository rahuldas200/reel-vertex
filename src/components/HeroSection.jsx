import React, { useState } from 'react'
import hero from '../assets/hero.jpg'
import '../components/hero.css'
import { IoSearch } from "react-icons/io5";
import { Typewriter } from 'react-simple-typewriter'
import { fetchReel } from '../services/fetchReel';

const HeroSection = () => {
    const [download_link , setDownload_link] = useState(null);

    console.log(download_link);

    const [formData, setFormData] = useState( {
        link:'',
    });

    const changeHandler = (event) => {
        setFormData( (preData) => (
            {
                ...preData,
                [event.target.name]:event.target.value
            }
        ))
    }

    const handleUplad  = async () =>{        
        try{
            const response  = await fetchReel(formData.link);
            console.log(response);
            setDownload_link(response.result[0]?.url);
        } catch(error){
            console.log(error);
        }
       
    }



  return (
    <div className='w-[100%] my-0 mx-auto relative h-[70%] overflow-hidden z-0'>
        <div className='max-w-11/12'>
            <img src={hero} className='w-full hero-image ' alt="" />  
        </div>
        <div className='absolute w-full top-0 left-0 h-full flex flex-col justify-center items-center '>
            <div className='flex flex-col items-center min-w-[40%] -mt-24 mb-10 mx-auto min-h-[50%] 
                hero-container p-10 max-sm:p-1 rounded-lg gap-8 max-sm:gap-2 max-sm:min-w-[80%] max-sm:max-w-[90%] max-sm:mt-10 max-sm:min-h-[90%]'>
                <div className='text-4xl font-bold text-richblack-5 max-sm:p-0'> <span className='typeWriter max-sm:text-base'>Download </span> 
                    <span className='typeWriter max-sm:text-base'>
                        <Typewriter
                            words={['instragram Video', 'instragram reel', 'instragram post']}
                            loop={Infinity}
                            cursor
                            cursorStyle='|'
                            typeSpeed={100}
                            deleteSpeed={50}
                            delaySpeed={1000}
                        />
                    </span>
                </div>

                <p className='text-center text-lg hero-p  text-richblack-5 max-sm:text-xs'>Save videos from instragarm in your device in simple and quick way. Free no registation required.</p>
                
                <div className='relative w-full flex flex-col items-center gap-3 mt-7 max-sm:mt-1'>
                    <label className='text-center text-lg text-richblack-5 hero-p max-sm:hidden' htmlFor="">Paste your link hear</label>
                    <div className='relative min-w-[90%] max-sm:min-w-[75%]'>
                        <input type="text"
                            name="link" 
                            value = {formData.link}
                            onChange={changeHandler}
                            placeholder='Paste your link here'
                            className='w-full bg-richblue-5 rounded-md text-richblack-900 text-base py-4 pl-10 pr-24 max-sm:py-2' 
                        />

                        <div className='absolute top-5 left-3 max-sm:top-3'>
                            <IoSearch className='text-lg text-blue-500'/>
                        </div>
                        <button onClick={() => handleUplad()} className='absolute right-3 top-[6px] bg-blue-300 py-2 px-5 max-sm:py-[2px] max-sm:px-2 max-sm:top-[6px] font-mono rounded-md ml-2'>
                                <span className='text-lg text-richblack-5 font-medium max-sm:text-sm'>Upload</span>
                        </button>
                       
                    </div>
                   
                        
                </div>

                {
                    download_link !== null && (
                        <button className='p-2 rounded-md bg-blue-400'>
                            <a href = {download_link}> Download </a>
                        </button>
                    )
                }
                
            </div>
           
        </div>

    </div>
  )
}

export default HeroSection
