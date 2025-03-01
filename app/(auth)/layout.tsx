import Image from 'next/image'
import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className='flex w-full mt-5 md:justify-between justify-center gap-6 items-center'>
      <div className='md:flex items-center justify-center hidden'>
        <Image src={"coachai_auth.svg"} alt='coachai' height={400} width={400}/>
       </div>
       <div className='mt-6'>
         <div className='min-w-[350px] p-8'>
            {children}
          </div>
       </div>
    </section>
  )
}

export default AuthLayout