import React, { useState }  from 'react'
import { useNavigate } from 'react-router'
import SignUp from './SignUp';

export default function Login() {
    const navigate = useNavigate();

    // console.log(localStorageData);

    const [logInMail, setlogInMail] = useState('');

    const [logInPass, setLogInPass] = useState('');

    const checkDetail = () => {
        const localStorageData = JSON.parse(localStorage.getItem('user-detail')) || [];

        const matchUser = localStorageData.find((user) => user.userMail === logInMail && user.password === logInPass)

        if (matchUser) {
            navigate('/')
        }
        else {
            alert('Incorrect email or password')
        }

        localStorageData.find((e) => e.pa)
    }


    return (
        <div>
            <div className='border py-10 px-10 rounded-lg border-gray-300 shadow-xl space-y-3'>
                <h2 className='text-xl font-semibold'>Login</h2>
                <p>Please login to Book Appointment</p>
                <div>
                    <p>Email :</p>
                    <input type="email" value={logInMail} onChange={(e) => setlogInMail(e.target.value)}
                        placeholder='Enter your mail' className='border border-indigo-400 py-1.5 px-5 rounded-lg outline-none w-full' />
                </div>
                <div>
                    <p>Password :</p>
                    <input type="password" value={logInPass} onChange={(e) => setLogInPass(e.target.value)}
                        placeholder='Enter your password' className='border border-indigo-400 py-1.5 px-5 rounded-lg outline-none w-full' />
                </div>
                <button onClick={checkDetail}
                    className='bg-indigo-500 text-white py-2 px-6 rounded-lg h-fit w-full  hover:bg-indigo-600 cursor-pointer'>Login</button>

                <p>don't have an account ? <span onClick={() => navigate('/sign-up')} className='text-blue-800 border-b cursor-pointer'>Sign-Up</span></p>
            </div>
        </div>
    )
}
