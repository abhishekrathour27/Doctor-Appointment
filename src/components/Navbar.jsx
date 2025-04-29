import React from 'react'
import { useNavigate } from 'react-router'

export default function Navbar() {

    const navigate = useNavigate();
    return (
        <nav >
            <div className='flex h-fit py-5 items-center justify-around '>
                <img src="/logo.svg" alt="logo" className='w-[12vw]' />
                <ul className='flex gap-10'>
                    <li className='relative inline-block cursor-pointer group hover:text-blue-600' onClick={()=> navigate('/')}>Home
                        <span class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative inline-block cursor-pointer group hover:text-blue-600'  onClick={()=> navigate('/docter')}>All Doctors
                        <span class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative inline-block cursor-pointer group hover:text-blue-600'  onClick={()=> navigate('/about')}>About
                        <span class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative inline-block cursor-pointer group hover:text-blue-600'  onClick={()=> navigate('/contact')}>Contact
                        <span class="absolute left-0 bottom-0 w-full h-0.5 bg-blue-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                </ul>
                <button className='bg-indigo-500 text-white py-2.5 px-6 rounded-4xl h-fit w-fit hover:bg-indigo-600 cursor-pointer'>Create account</button>
            </div>
        </nav>
    )
}
