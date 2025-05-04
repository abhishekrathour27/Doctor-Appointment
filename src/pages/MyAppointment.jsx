import React from 'react'
import { days } from '../components/data/appointDateData'

export default function MyAppointment({ booking }) {
    // console.log('hello', booking)

    return (
        <div className='w-[80vw]'>
            <i className='text-2xl font-semibold w-fit'>My Appointment :</i>
            <div className='grid grid-cols-1'>
                {booking.length > 0 ? (booking.map((b, index) => (
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
                ))) : (<p className='text-3xl text-indigo-300  font-extralight text-center pt-20 h-40'>No Appointment Book Yet </p>)}
            </div>
        </div>
    )
}
