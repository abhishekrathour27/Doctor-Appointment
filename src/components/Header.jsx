import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
    const navigate = useNavigate();
    
    return (
        <div className='bg-indigo-600 text-white w-[95vw]   md:min-h-[60vh] md:w-[80vw] rounded-lg md:flex md:items-center mt-5 gap-5 '>
            {/* {Left Side} */}
            <div className='md:flex md:flex-col  md:gap-4 h-full pl-10 lg:w-1/2 mt-5'>
                <h1 className='text-4xl font-semibold lg:w-96'>Book Appointment With Trusted Doctors</h1>
                <div className='lg:flex lg:w-[40vw] gap-4'>
                    <img src="/group_profiles.png" alt="group_profile" className='w-[100px] lg:w-28' />
                    <p>Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.</p>
                </div>
                
            </div>
            {/* Right side */}
            <div className='mt-20'>
               <img src="/header_img.png" alt="" className=' lg:w-[30vw]' />
            </div>
        </div>
    )
}
