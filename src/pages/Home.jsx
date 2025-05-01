import React from 'react'
import Header from '../components/Header'
import Speciality from '../components/Speciality'
import DocterSec from '../components/DocterSec'
import CreateAccount from '../components/CreateAccount'

export default function Home() {
  return (
    <div className='flex flex-col items-center'>
      <Header/>
      <Speciality/>
      <DocterSec/>
      <CreateAccount/>
    </div>
  )
}
