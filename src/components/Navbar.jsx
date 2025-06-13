import React from 'react'
import newlogo from '../assets/newlogo.png' // Assuming you have a logo.png in the assets folder
const Navbar = () => {
  return (
    <div>
      <ul className='w-[inherit] flex justify-around items-center bg-gray-400 text-white p-1 gap-4 rounded-3xl'>
        <li className='flex items-center  text-3xl'>
            <img src={newlogo} alt="logo" width={100} height={100} className='text-green' />CookAI        
        </li>
        <li><button  type="button" className=' border bg-amber-500 rounded-4xl p-4 w-35 '>Try Now !</button></li>
      </ul>
      
    </div>
  )
}

export default Navbar
