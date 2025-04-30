import { useState } from 'react'
import './App.css'
import { Routes, Route, Router } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-indigo-800 flex flex-col items-center'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/docter' element={<Doctors/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/appointment' element={<Appointment/>} />
        
      </Routes>
    </div>
  )
}

export default App
