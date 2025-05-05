import { LogOutIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router';
import { toast } from 'react-toastify';

export default function Profile() {
    const navigate = useNavigate();

    const localStorageData = JSON.parse(localStorage.getItem('login-detail')) || [];

    const logOut = () => {
        localStorage.removeItem('login-detail');
        navigate('/')
        toast.success('Logged-Out successfully');
    }



    // console.log(data)

    return (
        <div className='w-[80vw] space-y-10 '>
            <div className=' border-b border-indigo-300 w-[30vw] space-y-2'>
                <img src="user.webp" alt="" className='w-40' />
                <div className='flex items-center gap-10'>
                    <h3 className='text-2xl font-semibold'>{localStorageData.userName} </h3>
                    <LogOutIcon onClick={logOut}
                        className='cursor-pointer' />
                </div>
                <hr />
            </div>
            <div className='space-y-3'>
                <p className='border-b border-indigo-300 w-fit'>CONTACT INFORMATION</p>
                <p>EMAIL ID : {localStorageData.userMail}</p>
                <p>Phone no. : +1 009 8272 9327</p>
                <button onClick={()=> navigate('/myAppointment')} 
                 className='bg-indigo-500 text-white py-2.5 px-6 rounded-4xl h-fit w-fit hover:bg-indigo-600 cursor-pointer'>My Appointment</button>
            </div>
        </div>
    )
}
