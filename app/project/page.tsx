import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Project = () => {
  return (
<div className='text-yellow-300 bg-black h-screen pt-3 '> 
<meta name="viewport" content="width=device-width, initial-scale=1" />

       <h1 className='flex justify-center text-2xl font-bold '>My Projects</h1>
    <div className='flex justify-evenly pt-20' >
   <div className='flex flex-col'>
   <Link href="https://vercel.com/muhammad-saleems-projects-daef11eb/milestone-5" className='flex'>
          Click here
          </Link>
       <Image
                   src='/resume builder pic.jpg'
                   alt='Logo'
                   width={200}
                   height={200}
                  className="rounded-full "
                        />
                        
          
        
            </div> 
    
           <div className='flex flex-col'>
           <Link href="https://count-down-timer-made-by-muhammad-saleem-q11l.vercel.app/">
          Click here
          </Link>
       <Image
              src='/count down.jpg'
              alt='Logo'
              width={200}
              height={200}
             className="rounded-full"
                        />
                   
          
        
           </div>
           </div>
           </div>

  )
}

export default Project