import { useState } from 'react'
import './App.css'
import { Routes, Route } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import DoctorInfo from './pages/DoctorInfo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='text-indigo-800 flex flex-col items-center'>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/docter' element={<Doctors/>} />
        <Route path='/docter/doctorInfo/:id' element={<DoctorInfo/>} />
        <Route path='/docter/:id' element={<Doctors/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/appointment' element={<Appointment/>} />
        
      </Routes>
    </div>
  )
}

export default App
