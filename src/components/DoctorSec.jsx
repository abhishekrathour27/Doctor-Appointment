import { DotIcon } from 'lucide-react'
import React, { useState } from 'react'
import { doctorsData } from './data/doctorData'
import DocterComp from './DoctorComp'

export default function DocterSec() {
    const [lastIndex, setLastIndex] = useState(4)
    return (
        <div className='flex flex-col gap-6 min-h-fit py-8 justify-center items-center '>
            <div className='flex flex-col items-center gap-2 w-[95vw] lg:w-fit'>
                <h1 className='text-4xl font-semibold'>Top Doctors to Book</h1>
                <p>Simply browse through our extensive list of trusted doctors.</p>
            </div>
            {/* <div className="grid grid-cols-4 gap-5">
                {doctorsData.slice(0, lastIndex).map((doc) => (
                    <div key={doc.id} className="border border-violet-200 hover:scale-110 group transition-all duration-300 w-fit h-[50vh] rounded-xl">
                        <img
                            src={doc.image}
                            alt={doc.name}
                            width="230px"
                            className="bg-violet-200 rounded-t-xl"
                        />
                        <div className="pl-1.5 py-4">
                            <p className="flex text-green-500 items-center">
                                <DotIcon />
                                {doc.status}
                            </p>
                            <h3 className="text-lg font-semibold">{doc.name}</h3>
                            <p>{doc.specialty}</p>
                            <p className=' hidden group-hover:block text-sm text-indigo-700  max-w-56'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div> */}
            
            <DocterComp lastIndex={lastIndex} doctorsData={doctorsData}  />

            <center>
                <button onClick={() => setLastIndex(lastIndex + 4)} className={`${doctorsData.length <= lastIndex ? "hidden " : "flex"}  bg-violet-200 py-2.5 px-6 rounded-4xl h-fit w-fit hover:bg-violet-300 cursor-pointer`}>more</button> 
            </center>
        </div>

    )
}
