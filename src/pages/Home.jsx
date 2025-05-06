import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import DocterSec from '../components/DoctorSec'
import CreateAccount from '../components/CreateAccount'

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-center '>
      <Header/>
      <Speciality/>
      <DocterSec/>
      <CreateAccount/>

        {/* <div className='h-10 w-10 border-l-4 border-t-4 border-indigo-800 rounded-full animate-pulse'>
      </div> */}
    </div>
  )
}
