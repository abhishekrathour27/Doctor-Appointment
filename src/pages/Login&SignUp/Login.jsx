import { Eye, EyeClosed } from 'lucide-react';
import React, { useState }  from 'react'
import { useNavigate } from 'react-router'
import { toast } from 'react-toastify';

export default function Login() {
    const navigate = useNavigate();

    // console.log(localStorageData);

    const [logInMail, setlogInMail] = useState('');

    const [logInPass, setLogInPass] = useState('');

    const [show, setShow] = useState(false)

    const checkDetail = () => {
        const localStorageData = JSON.parse(localStorage.getItem('user-detail')) || [];

        const matchUser = localStorageData.find((user) => user.userMail === logInMail && user.password === logInPass)
        // console.log(matchUser)

        if (matchUser) {
            localStorage.setItem('login-detail',JSON.stringify(matchUser))
            navigate('/')
            toast.success('Looged-In successfully');
        }
        else {
            toast.error('Incorrect email or password');
        }

        // localStorageData.find((e) => e.pa)
    }


    return (
        <div className='flex items-center justify-center w-full'>
            <div className='border py-10 px-10 rounded-lg border-gray-300 shadow-xl space-y-3  overflow-x-hidden'>
                <h2 className='text-xl font-semibold'>Login</h2>
                <p>Please login to Book Appointment</p>
                <div>
                    <p>Email :</p>
                    <input type="email" value={logInMail} onChange={(e) => setlogInMail(e.target.value)}
                        placeholder='Enter your mail' className='border border-indigo-400 py-1.5 px-5 rounded-lg outline-none w-full' />
                </div>
                <div>
                    <p>Password :</p>
                    <input type={show ? 'text' : 'password'}
                    value={logInPass} onChange={(e) => setLogInPass(e.target.value)}
                        placeholder='Enter your password' className='border relative border-indigo-400 py-1.5 px-5 rounded-lg outline-none w-full' />
                       <div onClick={()=> setShow(!show)} className='relative left-54 bottom-7.5 cursor-pointer'>
                        {show? <Eye/> : <EyeClosed/>}
                       </div>
                </div>
                <button onClick={checkDetail}
                    className='bg-indigo-500 text-white py-2 px-6 rounded-lg h-fit w-full  hover:bg-indigo-600 cursor-pointer'>Login</button>

                <p>don't have an account ? <span onClick={() => navigate('/sign-up')} className='text-blue-800 border-b cursor-pointer'>Sign-Up</span></p>
            </div>
        </div>
    )
}
