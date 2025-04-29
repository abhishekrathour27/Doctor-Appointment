import React from 'react'

export default function Speciality() {
    return (
        <div className='min-h-[40vh] my-20 w-[80vw] flex flex-col items-center justify-around'>
            <h1 className='text-4xl font-semibold'>Find By Speciality</h1>
            <div className='flex flex-col items-center'>
                <p className='w-[35vw]'>Simply browse through our extensive list of trusted doctors, schedule</p>
                <span>your appointment hassle-free.</span>
            </div>
            <div className='flex gap-10'>
                <div className='flex flex-col items-center gap-3'>
                    <img src="/General_physician.svg" alt="" className='w-20' />
                    <p>General Physician</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <img src="/Gynecologist.svg" alt="" className='w-20' />
                    <p>Gynecologist</p>
                </div>
                <div className='flex flex-col  gap-3'>
                    <img src="/Dermatologist.svg" alt="" className='w-20' />
                    <p>Dermatologist</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <img src="/Pediatricians.svg" alt="" className='w-20' />
                    <p>Pediatricians</p>
                </div>
                <div className='flex flex-col gap-3'>
                    <img src="/Neurologist.svg" alt="" className='w-20' />
                    <p>Neurologist</p>
                </div>
                <div className='flex flex-col items-center gap-3'>
                    <img src="Gastroenterologist.svg" alt="" className='w-20' />
                    <p>Gastroenterologist</p>
                </div>
            </div>
        </div>
    )
}
