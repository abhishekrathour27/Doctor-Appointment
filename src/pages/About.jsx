import React from 'react'

export default function About() {
  return (
    <div className='w-[80vw] space-y-8'>
      <center><h1 className='text-3xl font-medium'>ABOUT <span className='font-semibold'>US</span></h1></center>
      <div className='flex flex-col lg:flex-row gap-11'>
        <div>
          <img src="/about_image.png" alt="about" className='md:w-[40vw] lg:w-[70vw]' />
        </div>
        <div className='space-y-5'>
          <p>Welcome to Prescripto, your trusted partner in managing your healthcare needs conveniently and efficiently. At Prescripto, we understand the challenges individuals face when it comes to scheduling doctor appointments and managing their health records</p>
          <p>Prescripto is committed to excellence in healthcare technology. We continuously strive to enhance our platform, integrating the latest advancements to improve user experience and deliver superior service. Whether you're booking your first appointment or managing ongoing care, Prescripto is here to support you every step of the way.</p>
          <h3 className='font-semibold'>Our Vision</h3>
          <p>Our vision at Prescripto is to create a seamless healthcare experience for every user. We aim to bridge the gap between patients and healthcare providers, making it easier for you to access the care you need, when you need it.</p>
        </div>
      </div>
      <div className='space-y-10 mt-20'>
        <h1 className='text-2xl font-semibold'>WHY CHOOSE US :</h1>
        <div className=' grid lg:grid lg:grid-cols-3 '>
          <div className=' space-y-2 border border-indigo-300 py-5 px-10'>
            <h3 className='font-semibold'>EFFICIENCY :</h3>
            <p className='lg:w-[20vw]'>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
          </div>
          <div className='space-y-2 border border-indigo-300 py-5 px-10'>
            <h3 className='font-semibold'>CONVENIENCE :</h3>
            <p className='lg:w-[20vw]'>Access to a network of trusted healthcare professionals in your area.</p>
          </div>
          <div className='space-y-2 border border-indigo-300 py-5 px-10'>
            <h3 className='font-semibold'>PERSONALIZATION :</h3>
            <p className='lg:w-[20vw]'>Tailored recommendations and reminders to help you stay on top of your health.</p>
          </div>
        </div>
      </div>
    </div>
  )
}
