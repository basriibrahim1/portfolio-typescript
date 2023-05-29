import React from 'react'
import { CircularText } from './icon'
import Link from 'next/link'

const HireMe: React.FC = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden z-10 md:right-8 md:left-auto md:top-0 md:bottom-auto md:absolute'>
        <div className='w-48 md:w-24 h-auto flex items-center justify-center relative'>
            <CircularText className='fill-dark animate-spin-slow dark:fill-slate-500'/>
            <Link href='mailto:basriibrahim67067@gmail.com' className='flex items-center justify-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light  shadow-md border border-solid border-dark dark:border-light w-28 h-28 rounded-full font-semibold hover:bg-light hover:text-dark md:w-14 md:h-14 md:text-[14px]'>Hire Me</Link>
        </div>
    </div>
  )
}

export default HireMe