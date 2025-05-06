import React from 'react'

export default function Footer() {
    return (
        <div className='  h-fit py-5  lg:flex  lg:justify-center lg:h-[40vh] mt-16 text-indigo-800'>
            <div className="grid  lg:grid lg:[grid-template-columns:1.8fr_1fr_1fr] lg:w-[80vw] lg:h-[35vh] ml-6  gap-20  border-b border-gray-400">
                <div className='space-y-8'>
                    <img src="/logo.svg" alt="" className='w-[230px] md:w-fit' />
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
                        been the industry's standard dummy text ever since the 1500s, when an unknown printer took a
                        galley of type and scrambled it to make a type specimen book.
                    </p>
                </div>
                <div className='space-y-2 lg:ml-6'>
                    <h3 className='font-semibold lg:pb-10'>COMPANY</h3>
                    <p>Home</p>
                    <p>About us</p>
                    <p>Contact us</p>
                    <p>Privacy Policy</p>
                </div>
                <div className='space-y-2 lg:ml-6'>
                    <h3 className='font-semibold lg:pb-10'>GET IN TOUCH</h3>
                    <p>+1-212-456-7890</p>
                    <p>abhishek@gmail.com</p>
                </div>
            </div>
        </div>


    )
}
