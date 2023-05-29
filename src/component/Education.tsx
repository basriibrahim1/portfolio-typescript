import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import ProgressIcon from './progressIcon';

type DetailsProps = {
    type: string;
    place: string;
    description: string;
    time: string;
}

export const Details: React.FC <DetailsProps> = ({type, time, place, description}) => {
    const ref = useRef<HTMLLIElement>(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-full mx-auto flex flex-col items-center justify-between md:w-[80%]'>
            <ProgressIcon references={ref}/>
            <motion.div initial={{y:50}} className='w-1/2' whileInView={{y:0}} transition={{durattion:0.5, type:'spring'}}>
                <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>{type}</h3>
                <span className='capitalize font-medium text-dark/75 xs:text-sm'>{time} | {place}</span>
                <p className='font-medium md:text-sm'>{description}</p>
            </motion.div>
        </li>
    )
}



const Education:React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end", "center start"]
    }) 

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>Education</h2>
        <motion.div ref={ref} className='w-[75%] mx-auto relative lg:w-[90%] md:w-full'>
            <motion.div  className='absolute left-8 top-0 w-[4px] h-full bg-dark dark:bg-light origin-top md:w-[2px] md:left-[30px] xs:left-[20px]' style={{scaleY:scrollYProgress}}/>
            <ul className='w-full flex flex-col items-start justify-between xs:ml-2'>
    
                <Details 
                type='Fullstack Website & Mobile Developer' 
                time='Jan 2023 - May 2023' 
                place='Pijarcamp' 
                description='Learning program on Pijarcamp for 3 months, for Frontend using HTML, CSS and REACT JS and Next JS. For backends using Express, PostgreSQL. And for mobile, use React Native. Make CRUD from database, learning team project with github. agile and scrum, knowing and learning about clean code and also slicing UI/UX. good experience in Redux, Redis, JWT, Multer, Argon2, Rest API.'/>

                <Details 
                type='Highschool' 
                time='Jun 2015 - July 2018' 
                place='SMA Pasundan 3 Cimahi' 
                description='Learn social science, economics, math, sociology'/>
            </ul>          
            
        </motion.div>
    </div>
  )
}

export default Education