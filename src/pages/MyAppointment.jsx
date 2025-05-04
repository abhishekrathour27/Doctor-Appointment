import React from 'react'
import { days } from '../components/data/appointDateData'

export default function MyAppointment({ booking }) {
    // console.log('hello', booking)

    return (
        <div className='w-[80vw]'>
            <p className='text-2xl font-semibold'>My Appointment :</p>
            <div className='grid grid-cols-1'>
                {booking.map((b, index) => (
                    <div key={index} className='flex gap-10 items-center p-4 rounded-xl shadow-md'>
                        <div className='w-40 h-fit bg-violet-200 rounded-xl'>
                            <img src={b.doctor?.image} alt="" />
                        </div>
                        <div className='space-y-4'>
                            <div>
                                <h1 className='font-semibold text-xl'>{b.doctor?.name}</h1>
                                <p>{b.doctor?.specialty}</p>
                            </div>
                            <span className='font-semibold'>Date & Time :  </span> <span> {b.days?.day} {b.days?.date} | {b.times}</span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}
