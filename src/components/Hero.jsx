import React from 'react'

const Hero = ({title,desc,cta}) => {
  return ( 
    <div className=' w-[inherit] flex flex-col items-center justify-center h-screen bg-gradient-to-r from-blue-500 to-purple-500 text-white'>
        
      <h1 className='text-6xl w-[50%] '>{title}</h1>
        <p className=' text-2xl w-4xl'>{desc}</p>
        <button className='bg-amber-500 rounded-4xl p-4 w-35'>{cta}</button>
    </div>
  )
}

export default Hero
