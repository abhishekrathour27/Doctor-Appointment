import { DotIcon } from 'lucide-react'
import React from 'react'

export default function DocterSec() {
    return (
        <div className='flex flex-col gap-6 h-screen'>
            <div className='flex flex-col items-center gap-2'>
                <h1 className='text-4xl font-semibold'>Top Doctors to Book</h1>
                <p>Simply browse through our extensive list of trusted doctors.</p>
            </div>
            <div className='grid grid-cols-5 gap-5'>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc1.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc2.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc3.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc4.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc5.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc1.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc2.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc3.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc4.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>
                <div className='border border-indigo-500 w-fit rounded-xl'>
                    <img src="/doc5.png" alt="" width={'230px'} className='bg-violet-200 rounded-t-xl' />
                    <div className='pl-1.5 py-4'>
                        <p className='flex text-green-500 items-center'><DotIcon />Available</p>
                        <h3 className='text-lg font-semibold'>Dr. Richard James</h3>
                        <p>General Physician</p>
                    </div>
                </div>

            </div>
        </div>

    )
}
