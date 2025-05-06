import React from 'react'
import { specialties } from './data/SpecialityData'
import { useNavigate } from 'react-router'

export default function Speciality() {
    const navigate = useNavigate();
    return ( 
        <div className='lg:min-h-[40vh] lg:my-20 lg:w-[80vw] w-[95vw] flex flex-col items-center justify-around mt-10 space-y-7'>
            <h1 className='text-4xl font-semibold'>Find By Speciality</h1>
            <div className='flex flex-col items-center'>
                <p className='w-70 lg:w-[35vw] '>Simply browse through our extensive list of trusted doctors, schedule</p>
                <span className='mt-4'>your appointment hassle-free.</span>
            </div>
            <div className='grid grid-cols-2 lg:grid lg:grid-cols-6 gap-10'>
                {specialties.map((spec) => (
                    <div onClick={() => navigate(`/doctor/${spec.name}`)} className='flex flex-col items-center gap-3 hover:scale-110 transition-all cursor-pointer duration-200'>
                        <img src={spec.image} alt={spec.name} className='w-20' />
                        <p>{spec.name}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
