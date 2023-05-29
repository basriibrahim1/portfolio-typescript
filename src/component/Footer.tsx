import React from 'react'
import Layout from './Layout'
import Link from 'next/link'

const Footer:React.FC = () => {
  return (
    <footer className='w-full border-t border-solid border-dark dark:border-light dark:text-light font-medium text-lg sm:text-base'>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
            <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
            <div className='flex items-center lg:py-2'>
            Build with <Link className='underline underline-offset-2 ml-2' href='/'> Typescript </Link>
            </div>
            <Link href='/'>Get In Touch</Link>
        </Layout>
    </footer>
  )
}

export default Footer