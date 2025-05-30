import { Eye, EyeClosed } from 'lucide-react';
import React, { useState } from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';

export default function SignUp() {
    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [pass, setPass] = useState('');
    const [show, setShow] = useState(false)


    const toggleFormData = () => {
        const userData = {
            userName: name,
            userMail: mail,
            password: pass,
        };

        const data = JSON.parse(localStorage.getItem("user-detail")) || [];
        data.push(userData);
        localStorage.setItem("user-detail", JSON.stringify(data));
        toast.success('Sign-up successed')

        setName('');
        setMail('');
        setPass('');
    };

    return (
        <div className='flex items-center justify-center w-full'>
            <div className='border py-10 px-10 rounded-lg border-gray-300 shadow-xl space-y-3 overflow-x-hidden'>
                <h2 className='text-xl font-semibold'>Create Account</h2>
                <p>Please Sign-up to Book Appointment</p>
                <div>
                    <p>Full Name :</p>
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder='Enter your Name'
                        className='border border-indigo-400 py-1.5 px-5 rounded-lg outline-none w-full'
                    />
                </div>
                <div>
                    <p>Email :</p>
                    <input
                        type="email"
                        value={mail}
                        onChange={(e) => setMail(e.target.value)}
                        placeholder='Enter your mail'
                        className='border border-indigo-400 py-1.5 px-5 rounded-lg outline-none w-full'
                    />
                </div>
                <div>
                    <p>Password :</p>
                    <input
                        type={show ? 'text' : 'password'}
                        value={pass}
                        onChange={(e) => setPass(e.target.value)}
                        placeholder='Enter your password'
                        className='border border-indigo-400 py-1.5 px-5 rounded-lg outline-none w-full relative'
                    />
                    <div onClick={() => setShow(!show)} className='relative left-54 bottom-7.5 cursor-pointer'>
                        {show ? <Eye /> : <EyeClosed />}
                    </div>
                </div>
                <button
                    onClick={toggleFormData}
                    className='bg-indigo-500 text-white py-2 px-6 rounded-lg h-fit w-full hover:bg-indigo-600 cursor-pointer'
                >
                    Create account
                </button>

                <p>Already have an account? <span onClick={() => navigate('/login')} className='text-blue-800 border-b cursor-pointer'>Login here</span></p>
            </div>
        </div>
    );
}
