import {type NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AnimatedText from '~/component/AnimatedText'
import profilePic from '../../public/images/basri.png'
import Layout from '~/component/Layout'
import { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '~/component/Skills'
import Experience from '~/component/Experience'
import Education from '~/component/Education'
import TransitionEffect from '~/component/TransitionEffect'

type AnimatedNumberProps = {
    value: number
}


const AnimatedNumber: React.FC<AnimatedNumberProps> = ({value}) => {
const ref = useRef<HTMLSpanElement>(null)
const motionValue = useMotionValue(0)
const springValue = useSpring(motionValue, {
    duration: 5000  
})
const isInView = useInView(ref, {once: true})

useEffect(() => {
    if(isInView){
        motionValue.set(value);
    }
},[isInView, value, motionValue])

useEffect(() => {
    springValue.on('change', (latest: number) => {
        if(ref.current && parseFloat(latest.toFixed(0)) <= value){
            ref.current.textContent = latest.toFixed(0)
        }
    })
},[springValue, value])
    return <span ref={ref}></span>
}


const About: NextPage = () => {
  return (
    <>
        <Head>
            <title>Portfolio | About Page</title>
        </Head>
        <TransitionEffect />
        <main className='flex w-full flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Work Hard, Dream Big and Never Give Up!' className='mb-16 lg:!text-7xl sm:!text-6xl xs:!text-4xl sm:!mb-8 !text-center'/>
                <div className='grid w-full grid-cols-8 gap-16 sm:gap-8'>
                    <div className='col-span-3 flex flex-col items-start justify-start xl:col-span-4 md:order-2 md:col-span-8'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75 dark:text-light/75'>Biography</h2>
                        <p className='font-medium'>
                            Hello Everyone, I am bootcamp graduated from Pijarcamp as a fullstack developer specializing in website and mobile app development. With strong skills in frontend technologies like HTML, CSS, and JavaScript, I can create attractive and responsive user interfaces using frameworks such as React, Next JS using Typescript/React.  
                        </p>
                        <p className='my-4 font-medium'>
                            Backend, I excel in JavaScript (Node.js) and can build secure APIs with frameworks like Express using ORM Prisma.
                        </p>
                        <p className='my-4 font-medium'>
                        I also have experience in cross-platform mobile app development using React Native. With a solid understanding of databases and a passion for staying up-to-date with the latest technologies, I can deliver innovative solutions that meet business needs and provide excellent user experiences.
                        </p>
                    </div>

                <div className='col-span-3 xl:col-span-4  relative h-max rounded-2xl border-2 border-solid border-dark dark:border-light bg-light dark:bg-dark  p-8 items-center justify-center flex md:order-1 md:col-span-8 '>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark dark:bg-light'/>
                    <Image src={profilePic} alt='user' className='w-full h-auto rounded-2xl' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </div>
                
                <div className='col-span-2 flex flex-col items-end justify-around xl:col-span-8 xl:flex-row xl:items-center md:order-3'>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xd:text-4xl'>
                            <AnimatedNumber value={4}/>
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xd:text-sm'>Project Completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center xl:items-center'>
                        <span className='inline-block text-7xl font-bold md:text-6xl sm:text-5xl xd:text-4xl'>
                            <AnimatedNumber value={1}/>
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75 dark:text-light/75 xl:text-center md:text-lg sm:text-base xd:text-sm'>Years Experiences</h2>
                    </div>
                </div>                              

                </div>

                <Skills />
                <Experience />
                <Education />
            </Layout>
        </main>
    </>
  )
}

export default About