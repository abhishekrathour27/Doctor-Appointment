import { DotIcon, VerifiedIcon } from 'lucide-react'
import React, { useState } from 'react'
import { days } from '../components/data/appointDateData'
import { times } from '../components/data/appointDateData'
// import { doctorsData } from '../components/data/doctorData'
import DocterComp from '../components/DoctorComp'
import { doctorsData } from '../components/data/doctorData'
import { useParams } from 'react-router'


export default function Appointment() {

    const params = useParams();
    const info = params.id;


    const filterData = doctorsData.find((d) => Number(d.id) === Number(info))

    const [booking, setBooking] = useState([])

    const [day, setDay] = useState([]);
    const [time, setTime] = useState([]);

   
        const bookData = {
            days: day,
            times: time
        }
    
    // console.log(booking)


    return (
        <div className='flex flex-col items-center justify-center gap-10'>
            <div className='flex gap-8 w-[80vw] h-fit'>
                <div className='bg-indigo-500 w-fit rounded-xl'>
                    <img src={filterData.image} alt={filterData.image} />
                </div>
                <div className='border w-[60vw] flex flex-col justify-center px-9 rounded-xl gap-3.5'>
                    <h1 className='flex gap-2 items-center text-4xl font-semibold' >{filterData.name} <VerifiedIcon /> </h1>
                    <div className='flex gap-3 items-center'>
                        <p>{filterData.specialty}</p>
                        <button className='border py-1 px-3 text-sm rounded-4xl'>{filterData.experience} years</button>
                    </div>
                    <p className='font-semibold'>About</p>
                    <p>{filterData.about}</p>
                    <p className='font-semibold'>Appointment fee : ${filterData.fee}</p>
                </div>
            </div>

            {/* Days Section  */}

            <div className='mt-10 space-y-5 w-[80vw]'>
                <h3 className='text-xl font-semibold'>Booking Slots</h3>
                <div className='flex gap-5'>
                    {days.map((d) => (
                        <div key={d.date}
                            onClick={() => setDay(d)}
                            className={`${day.date === d.date ? 'bg-indigo-500 text-white' : 'bg-white'} border w-[4vw] py-3 px-2 rounded-4xl flex flex-col items-center cursor-pointer hover:scale-105 transition-all`} >
                            <p>{d.day}</p>
                            <p >{d.date}</p>
                        </div>
                    ))}
                </div>
                <div>
                    <div className=' flex gap-3.5'>
                        {times.map((t) => (
                            <div key={t}
                                onClick={() => setTime(t)}
                                className={`${time === t ? 'bg-indigo-500 text-white' : 'bg-white'} flex border py-1 px-3 w-fit rounded-4xl cursor-pointer hover:scale-105 transition-all`}>
                                {t}
                            </div>
                        ))}
                    </div>
                </div>
                <button onClick={()=> setBooking(bookData)}
                    className='bg-indigo-500 text-white py-3 px-6 rounded-4xl h-fit w-fit hover:bg-indigo-600 cursor-pointer'>Book an appointment</button>
            </div>

            {/* Doctor sec */}

            {/* <div className='space-y-4'>
                <h1 className='text-3xl font-semibold'>Related Doctors</h1>
                <p>Simply browse through our extensive list of trusted doctors.</p>
                <DocterComp />

            </div> */}

        </div>
    )
}
