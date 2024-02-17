import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {

    const data = {
        "useful_links": [
          {
            "text": "About Us",
            "url": "https://www.creative-tim.com/presentation?ref=njs-profile"
          },
          {
            "text": "Blog",
            "url": "https://blog.creative-tim.com?ref=njs-profile"
          },
          {
            "text": "Github",
            "url": "https://www.github.com/creativetimofficial?ref=njs-profile"
          },
          {
            "text": "Linked in",
            "url": "https://www.creative-tim.com/bootstrap-themes/free?ref=njs-profile"
          }
        ],
        "other_resources": [
          {
            "text": "MIT License",
            "url": "https://github.com/creativetimofficial/notus-js/blob/main/LICENSE.md?ref=njs-profile"
          },
          {
            "text": "Terms & Conditions",
            "url": "https://creative-tim.com/terms?ref=njs-profile"
          },
          {
            "text": "Privacy Policy",
            "url": "https://creative-tim.com/privacy?ref=njs-profile"
          },
          {
            "text": "Contact Us",
            "url": "https://creative-tim.com/contact-us?ref=njs-profile"
          }
        ]
    }

    const icons = [
        {
            icon:FaFacebook,
            iconUrl:"faceBook.com",
            color:"text-blue-700"
        },
        {
            icon:BsTwitterX,
            iconUrl:"faceBook.com",
            color:"text-richblack-900"
        },
        {
            icon:FaLinkedin,
            iconUrl:"faceBook.com",
            color:"text-blue-700"
        },
        {
            icon:FaFacebook,
            iconUrl:"faceBook.com",
            color:"text-blue-700"
        }
    ]

  return (
    <div>
        <footer className="relative bg-blueGray-200 pt-8 pb-6 bg-richblack-900 text-white font-thin">
            <div className="container mx-auto px-4">
                <div className="flex flex-wrap text-left lg:text-left">
                <div className="w-full lg:w-6/12 px-4">
                    <h4 className="text-3xl fonat-semibold text-blueGray-700">Let's keep in touch!</h4>
                    <h5 className="text-lg mt-0 mb-2 text-blueGray-600">
                        Find us on any of these platforms, we respond 1-2 business days.
                    </h5>
                    <div className="mt-6 lg:mb-0 mb-6 flex gap-3 flex-wrap ">
                       {
                        icons.map( (element,index) => (
                            <button key={index} className='bg-white p-[6px] rounded-full '>
                                <a href={element.iconUrl}>  <element.icon className={`text-2xl ${element.color}`}/> </a>
                            </button>
                        ))
                       }
                    </div>
                </div>
                <div className="w-full lg:w-6/12 px-4">
                    <div className="flex flex-wrap items-top mb-6">
                    <div className="w-full lg:w-4/12 px-4 ml-auto">
                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Useful Links</span>
                        <ul className="list-unstyled">
                           {
                            data.useful_links.map((element,index) => (
                                <li key={index}>
                                    <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href={element.url}>{element.text}</a>
                                </li>
                            ))
                           }
                        </ul>
                    </div>
                    <div className="w-full lg:w-4/12 px-4">
                        <span className="block uppercase text-blueGray-500 text-sm font-semibold mb-2">Other Resources</span>
                        <ul className="list-unstyled">
                            {
                                data.other_resources.map((element,index) => (
                                    <li key={index}>
                                        <a className="text-blueGray-600 hover:text-blueGray-800 font-semibold block pb-2 text-sm" href={element.url}>{element.text}</a>
                                   </li>
                                ))
                            }
                            
                        </ul>
                    </div>
                    </div>
                </div>
                </div>
                <hr className="my-6 border-blueGray-300"/>
                <div className="flex flex-wrap items-center md:justify-between justify-center">
                <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                    <div className="text-sm text-blueGray-500 font-semibold py-1">
                    Copyright © <span id="get-current-year">2024</span> <a href="https://www.creative-tim.com/product/notus-js" className="text-blueGray-500 hover:text-gray-800" target="_blank"> reelVartex </a>
                    <a href="https://www.creative-tim.com?ref=njs-profile" className="text-blueGray-500 hover:text-blueGray-800"></a>.
                    </div>
                </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer
