import React, { useState } from 'react'
import DocterComp from '../components/DocterComp'
import { doctorsData } from '../components/data/doctorData'
import { category } from '../components/data/doctorCategory'


export default function Doctors() {

  const [doctor, setDoctor] = useState('')
  const [all , setAll] = useState(true);

  const filteredDoctors = doctor ? doctorsData.filter((doc) => doc.specialty === doctor) : doctorsData


  return (
    <div className='space-y-3 w-[80vw]'>
      <p>Browse Through the Docter Specialist</p>
      {console.log(doctorsData)}
      <div>
        <div className='flex gap-10'>
          <div className='grid grid-cols-1 gap-4 h-fit'>
            <button 
            onClick={()=> setAll(true)}
            className={`${all ? 'bg-violet-200' : 'bg-white'} border w-[15vw] h-fit py-2 px-6 cursor-pointer hover:scale-105 transition-all duration-200 rounded-lg`}>All</button>
            {category.map((c) => (
              <div onClick={() => setDoctor(c)}
                className={`${doctor === c ? 'bg-violet-200' : 'bg-white'} border w-[15vw] h-fit py-2 px-6 cursor-pointer hover:scale-105 transition-all duration-200 rounded-lg`}>{c}</div>
            ))}
          </div>

          <DocterComp doctorsData={filteredDoctors} lastIndex={doctorsData.length} />
        </div>
      </div>
    </div>
  )
}
