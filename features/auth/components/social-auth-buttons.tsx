import { Button } from '@/components/ui/button'
import React from 'react'
import { FaGithub } from 'react-icons/fa'
import { FaGoogle } from 'react-icons/fa6'
import { AuthPage } from '../lib/constants'

const SocialAuthButtons = ({path}:{path:AuthPage}) => {
    const page=path===AuthPage.LOGIN?"login":"register"
  return (
    <div>
        <div className='my-3'>
            <h3 className='text-blue-700 text-center font-bold'>Connect to CoachAI with</h3>
        </div>
        <div className='flex flex-col gap-3'>
           <Button className='flex w-full gap-4 justify-center items-center cursor-pointer'>
              <FaGoogle/>
              <span>{page} with Google</span> 
           </Button>
           <Button className='flex w-full gap-4 justify-center items-center cursor-pointer'>
              <FaGithub/>
              <span>{page} with Github</span>
           </Button>
        </div>
    </div>
  )
}

export default SocialAuthButtons