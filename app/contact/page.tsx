import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
Image
const Contact = () => {
  return (
    <div className='text-yellow-400 ' style={{
      backgroundImage: "url('/bg.jpg')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
    }}>
      <h1 className='flex justify-center text-2xl font-bold '>Contact Us</h1>
   <div className='flex justify-between p-16'>
    <div  >
       <Image
                   src={require('@/public/in.jpg')}
                   alt='Logo'
                   width={100}
                   height={100}
                  className=""
                        />
                        <li>
          <Link href="https://www.linkedin.com/in/muhammad-saleem-342269293/">
            LinkedIn
          </Link>
        </li>
            </div> 
    
           <div>
       <Image
                   src={require('@/public/gh.jpg')}
                   alt='Logo'
                   width={100}
                   height={100}
                  className=""
                        />
                   <li>
          <Link href="https://github.com/Mrsaleem110">
            
          GIT HUB
          </Link>
        </li>
           </div>
           <div >
       <Image
                   src={require('@/public/vcl.jpg')}
                   alt='Logo'
                   width={100}
                   height={100}
                  className=""
                        />
                        <li>
          <Link href="https://vercel.com/muhammad-saleems-projects-daef11eb">
            
            VERCEL
          </Link>
        </li>
        
           </div>
           </div>
           <div className='flex justify-between p-16'>

           <div >
       <Image
                   src={require('@/public/wa.jpg')}
                   alt='Logo'
                   width={100}
                   height={100}
                  className=""
                        />
            <li>
          <Link href="https://web.whatsapp.com/">
          
            WhatsApp
          </Link>
        </li>          
        
           </div>
           <div >
       <Image
                   src={require('@/public/em.jpg')}
                   alt='Logo'
                   width={100}
                   height={100}
                  className=""
                        />
                <li>
          <Link href="mailto:sm6928234@gmail.com">
            
            Email
          </Link>
        </li>      
        
           </div>
           <div >
       <Image
                   src={require('@/public/itg.jpg')}
                   alt='Logo'
                   width={100}
                   height={100}
                  className=""
                        />
                   <li>
          <Link href="https://www.instagram.com/mr_saleem110/">
            Instagram
          
          </Link>
        </li>
           </div>
     </div>
     </div>
  )
}

export default Contact