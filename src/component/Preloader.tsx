import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

type PreloaderProps = {
  isLoading: boolean;
};

const Preloader: React.FC<PreloaderProps> = ( isLoading ) => {
    const [showPreloader, setShowPreloader] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      setTimeout(() => {
        setShowPreloader(false);
      }, 2000);
    }
  }, [isLoading]);

  return (
    <>
      {showPreloader && (
        <div>
          <motion.div
            className="fixed top-0 left-0 w-full h-full bg-dark flex justify-center items-center z-30"
            initial={{ width: '0%' }}
            animate={{ width: '50%' }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            exit={{opacity:0, width:'0%',transition:{ease:'easeInOut', duration: 1} }}
          ></motion.div>
          <motion.div initial={{top:0, right:'49%'}} animate={{top:'50%'}} transition={{duration:1, delay:0.2}} className="top-0 w-[40px] h-[40px]  border-2 border-solid rounded-lg animate-spin-slow absolute z-50"></motion.div>
          <motion.div
            className="fixed top-0 right-0 w-full h-full bg-dark flex justify-center items-center z-30"
            initial={{ width: '0%' }}
            animate={{ width: '50%' }}
            transition={{ ease: 'easeInOut', duration: 1 }}
            exit={{opacity:0, width: '0%', transition: { ease: 'easeInOut', duration: 1 } }}
          ></motion.div>
        </div>
      )}
    </>
  );
};

export default Preloader;
