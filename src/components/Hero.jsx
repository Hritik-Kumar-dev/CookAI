import React from 'react'
import '../App.css'
const Hero = ({title,title2,desc,cta}) => {
  return ( 
    <div className=' w-full flex flex-col items-center justify-center h-screen bg-gradient-to-r from-black to-purple-900 text-white'>
        
      <h1 className='text-9xl w-[80%] cookie-regular  '>{title}</h1>
      <h1 className='text-9xl w-[80%] cookie-regular '>{title2}</h1>
        <p className=' text-2xl w-4xl cookie-regular'>{desc}</p>
        <button className='bg-amber-500 rounded-4xl p-4 w-35 '>{cta}</button>
    </div>
  )
}

export default Hero
