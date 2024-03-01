import React, { useState } from "react";
import { TEInput, TERipple } from "tw-elements-react";
import Navbar from "../common/Navbar";
import LoginImg from "../../assets/Login-amico.svg"
import { useForm } from 'react-hook-form';
import { FaRegEyeSlash , FaRegEye} from "react-icons/fa6";
import toast from "react-hot-toast";
import { login } from "../../services/auth";
import { useNavigate } from "react-router-dom";

const SignIn = () => {

  const [showPassword , setShowPassword] = useState(true);

  const passwordCheck = (cundition) => {
    setShowPassword(!cundition);

  }

  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    setValues,
    getValues,
    reset,
    formState: { errors },
  } = useForm();


  const onSubmit = async () => {

    const data = getValues();

    if(data.password.length < 5){
      toast.error("Password length must be gatter than 5");
      return;
    }
    
    reset();
    const response = await login(data);

    if(response){
      navigate("/");
    }

  }
  




  return (
    <>
      <Navbar/>
      < section className="h-full w-10/12 mx-auto min-h-screen max-sm:w-11/12 flex  items-center justify-center max-lm:w-9/12
     ">
      
        <div className="h-full w-full  ">
          {/* <!-- Left column container with background--> */}
          <div className="gap-6 flex p-10 max-sm:p-0  h-full  w-full max-lg:border-[1px] border-[#ff3b3b82] rounded-md 
          ">
            <div className="shrink-1 max-lg:hidden   mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src={LoginImg}
                className="w-[90%] max-lg:w-[80%] "
                alt="Sample image"
              />
              
            </div>

            {/* <!-- Right column container md:w-8/12 lg:w-5/12 xl:w-5/12 md:mb-0 --> */}
            <div className=" bg-richblack-300 p-5 max-sm:p-3 rounded-md max-lg:min-w-full w-[50%]">

              <form onSubmit={handleSubmit(onSubmit)}>
                {/* <!--Sign in section--> */}
                <div className="flex flex-row items-center justify-start lg:justify-start">
                  <p className="mb-0 mr-4 text-lg font-semibold text-black">Login with</p>

                  {/* <!-- Facebook button--> */}
                  <TERipple rippleColor="light">
                    <button
                      type="button"
                      className="mx-1 h-9 w-9 rounded-full bg-[#272727] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      {/* <!-- Facebook --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                      </svg>
                    </button>
                  </TERipple>

                  {/* <!-- Twitter button --> */}
                  <TERipple rippleColor="light">
                    <button
                      type="button"
                      className="mx-1 h-9 w-9 rounded-full bg-[#272727] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      {/* <!-- Twitter --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                      </svg>
                    </button>
                  </TERipple>

                  {/* <!-- Linkedin button --> */}
                  <TERipple rippleColor="light">
                    <button
                      type="button"
                      className="mx-1 h-9 w-9 rounded-full bg-[#272727] uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      {/* <!-- Linkedin --> */}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="mx-auto h-3.5 w-3.5"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z" />
                      </svg>
                    </button>
                  </TERipple>
                </div>

                {/* <!-- Separator between social media sign in and email/password sign in --> */}
                <div className="my-4 flex items-center before:mt-0.5 before:flex-1 before:border-t before:border-neutral-300 after:mt-0.5 after:flex-1 after:border-t after:border-neutral-300 border-t-black">
                  <p className="mx-4 mb-0 text-center font-semibold dark:text-white">
                    Or
                  </p>
                </div>

                {/* <!-- Email input --> */}
                <div className="flex flex-col gap-4">
                  <div>
                    <input
                      type="email"
                      id="email"
                      {...register('email', { required: true })}
                      className="bg-[#272727] px-5 py-3 w-full text-white rounded-md"
                      placeholder="Enter you email"
                    />
                    {
                      errors?.email && (
                        <p className="text-[#d62929]">please enter your email</p>
                      )
                    }
                  </div>

                  
                  {/* <!--Password input--> */}
                  <div className="relative">
                      <input
                        type={showPassword ? "password" : "text"}
                        id="password"
                        {...register('password', { required: true })}
                        className="bg-[#272727] px-5 py-3 w-full text-white rounded-md"
                        placeholder="Enter you password"
                      />
                      <span onClick={() => setShowPassword( (prev) => !prev)} className="absolute top-3 right-4">
                        {
                          showPassword ? (<FaRegEyeSlash className="text-richblack-100 text-xl"/>) : (<FaRegEye className="text-richblack-100 text-xl"/>)
                        }
                      </span>
                      {
                        errors?.password && (
                          <p className="text-[#d62929]">please enter your password</p>
                        )
                    }
                  </div>
                  
                </div>
 
                <div className="mb-6 flex items-center justify-between mt-6">
                  {/* <!--Forgot password link--> */}
                  <a href="" className="text-base font-semibold text-black">Forgot password?</a>
                </div>

                {/* <!-- Login button --> */}
                <div className="text-center lg:text-left">
                  <TERipple rippleColor="light">
                    <button
                      type="submit"
                      className="inline-block rounded bg-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    >
                      Login
                    </button>
                  </TERipple>

                  {/* <!-- Register link --> */}
                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold  text-black">
                    Don't have an account?{"   "}
                    <a
                      href="/signup"
                      className=" text-[#db3636] transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700"
                    >
                      Register
                    </a>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default SignIn
