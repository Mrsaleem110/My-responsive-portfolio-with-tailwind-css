import React from 'react'

const About = () => {
  return (
    <div className='text-yellow-400' style={{
      backgroundImage: "url('/bg.jpg')", // Public folder ka path
      backgroundSize: 'cover', // Image ko cover karne ke liye
      backgroundPosition: 'center ', // Center mein position karne ke liye
      height: '100vh', // Full viewport height
    }}
    >
      
        <h1 className='flex justify-center font-bold text-2xl '>Education</h1>
        <ul>
          <li className='flex justify-center font-bold text-2xl'>Associate Degree in Arts Ada/Ba from Karachi University.</li>
          <li className='flex justify-center font-bold text-2xl'>Fsc Pre Engineering from Nabi Bagh College.</li>
          <li className='flex justify-center font-bold text-2xl'>Matric in Science from Daffodils Secondary School.</li>
          </ul>
      
<br></br>
        <h1 className='flex justify-center align-middle font-bold text-2xl' >Skills</h1>
        <p className='flex justify-center font-bold text-2xl'>HTML|BOOTSTRAP|TAILWIND CSS|CSS<br></br>|JAVASCRIPT|TYPESCRIPT|NEXT.JS|FIGMA</p>
<br></br>
        <h1 className='flex justify-center font-bold text-2xl'>Certificate</h1>
        <ul>
          <li className='flex justify-center font-bold text-2xl'>GENERATIVE A.I ENGINEERING DEGREE IN PROGRESS.</li>
          <li className='flex justify-center font-bold text-2xl'>MICROSOFT OFFICE.</li>
          </ul>
    
    </div>
  )
}

export default About