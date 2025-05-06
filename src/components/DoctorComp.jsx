import React, { useState } from 'react'
import { doctorsData } from './data/doctorData'
import { DotIcon } from 'lucide-react'
import { useNavigate } from 'react-router'

export default function DocterComp({ doctorsData=[] , lastIndex=4 ,}) {

    const navigate = useNavigate();
    

    return (
        <div>
            <div className="grid grid-cols-1 justify-center items-center lg:grid lg:grid-cols-4 gap-5">
                {doctorsData.slice(0, lastIndex).map((doc) => (
                    <div onClick={()=> navigate(`/doctor/doctorInfo/${doc.id}`)} key={doc.id} className="border border-violet-200 hover:scale-105 group transition-all duration-300 h-fit lg:w-fit w-[95vw] lg:h-[55vh]  rounded-xl ">
                        <img
                            src={doc.image}
                            alt={doc.name}
                            width=""
                            className="bg-violet-200 rounded-t-xl w-fit lg:w-[16vw]"
                        />
                        <div className="pl-1.5 py-4 space-y-2">
                            <p className={`flex ${doc.status === 'Available' ? 'bg-green-400/20 text-green-700 px-2 py-0.5 rounded-full w-fit' : ' px-2 py-0.5 rounded-full w-fit bg-rose-400/20 text-rose-600 '} items-center`}>
                                {/* <DotIcon /> */}
                                {doc.status}
                            </p>
                            <h3 className="text-xl lg:text-lg font-semibold">{doc.name}</h3>
                            <p>{doc.specialty}</p>
                            <p className=' hidden group-hover:block text-sm text-indigo-700  max-w-56'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
