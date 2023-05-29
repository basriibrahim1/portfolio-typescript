import React from 'react'
import { motion, useScroll } from 'framer-motion'

type ProgressPros = {
    references: React.RefObject<HTMLElement>
}

const ProgressIcon: React.FC<ProgressPros> = ({references}) => {
    const {scrollYProgress} = useScroll({
        target: references,
        offset:["center end", "center center"]
    })
  return (
    <figure className='absolute -left-1 sm:left-0 stroke-dark/75 dark:stroke-light/75'>
        <svg className='-rotate-90 md:w-[60px] md:h-[60px] xs:w-[40px] xs:h-[40px]' width="75" height="75" viewBox='0 0 100 100'>
            <circle cx='75' cy='50' r="20" className='stroke-primary dark:stroke-primaryDark stroke-1 fill-none'/>
            <motion.circle cx='75' cy='50' r="20" className='stroke-[4px] fill-light ' style={{
                pathLength: scrollYProgress
            }}/>
            <circle cx='75' cy='50' r="10" className='animate-pulse stroke-1 fill-primary'/>
        </svg>
    </figure>
  )
}

export default ProgressIcon