import React from 'react'

const AuthLayout = ({children}:{children:React.ReactNode}) => {
  return (
    <section className='flex w-full h-screen justify-center items-center'>
        {children}
    </section>
  )
}

export default AuthLayout