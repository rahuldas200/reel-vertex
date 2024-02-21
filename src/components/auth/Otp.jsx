import React, { useState } from 'react'
import OtpInput from 'react-otp-input';
import Navbar from '../common/Navbar';


const Otp = () => {

    const [otp , setOtp] = useState();

  return (
   <>
   <Navbar/>
    <div className='min-h-screen min-w-[100%] bg-[#262626] flex justify-center items-center'>   
        <div className='bg-richblack-200 p-10 rounded-md flex  flex-col'>
            <div>
                <h1 className='text-2xl text-richblack-800 text-center font-semibold mb-4'>Enter yor Otp</h1>
                    <OtpInput
                    value={otp}
                    onChange={setOtp}
                    numInputs={4}
                    renderSeparator={<span>-</span>}
                    renderInput={(props) => <input {...props} />}
                    inputStyle={{
                        border: "1px solid transparent",
                        borderRadius: "8px",
                        width: "54px",
                        height: "54px",
                        fontSize: "20px",
                        color: "#021f37",
                        fontWeight: "600",
                        caretColor: "blue",
                        gap:"10px",
                        }}
                    />
            </div>
            <div className='py-2 px-3 bg-black text-richblack-200 font-semibold mt-3 rounded-md'>
                <button className='w-full text-center '>Verify Email</button>
            </div>
        </div>
    </div>
   </>
  )
}

export default Otp
