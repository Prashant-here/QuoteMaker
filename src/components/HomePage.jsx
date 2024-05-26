import React from 'react'
import HomeImage from "../assets/background_bg.jpg"
import Logo from "../assets/logo_img.png"
import About from './About'
import {motion} from 'framer-motion'
import Example from './Example'
import Footer from './Footer'
import Header from './Header'
const HomePage = () => {
  return (
    <>
        <div className="bg-cover h-[80vh] w-[100%]" style={{ backgroundImage:`url(${HomeImage})`}} >
        <Header></Header>
          <div className="w-[100%] h-[80vh] flex font-extrabold justify-center items-center font-lato "> 
            <h1 className="text-[60px] text-center text-[#182f60]">Create Inspiring Quotes <br></br> in Seconds with QuotesMake</h1>
          </div>
        </div>
        <About></About>
    <Example></Example>
    <Footer></Footer>
    </>
  )
}

export default HomePage