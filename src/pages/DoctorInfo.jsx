import { VerifiedIcon } from 'lucide-react'
import React from 'react'
import { useNavigate, useParams } from 'react-router'
import { doctorsData } from '../components/data/doctorData';
import { toast } from 'react-toastify';

export default function DoctorInfo() {

    const navigate = useNavigate();
    const params = useParams();
    const info = params.id;

    const filterData = doctorsData.find((d) => Number(d.id) === Number(info))
    //   console.log(filterData)



    return (
        <div>
            <div className='flex gap-8 w-[80vw] h-fit'>
                <div className='bg-indigo-500 w-fit rounded-xl'>
                    <img src={filterData.image} alt={filterData.name} />
                </div>
                <div className='border w-[60vw] flex flex-col justify-center px-9 rounded-xl gap-3.5'>
                    <h1 className='flex gap-2 items-center text-4xl font-semibold' >{filterData.name}<VerifiedIcon /> </h1>
                    <div className='flex gap-3 items-center'>
                        <p>{filterData.specialty}</p>
                        <button className='border py-1 px-3 text-sm rounded-4xl'>{filterData.experience} Years</button>
                    </div>
                    <p className='font-semibold'>About</p>
                    <p>{filterData.about}</p>
                    <p className='font-semibold'>Appointment fee : ${filterData.fee}</p>
                    <button className='bg-indigo-500 hover:bg-indigo-600 text-white py-2.5 px-6 rounded-4xl w-fit cursor-pointer'
                        onClick={() => filterData.status === 'Available' ? navigate(`/appointment/${info}`) : toast.warning('Doctor is not avaiable')     
                        }>Book appointment</button>
                </div>
            </div>
        </div>
    )
}
