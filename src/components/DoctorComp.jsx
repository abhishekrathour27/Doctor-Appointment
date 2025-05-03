import React, { useState } from 'react'
import { doctorsData } from './data/doctorData'
import { DotIcon } from 'lucide-react'
import { useNavigate } from 'react-router'

export default function DocterComp({ doctorsData=[] , lastIndex=4 ,}) {

    const navigate = useNavigate();
    

    return (
        <div>
            <div className="grid grid-cols-4 gap-5">
                {doctorsData.slice(0, lastIndex).map((doc) => (
                    <div onClick={()=> navigate(`/docter/doctorInfo/${doc.id}`)} key={doc.id} className="border border-violet-200 hover:scale-105 group transition-all duration-300 w-fit h-[50vh] rounded-xl">
                        <img
                            src={doc.image}
                            alt={doc.name}
                            width="230px"
                            className="bg-violet-200 rounded-t-xl"
                        />
                        <div className="pl-1.5 py-4">
                            <p className={`flex ${doc.status === 'Available' ? 'bg-green-400/20 text-green-700 px-2 py-0.5 rounded-full w-fit' : ' px-2 py-0.5 rounded-full w-fit bg-rose-400/20 text-rose-600 '} items-center`}>
                                {/* <DotIcon /> */}
                                {doc.status}
                            </p>
                            <h3 className="text-lg font-semibold">{doc.name}</h3>
                            <p>{doc.specialty}</p>
                            <p className=' hidden group-hover:block text-sm text-indigo-700  max-w-56'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
