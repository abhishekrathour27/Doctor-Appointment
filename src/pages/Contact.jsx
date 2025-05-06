import React from 'react'

export default function Contact() {
  return (
    <div className='space-y-8 w-[95vw]'>
      <center><h1>CONTACT <span>US</span></h1></center>
      <div className='flex flex-col md:flex gap-10'>
        <div className='md:w-[30vw]'><img src="/contact_image.png" alt="" /></div>
        <div className='flex flex-col gap-4'>
          <h2 className='text-2xl font-semibold'>OUR OFFICE :</h2>
          <div className=''>
            <p>54709 Willms Station </p>
            <p>Suite 350, Washington, USA</p>
          </div>
          <div>
            <p>Tel: (415) 555‑0132</p>
            <p>EMAIL : abhishek@gmail.com</p>
          </div>
          <h1 className='text-2xl font-semibold'>CARRERS AT PRESCRIPTO</h1>
          <p>Learn more about our teams and job openings</p>
          <button className='bg-indigo-500 text-white py-2.5 px-6 rounded-4xl h-fit w-fit hover:bg-indigo-600 cursor-pointer'>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}
