import { type NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Layout from "~/component/Layout";
import profilePic from '../../public/images/pic.jpg'
import AnimatedText from "~/component/AnimatedText";
import Link from "next/link";
import { LinkArrow, Wave } from "~/component/icon";
import HireMe from "~/component/HireMe";

const Home: NextPage = () => {
  return (
    <>
        <Head>
            <title>Home</title>
        </Head>
        <main className="flex items-center text-dark w-full min-h-screen ">
            <Layout className="pt-0">
                <div className="flex items-center justify-between w-full">
                    <div className="w-1/2">
                        <Image src={profilePic} alt="Basri" className="w-3/8 mt-10 h-auto relative z-10 rounded-full"/>
                    </div>
                    <div className="w-1/2 flex flex-col items-center justify-center">
                        <AnimatedText text="Fullstack Website & Mobile Developer" className="!text-7xl"/>
                        <p className="text-base font-medium py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veniam mollitia quaerat, nisi fugiat facere explicabo!</p>
                        <div className="flex items-center self-start mt-2">
                            <Link className="flex items-center bg-dark text-light p-2.5 px-6 rounded-lg text-lg font-semibold hover:bg-light hover:text-dark border-2 border-solid border-transparent hover:border-dark" href='https://drive.google.com/uc?export=download&id=1hTy7ClCDCHW_AZgxvAUVdikZQuZ4nwHf' target="_blank" download={true}>Resume <LinkArrow className="w-6 ml-1"/> </Link>
                            <Link className="ml-4 text-lg font-medium capitalize text-dark underline" href='mailto:basriibrahim67067@gmail.com' target="_blank">Mail me</Link>
                        </div>
                    </div>
                </div>
                <div>
                <Wave className="absolute left-[50%] top-[55%] translate-x-[-50%] z-0 w-full" />
            </div>
            </Layout>
            <HireMe />
           
        </main>
    </>
  )
};

export default Home;
