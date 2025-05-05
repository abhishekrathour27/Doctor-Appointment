import React from 'react'
import { useNavigate } from 'react-router'

export default function Header() {
    const navigate = useNavigate();
    
    return (
        <div className='bg-indigo-600 text-white min-h-[60vh] min-w-[80vw] rounded-lg flex items-center mt-5'>
            {/* {Left Side} */}
            <div className='flex flex-col gap-4 h-full pl-10 w-1/2'>
                <h1 className='text-4xl font-semibold w-96'>Book Appointment With Trusted Doctors</h1>
                <div className='flex w-[40vw] gap-4'>
                    <img src="/group_profiles.png" alt="group_profile" className='w-28' />
                    <p>Simply browse through our extensive list of trusted doctors,
                        schedule your appointment hassle-free.</p>
                </div>
                
            </div>
            {/* Right side */}
            <div className='mt-20'>
               <img src="/header_img.png" alt="" className='w-[30vw]' />
            </div>
        </div>
    )
}
