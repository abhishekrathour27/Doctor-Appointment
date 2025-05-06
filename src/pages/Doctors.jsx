import React, { useState } from 'react'
import DocterComp from '../components/DoctorComp'
import { doctorsData } from '../components/data/doctorData'
import { category } from '../components/data/doctorCategory'
import { useParams } from 'react-router'


export default function Doctors() {

  const [show, setShow] = useState(false)

  const filter = () => {
    setShow(!show)
    console.log('object')
  }



  const params = useParams()
  const speciality = params.id || "All";
  const [doctor, setDoctor] = useState(speciality)

  const filteredDoctors = doctor !== "All" ? doctorsData.filter((doc) => doc.specialty === doctor) : doctorsData

  return (
    <div className='space-y-3 w-[80vw] '>
      <p className='text-xl lg:text-balance'>Browse Through the Docter Specialist</p>
      <button onClick={filter}
        className='lg:hidden bg-indigo-500 text-white py-2.5 px-6 rounded-4xl h-fit w-fit hover:bg-indigo-600 cursor-pointer'>Filter</button>
      <div className='flex flex-col items-center justify-center'>
        {show && <div className='lg:hidden grid grid-cols-1 gap-4 h-fit py-3 w-full md:w-[50vw] px-5 bg-white  '>
          {category.map((c) => (
            <div key={c} onClick={() => {
              setDoctor(c)
              setShow(false)
            }}
              className={`${doctor === c ? 'bg-violet-200' : 'bg-white'} border  h-fit py-2 px-5 cursor-pointer hover:scale-105 transition-all duration-200 rounded-lg`}>{c}</div>
          ))}
        </div>
        }
        <div className='lg:flex  gap-10  '>
          <div className='hidden lg:grid lg:grid-cols-1 gap-4 h-fit w-fit'>
            {category.map((c) => (
              <div key={c} onClick={() => {
                setDoctor(c)
              }}
                className={`${doctor === c ? 'bg-violet-200' : 'bg-white'} border w-[15vw] h-fit py-2 px-5 cursor-pointer hover:scale-105 transition-all duration-200 rounded-lg`}>{c}</div>
            ))}
          </div>
          <DocterComp doctorsData={filteredDoctors} lastIndex={doctorsData.length} />
        </div>

      </div>
    </div>
  )
}
