import Link from "next/link"
import React from "react"
import Logo from "./logo"
import { useRouter } from "next/router"
import { GithubIcon, LinkedInIcon } from "./icon"
import {motion} from 'framer-motion'

type CustomLinkProps = {
    href: string,
    title: string,
    className?: string
}

const CustomLink: React.FC<CustomLinkProps> = ({href, title, className=""}) => {
    const router = useRouter()
    return (
        <Link href={href} className={`${className} relative group`}>{title}
            <span className={`h-[2px] inline-block bg-dark absolute left-0 -bottom-0.5 group-hover:w-full transition-[width] ease duration-300 ${router.asPath === href ? "w-full" : "w-0"}`}></span>
        </Link>
    )
}

const Navbar:React.FC = () => {
  return (
    <header className="w-full px-32 py-8 font-medium flex items-center justify-between">
        <nav>
            <CustomLink className="mr-4" href="/" title="Home" />
            <CustomLink className="mx-4" href="/about" title="About" />
            <CustomLink className="ml-4" href="/project" title="Projects" />
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
        </nav>
        <div className="absolute left-[50%] top-2 translate-x-[-50%]">
            <Logo />
        </div>
    </header>
  )
}


export default Navbar