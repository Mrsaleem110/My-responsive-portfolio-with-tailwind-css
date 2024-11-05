// import React from 'react'

// const About = () => {
//   return (
//     <div className='bg-black text-yellow-400 h-screen p-7' 
//     >
      
//         <h1 className='flex justify-center font-bold text-4xl '>Education</h1>
//         <ul>
//           <li className='flex justify-center font-bold text-2xl'>Associate Degree in Arts Ada/Ba from Karachi University.</li>
//           <li className='flex justify-center font-bold text-2xl'>Fsc Pre Engineering from Nabi Bagh College.</li>
//           <li className='flex justify-center font-bold text-2xl'>Matric in Science from Daffodils Secondary School.</li>
//           </ul>
//           <h1 className='flex justify-center font-bold text-4xl '>Certificate</h1>

//         <ul>
//           <li className='flex justify-center font-bold text-2xl'>GENERATIVE A.I ENGINEERING DEGREE IN PROGRESS.</li>
//           <li className='flex justify-center font-bold text-2xl'>MICROSOFT OFFICE.</li>
//           </ul>
    
//     </div>
//   )
// }

// export default About

import React from 'react';

const About = () => {
  return (
    <div className='bg-black text-yellow-300 min-h-screen p-4 md:p-7'>
      <h1 className='text-center font-bold text-2xl sm:text-3xl md:text-4xl'>
        Education
      </h1>
      <ul className='space-y-4'>
        <li className='text-center font-semibold text-xl sm:text-2xl md:text-3xl'>
          Associate Degree in Arts Ada/Ba from Karachi University.
        </li>
        <li className='text-center font-semibold text-xl sm:text-2xl md:text-3xl'>
          Fsc Pre Engineering from Nabi Bagh College.
        </li>
        <li className='text-center font-semibold text-xl sm:text-2xl md:text-3xl'>
          Matric in Science from Daffodils Secondary School.
        </li>
      </ul>

      <h1 className='mt-8 text-center font-bold text-2xl sm:text-3xl md:text-4xl'>
        Certificate
      </h1>
      <ul className='space-y-4'>
        <li className='text-center font-semibold text-xl sm:text-2xl md:text-3xl'>
          GENERATIVE A.I ENGINEERING DEGREE IN PROGRESS.
        </li>
        <li className='text-center font-semibold text-xl sm:text-2xl md:text-3xl'>
          MICROSOFT OFFICE.
        </li>
      </ul>
    </div>
  );
};

export default About;
