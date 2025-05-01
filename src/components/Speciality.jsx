import React from 'react'
import { specialties } from './data/SpecialityData'
import { useNavigate } from 'react-router'

export default function Speciality() {
    const navigate = useNavigate();
    return (
        <div className='min-h-[40vh] my-20 w-[80vw] flex flex-col items-center justify-around'>
            <h1 className='text-4xl font-semibold'>Find By Speciality</h1>
            <div className='flex flex-col items-center'>
                <p className='w-[35vw]'>Simply browse through our extensive list of trusted doctors, schedule</p>
                <span>your appointment hassle-free.</span>
            </div>
            <div className='flex gap-10'>
                {specialties.map((spec) => (
                    <div onClick={() => navigate(`/docter/${spec.name}`)} className='flex flex-col items-center gap-3 hover:scale-110 transition-all duration-200'>
                        <img src={spec.image} alt={spec.name} className='w-20' />
                        <p>{spec.name}</p>
                    </div>
                ))}

            </div>
        </div>
    )
}
