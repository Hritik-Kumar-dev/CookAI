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
    <main className='p-4 flex flex-col items-center justify-center h-screen bg-gray-100'>

    <Navbar/>
    <Hero title="this  ois the tittle anf its fun now i am happy "  desc="i dont know now what should i include in this but late in i will copy pasre something here int he description section" cta="hritik kuimar" />
    </main>
     <h1>CookAI </h1>
<p>your ai cook recipe master </p>
    </>
  )
}

export default App
