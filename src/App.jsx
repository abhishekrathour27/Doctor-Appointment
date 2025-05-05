import { useState } from 'react'
import './App.css'
import { Routes, Route, useParams } from 'react-router'
import Home from './pages/Home'
import About from './pages/About'
import Doctors from './pages/Doctors'
import Contact from './pages/Contact'
import Appointment from './pages/Appointment'
import DoctorInfo from './pages/DoctorInfo'
import Login from './pages/Login&SignUp/Login'
import SignUp from './pages/Login&SignUp/SignUp'
import Profile from './pages/Profile'
import MyAppointment from './pages/MyAppointment'

function App() {

  // const params = useParams();
  // const info = params.id;



  const [booking, setBooking] = useState([])
  console.log(booking)



  return (
    <div className='text-indigo-800 flex flex-col items-center'>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/docter' element={<Doctors />} />
        <Route path='/docter/doctorInfo/:id' element={<DoctorInfo />} />
        <Route path='/docter/:id' element={<Doctors />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/appointment/:id' element={<Appointment booking={booking} setBooking={setBooking} />} />
        <Route path='/login' element={<Login />} />
        <Route path='/sign-up' element={<SignUp />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/myAppointment' element={<MyAppointment booking={booking} />} />
      </Routes>
    </div>
  )
}

export default App
