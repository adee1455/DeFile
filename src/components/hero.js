"use client";
import Image from 'next/image'
import React from 'react'
import { useRouter } from 'next/navigation';

export default function Hero() {
    const router = useRouter();
  return (
    <div className=' sm:mt-32 mt-20 mb-6'>
      <div className='flex sm:flex-row flex-col'>
        <div className='sm:w-2/4'>
            <div className=' my-12 w-full text-center justify-center sm:p-10 p-3'>
                <h2 className='font-extrabold text-blue-600 sm:text-5xl text-4xl sm:leading-tight sm:tracking-normal items-center'>Seamless, Secure, and Decentralized File Storage.</h2>
                <p className='pt-5 font-semibold font-mono text-sm '>Easily upload, lock and unlock your files with customizable access periods and authorized users.</p>
                <div className='flex pt-6 justify-center'>
                    <button onClick={()=> router.push('/App')} className="p-[3px] relative">
                        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
                         <div className="px-8 py-2 font-bold  bg-blue-800 rounded-[6px]  relative group transition duration-200 text-white hover:bg-transparent">
                             Go To App
                        </div>
                    </button>
                </div>
            </div>
           
        </div>
        <div>
            <Image src={'/files.svg'} width={500} height={500}></Image>
        </div>
      </div>
    </div>
  )
}