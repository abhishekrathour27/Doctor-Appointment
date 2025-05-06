import React from 'react'
import { useNavigate } from 'react-router'

export default function CreateAccount() {
   const navigate = useNavigate();
    return (
        <div className='flex bg-indigo-500 text-white w-[95vw] lg:w-[80vw] rounded-lg justify-center py-5 px-4'>
            {/* Left Side */}
            <div className='flex flex-col justify-center gap-8'>
                <h1 className=' text-2xl lg:text-4xl font-semibold lg:w-[35vw]'>Book Appointment with 100+ Trusted Doctors</h1>
                <button onClick={()=> navigate('/sign-up')}
                className='bg-violet-100 text-indigo-500 py-2.5 px-6 rounded-4xl w-fit cursor-pointer'>Create account</button>
            </div>

            {/* Right Side */}
            <div>
                <img src="/appointment_img.png" alt="" className='hidden lg:block  w-[20vw]' />
            </div>
        </div>
    )
}
