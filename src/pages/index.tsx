import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "~/component/Layout";
import profilePic from '../../public/images/pic.jpg'
import AnimatedText from "~/component/AnimatedText";
import Link from "next/link";
import { LinkArrow, Wave } from "~/component/icon";
import HireMe from "~/component/HireMe";
import { useEffect, useState } from "react";
import Preloader from "~/component/Preloader";

const Home: NextPage = () => {
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 3000);
      }, []);

  return (
    <>
        <Head>
            <title>Home</title>
        </Head>
        {isLoading ? <Preloader isLoading={isLoading}/> : 
        
        <main className="flex items-center text-dark w-full min-h-screen dark:text-light">
            <Layout className="pt-0">
                <div className="flex items-center justify-between w-full 2xl:space-x-5 lg:flex-col">
                    <div className="w-1/2 md:w-full">
                        <Image src={profilePic} alt="Basri" className="w-3/8  mt-10 h-auto relative z-10 rounded-full lg:hidden md:inline-block md:w-full xl:w-full" priority sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"/>
                    </div>
                    <div className="w-1/2 flex flex-col items-start self-center lg:w-full lg:text-center md:mt-3">
                        <AnimatedText text="Hi! i am Basri Ibrahim" className="!text-7xl xl:!text-5xl xl:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl"/>
                        <p className="text-base font-medium my-4 md:text-sm sm:text-xs items-start justify-start"><i>Fullstack Website & Mobile Developer</i></p>
                        <div className="flex items-center self-start mt-2 xl:self-center">
                            <Link className="flex items-center bg-dark dark:bg-light text-light dark:text-dark p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:dark:bg-dark hover:text-dark border-2 hover:dark:text-light border-solid border-transparent hover:border-dark hover:dark:border-light md:p-2 md:px-4 md:text-base" href='https://drive.google.com/uc?export=download&id=1GsqTtDp6Hiq4NzOkRaPfUUdWovHlRF-p' target="_blank" download={true}>Resume <LinkArrow className="w-6 ml-1"/> </Link>
                            <Link className="ml-4 text-lg font-medium capitalize text-dark p-3 dark:text-light underline md:text-base " href='mailto:basriibrahim67067@gmail.com' target="_blank">Mail me</Link>
                        </div>
                    </div>
                </div>
                <div className="lg:hidden flex">
                <Wave className="absolute left-[50%] lg:top-[50%] top-[65%] translate-x-[-50%] z-0 w-full " />
                </div>
            </Layout>
            <HireMe />
        </main>
        }
    </>
  )
};

export default Home;
