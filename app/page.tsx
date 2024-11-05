import Image from 'next/image'
import React from 'react'

const Hero = () => {
  return (
    <div className='flex flex-col bg-black justify-between p-5 items-center  sm:flex-col md-h-12 md:flex-row  '>
      <meta name="viewport" content="width=device-width, initial-scale=1" />

    <div className="text-yellow-300 mt-10 md:mt-0 md:w-1/2 lg:text-xl">
      <ul className="space-y-2">
        <li>
          <h1 className="font-bold text-2xl">Hi, I'm</h1>
        </li>
        <li>
          <h1 className="font-bold text-4xl">Muhammad Saleem</h1>
        </li>
        <li>
          <h1 className="font-bold text-2xl">s/o <br /> Mehmood Hussain,</h1>
        </li>
        <li>
          <h1 className="font-bold text-2xl">
            a passionate frontend developer <br /> with expertise in building responsive <br /> and scalable web applications.
          </h1>
        </li>
      </ul>
    </div>

    <div className="flex justify-center items-center  mt-10 md:mt-0 md:w-1/2 lg:w-1/3">
      <Image
        src="/mypic.jpg"
        alt="Logo"
        width={300}
        height={300} // Keep a square aspect ratio for the profile image
        className="rounded-full p-5 bg-yellow-300"
      />
    </div>
  </div>

);
}
          
          export default Hero

