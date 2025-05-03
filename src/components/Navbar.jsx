import { UserCircle2 } from 'lucide-react';
import React from 'react'
import { useNavigate } from 'react-router'

export default function Navbar() {

    const navigate = useNavigate();
    const localStorageData = JSON.parse(localStorage.getItem('login-detail'))


    const name = localStorageData?.userName;
    const firstLetter = name?.charAt(0).toUpperCase();

    return (
        <nav className='flex justify-center'>
            <div className='flex h-fit py-5 items-center justify-between pb-10 text-indigo-800 w-[80vw] '>
                <img src="/logo.svg" alt="logo" className='w-[12vw] cursor-pointer' onClick={() => navigate('/')} />
                <ul className='flex gap-10'>
                    <li className='relative inline-block cursor-pointer group hover:text-indigo-600' onClick={() => navigate('/')}>Home
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative inline-block cursor-pointer group hover:text-indigo-600' onClick={() => navigate('/docter')}>All Doctors
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative inline-block cursor-pointer group hover:text-indigo-600' onClick={() => navigate('/about')}>About
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative inline-block cursor-pointer group hover:text-indigo-600' onClick={() => navigate('/contact')}>Contact
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                </ul>
                {localStorageData ? (
                    <button onClick={() => navigate('/profile')}
                        className='bg-indigo-200 text-2xl w-10 h-10  flex items-center justify-center rounded-full cursor-pointer'>{firstLetter}</button>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-indigo-500 text-white py-2.5 px-6 rounded-4xl h-fit w-fit hover:bg-indigo-600 cursor-pointer"
                    >
                        Log-In
                    </button>
                )}
            </div>
        </nav>
    )
}
