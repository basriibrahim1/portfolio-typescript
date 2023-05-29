import React from 'react'
import {motion} from 'framer-motion'

type skill = {
    name: string,
    x: string,
    y: string
}


const Skill: React.FC<skill> = ({name, x, y}) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-3 px-6 shadow-dark cursor-pointer absolute lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:dark:bg-transparent xs:text-dark xs:dark:text-light xs:font-bold' whileHover={{scale:1.5}}
        whileInView='visible' 
        initial='hidden'
        animate={{x: x, y}}
        transition={{duration:1}}>
                {name}
            </motion.div>
    )
}

const Skills: React.FC = () => {
  return (
    <>
        <h2 className='font-bold text-8xl mt-64 w-full text-center md:text-6xl md:mt-32'>Skills</h2>
        <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark lg:h-[80vh] sm:h-[60vh] xs:h-[50vh] 
        lg:bg-circularLightLg lg:dark:bg-circularDarkLg
        md:bg-circularLightMd md:dark:bg-circularDarkMd
        sm:bg-circularLightSm sm:dark:bg-circularDarkSm
        
        '>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-4 px-8 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale:1.5}} transition={{duration:1}}>
                Web
            </motion.div>
            <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark dark:bg-light text-light dark:text-dark py-4 px-6 shadow-dark cursor-pointer lg:p-6 md:p-4 xs:text-xs xs:p-2' whileHover={{scale:1.5}} transition={{duration:1}}>
                Mobile
            </motion.div>
            <Skill name='HTML' x='-22vw' y='2vw'/>
            <Skill name='CSS' x='-5vw' y='-10vw'/>
            <Skill name='Javascript' x='20vw' y='6vw'/>
            <Skill name='React JS' x='13vw' y='-12vw'/>
            <Skill name='Next JS' x='33vw' y='-5vw'/>
            <Skill name='Typescript' x='0vw' y='-17.5vw'/>
            <Skill name='Express JS' x='-27vw' y='18vw'/>
            <Skill name='React Native' x='18vw' y='18vw'/>
        </div>
    </>
  )
}

export default Skills