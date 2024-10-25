import Image from "next/image";

export default function Home() {
  return (
<div className="flex justify-between" style={{
      backgroundImage: "url('/bg.jpg')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
    }}
    >
      <div className='flex  text-yellow-500 mt-20 text-bold ml-6 '>
               <ul>
                   <li><h1 className=' font-bold text-2xl'>My Self</h1></li>
                   <li><h1 className=' font-bold text-4xl' >Muhammad Saleem</h1></li>
                   <li><h1 className=' font-bold text-2xl' >s/o <br></br> Mehmood Hussain</h1></li>
                   <li><h1 className=' font-bold text-3xl' >I AM A WEB DESIGNER/DEVELOPER <br></br>AND <br></br> DATA ENTRY OPERATOR</h1></li><br></br>
=                      </ul>
           </div>

      <div className='flex '>
       <Image
                   src={require('@/public/mypic.jpg')}
                   alt='Logo'
                   width={300}
                   height={300}
                  className="rounded-full p-5 bg-slate-200"
                        />
           </div>

      
      </div>
  );
}
