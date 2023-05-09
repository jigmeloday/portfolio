import { SOCIAL_ICONS } from '@/components/icons/icons';
import { AnimatePresence, motion } from 'framer-motion';
import img  from '../../../public/images/profile.png';
import Image from 'next/image';

function Landing(){
    return(

            <div className='flex flex-col justify-center items-center w-screen min-h-screen '>
                <AnimatePresence>
                <motion.div
                    initial={{ y:-100  }}
                    animate={{ y:0 }}
                    transition={{ duration: 0.9 }}
                    className='flex items-center justify-center bg-primary-dark shadow-2xl relative rounded-full w-[200px] h-[200px] overflow-hidden' >
                    <Image src={img} alt='profile' height={240}  className='rounded-full'  />
                </motion.div>

                <div className='pt-[38px] text-center'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-[40px] font-8'> Jigme Lodey </motion.h1>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                        className='pt-[8px] text-[24px]'>
                        I am Software
                        <span className='text-primary-main pl-[6px]'>Developer</span>
                    </motion.span>
                    <div className='py-[30px] flex gap-[18px] justify-center'>
                        {
                            SOCIAL_ICONS.map(({ id, name }) => (
                                <motion.div
                                    key={id}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ duration: 1.4, delay: 0.9 }}
                                    className='text-[34px] cursor-pointer shadow-2xl text-primary-main hover:scale-150 translation duration-300 ' >
                                    {name}
                                </motion.div>
                            ))
                        }
                    </div>

                </div>
                </AnimatePresence>

            </div>
    );
}

export default Landing;