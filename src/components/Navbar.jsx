import React from 'react'
import newlogo from '../assets/newlogo.png' // Assuming you have a logo.png in the assets folder
const Navbar = () => {
  return (
    <div className='w-[100%] mt-1 h-[65px] flex justify-between items-center p-2 shadow-lg'>
      <ul className='flex justify-between items-center w-full text-gray-700 font-semibold'>
        <li className='flex items-center  text-3xl'>
            <img src={newlogo} alt="logo" width={100} height={100} className='text-green' />CookAI        
        </li>
        <li><button  type="button" className=' border bg-amber-500 rounded-4xl p-4 w-35 '>Try Now !</button></li>
      </ul>
      
    </div>
  )
}

export default Navbar
