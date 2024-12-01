import React from 'react'
import HeroImage from '../assets/hero-image.png'

const Hero = () => {
  return (
    <div className='bg-black text-white text-center py-16'>
        <img src={HeroImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Ramesh Yadav</span>
            , Front-End Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            I specialize in building modern and responsive web applications.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            <a href="https://drive.google.com/file/d/15l0XucLbbsveJ5hRETkB8AWK0ybL9Vpv/view?usp=drive_link">
            <button
            className='bg-gradient-to-r from-green-500 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Resume</button></a>
        </div>

    </div>
  )
}

export default Hero;