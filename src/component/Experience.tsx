import React, { useRef } from 'react'
import {motion, useScroll } from 'framer-motion'
import ProgressIcon from './progressIcon';

type DetailsProps = {
    position: string;
    company: string;
    companyLink: string;
    time: string;
    until: string;
    description: string;
}

export const Details: React.FC <DetailsProps> = ({position, company, companyLink, time, until, description}) => {
    const ref = useRef<HTMLLIElement>(null)
    return (
        <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
            <ProgressIcon references={ref}/>
            <motion.div initial={{y:50}} whileInView={{y:0}} transition={{durattion:0.5, type:'spring'}}>
                <h3 className='capitalize font-bold text-2xl'>{position}&nbsp; <a href={companyLink} target='_blank' className='text-primary capitalize'>@{company}</a></h3>
                <span className='capitalize font-medium text-dark/75'>{time} | {until}</span>
                <p className='font-medium w-full'>{description}</p>
            </motion.div>
        </li>
    )
}



const Experience:React.FC = () => {
    const ref = useRef<HTMLDivElement>(null);
    const {scrollYProgress} = useScroll({
        target: ref,
        offset:["start end", "center start"]
    })

  return (
    <div className='my-64'>
        <h2 className='font-bold text-8xl mb-32 w-full text-center'>Experience</h2>
        <motion.div ref={ref} className='w-[75%] mx-auto relative'>
            <motion.div  className='absolute left-8 top-0 w-[4px] h-full bg-dark  origin-top' style={{scaleY:scrollYProgress}}/>
            <ul className='w-full flex flex-col items-start justify-between'>
                <Details position='Fullstack Website & Mobile Developer' company='Pijarcamp' companyLink='' time='Jan 2023' until='May 2023' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas maiores ad dolore fuga aliquam hic adipisci architecto dolores, error a corrupti modi aut quod. Reprehenderit ducimus et laudantium ipsa optio? Eos dolores animi recusandae fugit est'/>

                <Details position='Fullstack Website & Mobile Developer' company='Pijarcamp' companyLink='' time='Jan 2023' until='May 2023' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas maiores ad dolore fuga aliquam hic adipisci architecto dolores, error a corrupti modi aut quod. Reprehenderit ducimus et laudantium ipsa optio? Eos dolores animi recusandae fugit est'/>
           
                <Details position='Fullstack Website & Mobile Developer' company='Pijarcamp' companyLink='' time='Jan 2023' until='May 2023' description='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas maiores ad dolore fuga aliquam hic adipisci architecto dolores, error a corrupti modi aut quod. Reprehenderit ducimus et laudantium ipsa optio? Eos dolores animi recusandae fugit est'/>
            </ul>
            
              
            
        </motion.div>
    </div>
  )
}

export default Experience