import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className='w-full h-screen flex flex-col items-center justify-center pt-12 bg-gray-200'>

    <main className='w-[70%]  flex flex-col items-center justify-center h-screen bg-gray-100'>

    <Navbar/>
    <Hero title="Cook Smart." title2="Eat delicious." desc="Enter the ingredients you have and let the AI  surprise you with recipe you can cook at home" cta="hritik kuimar" />
    </main>
     <h1>CookAI </h1>
<p>your ai cook recipe master </p>
    </div>
    </>
  )
}

export default App
