import Link from 'next/link'
import React from 'react'


const Header = () => {
  return (
    <div  className='  text-blue-200   bg-gray-700'>
     <span className='flex justify-start text-amber-300 text-3xl'>PORTFOLIO</span>
        <ul className=' flex  justify-evenly'>
        <Link href='/'><li className=' hover:bg-slate-500'>HOME</li></Link>
        <Link href='/about'><li className=' hover:bg-slate-500'>ABOUT</li></Link>
        <Link href='contact'><li className=' hover:bg-slate-500'>CONTACT</li></Link>    



        </ul>


    </div>
  )
}

export default Header