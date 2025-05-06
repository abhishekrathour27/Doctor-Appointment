import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
    const navigate = useNavigate();
    
    return (
        <div className='bg-indigo-600 text-white w-[95vw]   lg:min-h-[60vh] lg:w-[80vw] rounded-lg lg:flex lg:items-center mt-5 '>
            {/* {Left Side} */}
            <div className='lg:flex lg:flex-col lg:gap-4 h-full pl-10 lg:w-1/2 mt-5'>
                <h1 className='text-4xl font-semibold lg:w-96'>Book Appointment With Trusted Doctors</h1>
                <div className='lg:flex lg:w-[40vw] gap-4'>
                    <img src="/group_profiles.png" alt="group_profile" className='lg:w-28' />
                    <p>Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.</p>
                </div>
                
            </div>
            {/* Right side */}
            <div className='mt-20'>
               <img src="/header_img.png" alt="" className='lg:w-[30vw]' />
            </div>
        </div>
    )
}
