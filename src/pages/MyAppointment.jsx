import React from 'react'

export default function MyAppointment() {
    return (
        <div className='w-[80vw]'>
            <p>My Appointment</p>
            <div className='flex gap-10'>
                <div className='w-40 h-fit bg-violet-200 rounded-xl'>
                    <img src="/doc1.png" alt="" />
                </div>
                <div className='space-y-4'> 
                    <div>
                        <h1 className='font-semibold text-xl'>Dr Richard James</h1>
                        <p>General physician</p>
                    </div>
                    <span className='font-semibold'>Date & Time :  </span> <span> 25 july , 2024 | 8:30 AM</span>
                </div>
            </div>
        </div>
    )
}
