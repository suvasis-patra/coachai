import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <nav className='fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-white/10 dark:bg-white/5 shadow-lg p-2 md:p-4'>
        <div className='max-w-5xl mx-auto flex items-center justify-between'>
           <Link href={"/"} className='flex gap-2 items-center'>
              <Image src={"coachai_logo.svg"} alt='CoachAI' height={36} width={36}/>
              <h3 className='font-bold text-2xl'>Coach<span className='text-blue-700'>AI</span></h3>
           </Link>
           <div>
              <Link href={"/login"} className='bg-blue-700 text-gray-50 uppercase hover:bg-blue-500 py-2 px-4 md:px-6 rounded-xl'>Login</Link>
           </div>
        </div>
    </nav>
  )
}

export default Navbar