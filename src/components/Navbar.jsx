import { AlignCenter, X } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router'

export default function Navbar() {

    const navigate = useNavigate();
    const localStorageData = JSON.parse(localStorage.getItem('login-detail'))


    const name = localStorageData?.userName;
    const firstLetter = name?.charAt(0).toUpperCase();

    const [show, setShow] = useState(false)

    return (
        <nav className='flex justify-center'>
            <div className=' flex h-fit py-5 items-center justify-between pb-10 text-indigo-800 lg:w-[80vw] w-[95vw] '>
                <img src="/logo.svg" alt="logo" className='w-[230px] lg:w-[12vw] cursor-pointer' onClick={() => navigate('/')} />
                <ul className='hidden lg:flex gap-10'>
                    <li className='relative inline-block cursor-pointer group hover:text-indigo-600' onClick={() => navigate('/')}>Home
                        <span className="absolute left-0 bottom-0 w-full h-0.5 bg-indigo-500 scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                    </li>
                    <li className='relative inline-block cursor-pointer group hover:text-indigo-600' onClick={() => navigate('/doctor')}>All Doctors
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
                        className='bg-indigo-200 text-2xl w-10 h-10 hidden  lg:flex lg:items-center lg:justify-center rounded-full cursor-pointer'>{firstLetter}</button>
                ) : (
                    <button
                        onClick={() => navigate('/login')}
                        className="bg-indigo-500 text-white py-2.5 hidden lg:block px-6 rounded-4xl h-fit w-fit hover:bg-indigo-600 cursor-pointer"
                    >
                        Log-In
                    </button>
                )}
                <AlignCenter onClick={() => setShow(true)}
                    className='block lg:hidden ' />
            </div>
            {show && <div className='md:hidden fixed top-0  right-0 h-screen w-[70vw] bg-white shadow-lg p-5 pt-10 text-2xl z-50'>
                <ul className='space-y-4 relative text-blue-600 ' onClick={() => setShow(false)}>
                    <li className='cursor-pointer' onClick={() => navigate('/')}>Home</li>
                    <li className='cursor-pointer' onClick={() => navigate('/doctor')}>All Doctor</li>
                    <li className='cursor-pointer' onClick={() => navigate('/about')}>About</li>
                    <li className='cursor-pointer' onClick={() => navigate('/contact')}>Contact</li>
                    {localStorageData ? (
                        <button onClick={() => navigate('/profile')}
                            className='bg-indigo-200 text-2xl w-10 h-10   lg:flex lg:items-center lg:justify-center rounded-full cursor-pointer'>{firstLetter}</button>
                    ) : (
                        <button
                            onClick={() => navigate('/login')}
                            className="bg-indigo-500 text-lg text-white py-2 px-4 rounded-4xl h-fit w-fit hover:bg-indigo-600 cursor-pointer"
                        >
                            Log-In
                        </button>
                    )}


                    <X className='absolute right-2 top-0 border p-1 cursor-pointer' onClick={() => setShow(false)} />
                </ul>
            </div>}

        </nav>
    )
}
