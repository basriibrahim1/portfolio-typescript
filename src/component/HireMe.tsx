import React from 'react'
import { CircularText } from './icon'
import Link from 'next/link'

const HireMe: React.FC = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-10'>
        <div className='w-48 h-auto flex items-center justify-center relative'>
            <CircularText className='fill-dark animate-spin-slow'/>
            <Link href='mailto:basriibrahim67067@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-28 h-28 rounded-full font-semibold hover:bg-light hover:text-dark'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe