import {type NextPage } from 'next'
import Head from 'next/head'
import Image, {type StaticImageData } from 'next/image'
import Link from 'next/link'
import React from 'react'
import AnimatedText from '~/component/AnimatedText'
import Layout from '~/component/Layout'
import { GithubIcon } from '~/component/icon'
import recipes from '../../public/images/project/recipes.png'
import ankasa from '../../public/images/project/ankasa.png'
import native from '../../public/images/project/native.png'
import peworld from '../../public/images/project/peworld.png'
import { motion, } from 'framer-motion'
import TransitionEffect from '~/component/TransitionEffect'

const FramerImage = motion(Image)

type FeatureProjectProps = {
    type: string;
    title: string;
    summary: string;
    image: StaticImageData;
    link: string;
    github: string;
}

type ProjectProps = {
    title: string;
    type: string;
    image: StaticImageData;
    github: string
    link: string;
    text: string
}


const FeaturedProject:React.FC<FeatureProjectProps> = ({type, title, summary, image, link, github}) => {
    return (
        <article className='w-full flex items-center justify-between rounded-3xl border border-solid border-dark dark:border-light  bg-light dark:bg-dark shadow-2xl p-12 relative rounded-br-2xl lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem] bg-dark dark:bg-light rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5rem]'/>
            <Link href={link} className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full'>
                <Image src={image} alt={title} className='w-full h-auto'/>
            </Link>

            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-blue-300 font-medium text-xl xs:text-base'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-3xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                    <FramerImage src={image} alt={title} className='w-96 h-auto hidden absolute rounded-lg z-10 border border-solid' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light sm:text-sm'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={github} target='_blank'><GithubIcon className='w-8'/></Link>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark dark:bg-light text-light dark:text-dark p-2 px-6 text-lg font-semibold hover:underline underline-offset-2 sm:px-4 sm:text-base'>Visit Project</Link>
                </div>
            </div>
        </article>
    )
}

const ProjectRest:React.FC<ProjectProps> = ({title, type, image, github, link, text}) => {
    return(
        <article className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark dark:border-light bg-light dark:bg-dark p-6 relative xs:p-4'>

        <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark dark:bg-light rounded-br-3xl md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem] '/>

        <Link href={link} className='w-full cursor-pointer overflow-hidden rounded-lg'>
            <Image src={image} alt={title} className='w-full h-80 object-contain' priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
        </Link>

        <div className='w-full flex flex-col items-start justify-between mt-4 '>
            <span className='text-primary font-medium text-xl lg:text-lg md:text-base'>{type}</span>
            <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                <h2 className='my-2 w-full text-left text-3xl font-bold lg:text-2xl'>{title}</h2>
            </Link>
            <div className='mt-2 flex items-center justify-between w-full'>
                <Link href={link} target='_blank' className='rounded-lg bg-dark dark:bg-light dark:text-dark text-light p-2 px-6 text-lg font-semibold hover:underline underline-offset-2 md:text-base'>{text}</Link>
                <Link href={github} target='_blank'><GithubIcon className='w-8 md:w-6'/></Link>
            </div>
        </div>
    </article>
    )
}

const Project: NextPage = () => {
  return (
    <>
        <Head>
            <title>Portfolio | Project Page</title>
        </Head>
        <TransitionEffect />
        <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
            <Layout className='pt-16'>
                <AnimatedText text='Project Are Appeared Here' className='mb-16 lg:!text-7xl sm:!mb-8 xs:!text-4xl'/>
                <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-x-24 sm:gap-x-0'>
                    <div className='col-span-12'>
                        <FeaturedProject 
                            type='Website'
                            title='Ankasa Flight'
                            summary='This website is made for users who want to book airline tickets on the website. Users can interact to retrieve ticket details, book passes, update profiles, get departure and destination schedules, payment(total + subtotal) and also search for tickets using pagination. For the frontend, this website is made using Next JS, Axios, Redux, Material UI and tailwind. applying system  CSR(Client-Side-Rendering) and SSR(Server-Side-Rendering). for the backend it uses Express Js and PostgreSQL with the help of JWT Token, Multer, Argon2 and Cors.                            '
                            image={ankasa}
                            link='https://ankasa-flight.vercel.app/'
                            github='https://github.com/basriibrahim1/ankasa-fe-next.git'
                        />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <ProjectRest 
                            type='Website'
                            title='Recipes Club Website'
                            image={recipes}
                            link='https://recipes-frontend-website.vercel.app'
                            github='https://github.com/basriibrahim1/recipes-frontend-website.git'
                            text='Visit'
                            />
                    </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <ProjectRest 
                                type='Mobile'
                                title='Recipes Club Application'
                                image={native}
                                link='https://drive.google.com/uc?export=download&id=1Uyj5r4FMZXYZSL7-gVtKkKXKDrZFYFXJ'
                                github='https://github.com/basriibrahim1/recipes-RN.git'
                                text='Download'
                            />
                        </div>
                    <div className='col-span-6 sm:col-span-12'>
                        <ProjectRest 
                            type='Website'
                            title='Pew World'
                            image={peworld}
                            link='https://ankasa-flight.vercel.app/'
                            github='https://github.com/basriibrahim1/pew-world-fe.git'
                            text='Visit'
                        />
                    </div>
                </div>
            </Layout>
        </main>
    </>
  )
}

export default Project