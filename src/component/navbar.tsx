import Link from "next/link"
import React, { useState } from "react"
import Logo from "./logo"
import { useRouter } from "next/router"
import { GithubIcon, LinkedInIcon, MoonIcon, SunIcon } from "./icon"
import {motion} from 'framer-motion'
import useThemeSwitcher from "./hooks/useThemeSwitcher"

type CustomLinkProps = {
    href: string,
    title: string,
    className?: string
}

type CustomMobileLinkProps = {
    href: string,
    title: string,
    className?: string;
    toggle: () => void
}

const CustomLink: React.FC<CustomLinkProps> = ({href, title, className=""}) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>{title}
            <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-light`}></span>
        </Link>
    )
}

const CustomMobileLink: React.FC<CustomMobileLinkProps> = ({href, title, className="", toggle}) => {
    const router = useRouter()
    const handleClick = () => {
        router.push(href)
            .then(() => {
                toggle();
            })
            .catch((error) => {
                console.log(error);
            });
    };
    return (
        <button className={`${className} relative group text-light dark:text-dark my-2`} onClick={handleClick}>{title}
            <span className={`h-[2px] inline-block bg-light absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"} dark:bg-dark`}></span>
        </button>
    )
}

const Navbar:React.FC = () => {
    const [mode, setMode] = useThemeSwitcher()

    const handleModeToggle = () => {
        if (typeof setMode === 'function') {
          setMode(mode === 'light' ? 'dark' : 'light');
        }
      };

    const [open, setOpen] = useState<boolean>(false)
    const handleClick = () => {
        setOpen(!open)
    }

  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between bg-light dark:bg-dark dark:text-light relative z-10 lg:px-16 md:px-12 sm:px-8">

        <button className="flex-col justify-center items-center hidden lg:flex" onClick={handleClick}>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${open ? 'rotate-45 translate-y-1 ' : '-translate-y-0.5'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${open ? 'opacity-0' : 'opacity-1'}`}></span>
            <span className={`bg-dark dark:bg-light block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${open ? '-rotate-45 -translate-y-1 ' : 'translate-y-0.5'}`}></span>
        </button>


        <div className="w-full flex justify-between item-center lg:hidden">
        <nav>
            <CustomLink className="mr-4" href="/" title="Home" />
            <CustomLink className="mx-4" href="/about" title="About" />
            <CustomLink className="ml-4" href="/projects" title="Projects" />
        </nav>
        <nav className="flex items-center justify-center">
            <motion.a href="https://github.com/basriibrahim1" target="_blank" whileHover={{
                y: -2
            }}
            whileTap={{
                scale:0.9
            }}
            className="w-6 mr-3">
                <GithubIcon className=""/>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/basriibrahim/" target="_blank" whileHover={{
                y: -2
            }}
            whileTap={{
                scale:0.9
            }}
            className="w-6 ml-3">
                <LinkedInIcon className=""/>
            </motion.a>

            <button onClick={handleModeToggle} className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === 'dark' ? 'bg-light text-dark':  'bg-dark text-light' }`}>
                {mode === 'dark' ? <SunIcon className="fill-dark"/> : <MoonIcon className="fill-dark"/>}
            </button>
        </nav>
        </div>

        {open && 
        <motion.div initial={{scale:0, opacity:0, x:'-50%', y:'-50%'}} animate={{scale:1, opacity:1}} className="min-w-[70vw] flex flex-col justify-between item-center z-30 bg-dark/90 dark:bg-light/75 rounded-lg backdrop-blur-md py-32 fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <nav className="flex items-center flex-col justify-center ">
            <CustomMobileLink  href="/" title="Home" toggle={handleClick}/>
            <CustomMobileLink  href="/about" title="About" toggle={handleClick}/>
            <CustomMobileLink  href="/projects" title="Projects" toggle={handleClick}/>
        </nav>
        <nav className="flex items-center justify-center flex-wrap mt-2">
            <motion.a href="https://github.com/basriibrahim1" target="_blank" whileHover={{
                y: -2
            }}
            whileTap={{
                scale:0.9
            }}
            className="w-6 mr-3 bg-light dark:bg-dark rounded-full">
                <GithubIcon className=""/>
            </motion.a>
            <motion.a href="https://www.linkedin.com/in/basriibrahim/" target="_blank" whileHover={{
                y: -2
            }}
            whileTap={{
                scale:0.9
            }}
            className="w-6 ml-3">
                <LinkedInIcon className=""/>
            </motion.a>

            <button onClick={handleModeToggle} className={`ml-6 flex items-center justify-center rounded-full p-1 ${mode === 'dark' ? 'bg-light text-dark':  'bg-dark text-light' }`}>
                {mode === 'dark' ? <SunIcon className="fill-dark"/> : <MoonIcon className="fill-dark"/>}
            </button>
        </nav>
        </motion.div>
        }      


        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
        </div>
    </header>
  )
}


export default Navbar