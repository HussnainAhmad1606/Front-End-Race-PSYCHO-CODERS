import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Innovation from './components/Innovation'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <Navbar/>
   <Innovation/>
   <Footer/>
    </>
  )
}

export default App
