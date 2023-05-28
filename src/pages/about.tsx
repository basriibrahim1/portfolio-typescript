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
        <main className='flex w-full flex-col items-center justify-center'>
            <Layout className='pt-16'>
                <AnimatedText text='Live until you die' className='mt-16'/>
                <div className='grid w-full grid-cols-8 gap-16'>
                    <div className='col-span-3 flex flex-col items-start justify-start'>
                        <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                        <p className='font-medium'>
                            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas maiores ad dolore fuga aliquam hic adipisci architecto dolores, error a corrupti modi aut quod. Reprehenderit ducimus et laudantium ipsa optio? Eos dolores animi recusandae fugit est
                        </p>
                        <p className='my-4 font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde, recusandae in numquam, architecto, vitae nulla voluptates beatae ratione quod minima! Fugit itaque tenetur accusantium unde, odit, temporibus, eaque iure possimus illum quos id architecto deleniti nisi ex et voluptatem.
                        </p>
                        <p className='my-4 font-medium'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum unde, recusandae in numquam, architecto, vitae nulla voluptates beatae ratione quod minima! Fugit itaque tenetur accusantium unde, odit, temporibus, eaque iure possimus illum quos id architecto deleniti nisi ex et voluptatem.
                        </p>
                    </div>

                <div className='col-span-3 relative h-max rounded-2xl border-2 border-solid border-dark bg-light p-8 items-center justify-center flex'>
                    <div className='absolute top-0 -right-3 -z-10 w-[102%] h-[103%] rounded-3xl bg-dark '/>
                    <Image src={profilePic} alt='user' className=''/>
                </div>
                
                <div className='col-span-2 flex flex-col items-end justify-between '>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumber value={50}/>
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75'>Satisfied Clients</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumber value={4}/>
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75'>Project Completed</h2>
                    </div>
                    <div className='flex flex-col items-end justify-center'>
                        <span className='inline-block text-7xl font-bold'>
                            <AnimatedNumber value={1}/>
                        </span>
                        <h2 className='text-xl font-medium capitalize text-dark/75'>Years Experiences</h2>
                    </div>
                </div>                              

                </div>

                <Skills />
                <Experience />
            </Layout>
        </main>
    </>
  )
}

export default About