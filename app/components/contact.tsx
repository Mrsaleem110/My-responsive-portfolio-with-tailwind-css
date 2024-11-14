import Image from 'next/image'
import Link from 'next/link'
const Contact = () => {
  return (
    <div id='contact' className='text-yellow-300 bg-black  h-screen ' >
<meta name="viewport" content="width=device-width, initial-scale=1" />

      <h1 className='flex justify-center text-2xl font-bold pt-16 '>Contact </h1>
   <div className='flex justify-between p-16'>
    <div  >
       <Image
                   src='/in.jpg'
                   alt='Logo'
                   width={50}
                   height={50}
                  className=""
                        />
                        
          <Link href="https://www.linkedin.com/in/muhammad-saleem-342269293/">
            LinkedIn
          </Link>
        
            </div> 
    
           <div>
       <Image
              src='/gh.jpg'
                   alt='Logo'
                   width={50}
                   height={50}
                  className=""
                        />
                   
          <Link href="https://github.com/Mrsaleem110">
            
          GIT HUB
          </Link>
        
           </div>
           <div >
       <Image
                 src='/vcl.jpg'

                   alt='Logo'
                   width={50}
                   height={50}
                  className=""
                        />
                        
          <Link href="https://vercel.com/muhammad-saleems-projects-daef11eb">
            
            VERCEL
          </Link>
        
        
           </div>
           </div>
           <div className='flex justify-between p-16'>

           <div >
       <Image
                 src='/wa.jpg'
                   alt='Logo'
                   width={50}
                   height={50}
                  className=""
                        />
            
          <Link href="https://web.whatsapp.com/">
          
            WhatsApp
          </Link>
                  
        
           </div>
           <div >
       <Image
                   src='/em.jpg'
                   alt='Logo'
                   width={50}
                   height={50}
                  className=""
                        />
                
          <Link href="mailto:sm6928234@gmail.com">
            
            Email
          </Link>
        
        
           </div>
           <div >
       <Image
                   src='/itg.jpg'
                   alt='Logo'
                   width={50}
                   height={50}
                  className=""
                        />
                   
          <Link href="https://www.instagram.com/mr_saleem110/">
            Instagram
          
          </Link>
        
           </div>
     </div>
     </div>
  )
}

export default Contact