import React from 'react'
import {motion} from 'framer-motion'

const container = {
    hidden: {opacity: 0},
    visible: (i = 1) => ({
        opacity: 1,
        transition: {
            staggerChildren: 0.03, delayChildren: 0.05 * i
        }
    })
}

const child = {
    visible: {
        opacity: 1,
        x: 0,
        y: 0,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 50,
            duration: 2
        }
    },
    hidden: {
        opacity: 0,
        x: -20,
        y: 10,
        transition: {
            type: "spring",
            damping: 12,
            stiffness: 100,
            duration: 2
        }
    }
}


type AnimatedTextProps = {
    text: string;
    className?: string;
}

const AnimatedText: React.FC<AnimatedTextProps> = ({text, className=""}) => {
  return (
    <div className='w-full py-2 sm:py-0 flex items-center justify-center overflow-hidden'>
        <motion.h1 className={` w-full text-dark font-bold dark:text-light capitalize text-6xl ${className}`} variants={container} initial="hidden" animate="visible">
            {text.split(" ").map((item, index) => (
                <motion.span variants={child} key={index} className='inline-block'>{item}&nbsp;</motion.span>
            ))}
        </motion.h1>
    </div>
  )
}

export default AnimatedText