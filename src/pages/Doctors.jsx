import React, { useState } from 'react'
import DocterComp from '../components/DocterComp'
import { doctorsData } from '../components/data/doctorData'
import { category } from '../components/data/doctorCategory'
import { useParams } from 'react-router'


export default function Doctors() {

  const params = useParams()
  const speciality = params.id || "All";
  const [doctor, setDoctor] = useState(speciality)

  const filteredDoctors = doctor !== "All" ? doctorsData.filter((doc) => doc.specialty === doctor) : doctorsData

  return (
    <div className='space-y-3 w-[80vw]'>
      <p>Browse Through the Docter Specialist</p>
      <div>
        <div className='flex gap-10'>
          <div className='grid grid-cols-1 gap-4 h-fit'>
            {category.map((c) => (
              <div key={c} onClick={() => {
                setDoctor(c)
              }}
                className={`${doctor === c ? 'bg-violet-200' : 'bg-white'} border w-[15vw] h-fit py-2 px-6 cursor-pointer hover:scale-105 transition-all duration-200 rounded-lg`}>{c}</div>
            ))}
          </div>
          <DocterComp doctorsData={filteredDoctors} lastIndex={doctorsData.length} />
        </div>
      </div>
    </div>
  )
}
