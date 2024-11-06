
import Image from 'next/image';
import React from 'react';

const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center bg-black p-5 min-h-screen">
      {/* Meta Tag for responsive scaling */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      
      {/* Text Section */}
      <div className="text-yellow-300 mt-10 md:mt-0 md:w-1/2 lg:text-xl flex flex-col items-center md:items-start text-center">
        <ul className="space-y-2">
          <li>
            <h1 className="font-bold text-2xl">Hi, Im</h1>
          </li>
          <li>
            <h1 className="font-bold text-4xl">Muhammad Saleem</h1>
          </li>
          <li>
            <h1 className="font-bold text-2xl">
              s/o<br />Mehmood Hussain,
            </h1>
          </li>
          <li>
            <h1 className="font-bold text-2xl">
              a passionate frontend developer <br />
              with expertise in building responsive <br />
              and scalable web applications.
            </h1>
          </li>
        </ul>
      </div>

      {/* Image Section */}
      <div className="flex justify-center items-center mt-10 md:mt-0 md:w-1/2 lg:w-1/3">
        <Image
          src="/mypic.jpg"
          alt="Muhammad Saleem"
          width={300}
          height={300}
          className="rounded-full p-5 bg-yellow-300 object-cover"
        />
      </div>
    </div>
  );
};

export default Hero;


