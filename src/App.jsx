import { useState } from 'react'
import './App.css'
import { Routes, Route, Router } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/docter' element={<Doctors/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/' element={<Home/>} />
        
      </Routes>
    </div>
  )
}

export default App
