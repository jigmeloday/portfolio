import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/custom-botton/button';
import { MdKeyboardArrowRight } from 'react-icons/md';
import img  from '../../../public/images/landing-svg.svg';
import Typewriter from '@/components/Typewriter';

function Landing(){
    // const getTime = Weather();
    return(
        <div className='flex min-h-screen justify-start lg:justify-end'>
            <div className='lg:w-[74%] w-full md:px-[16px] md:px-[40px] lg:px-[8px] '>
                <div className='flex flex-col items-center lg:items-start md:py-[0] py-[26px] px-[32px] lg:px-[0]'>
                    <div className='flex w-full'>
                        <div className='flex z-10 flex-col justify-center min-h-screen w-[100%] '>
                            <motion.h3
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3, duration: 0.9 }}
                                viewport={ { once: true, amount: 0.9 } }
                                className='font-6 text-[16px] md:text-[24px]'>
                                HI, THERE! 👋 I AM
                            </motion.h3>
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5, duration: 0.9 }}
                                viewport={ { once: true, amount: 0.9 } }
                                className='py-[12px] lg:py-[4px] flex cursor-fancy '>
                                {
                                    ['t', 'e', 'n', 'z', 'i', 'n', '_', 'n', 'o', 'r', 'a', 'n', 'g'].map((item) => (
                                        <h1 key={item} className='font-7 text-[20px] md:text-[32px] text-primary-main hover:text-black hover:scale-150 transition delay-1500 duration-500 ease-in-out'>
                                            { item === '_' ? <span className='px-[4px]'/> : item.toUpperCase()}
                                        </h1>
                                    ))
                                }
                            </motion.div>
                            <div className='md:w-[400px] pt-[14px]'>
                                <motion.div
                                    initial={{ opacity: 0, y: 80}}
                                    whileInView={{ opacity: 0.7, y: 0}}
                                    transition={{ delay: 0.6, duration: 0.9 }}
                                    viewport={ { once: true, amount: 0.9 } }
                                >
                                    <span
                                        className='text-[12px] md:text-[16px] leading-normal '>
                                        I’m a software engineer specializing in aritificial Intelligence.
                                    </span>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, x: -20}}
                                    whileInView={{ opacity: 0.9, x:0}}
                                    transition={{ delay: 0.9, duration: 1.5 }}
                                    viewport={ { once: true, amount: 0.9 } }
                                    className='flex mt-[12px] py-[4px] items-center'>
                                    <span className='text-[16px] md:text-[24px]'>
                                        <MdKeyboardArrowRight />
                                    </span>
                                    <Typewriter />
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, y: 50}}
                                    whileInView={{ opacity: 1, y:0}}
                                    transition={{ delay: 0.9, type: 'spring', bounce: 0.8}}
                                    viewport={ { once: true, amount: 0.9 } }
                                    className='my-[20px]'>
                                    <Button className='h-[40px] w-[80px] font-4 text-[14px] md:h-[50px] md:w-[120px] md:text-[18px]' label='Hire Me' type='button' variant='contained' click={() => alert('hello')}  />
                                </motion.div>
                            </div>
                        </div>
                        <div className='flex flex-col items-center justify-center min-h-screen w-full'>
                            <motion.div
                                initial={{ opacity: 0}}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.2, duration: 1.2}}
                                viewport={ { once: true, amount: 0.2 } }
                                className='flex  '>
                                <motion.div
                                    initial={{ x: -200 }}
                                    whileInView={{ x: 0 }}
                                    transition={{ delay: 0.2, duration: 2.5}}
                                    viewport={ { once: true, amount: 0.2 } }
                                    className='flex z-0  relative w-full h-[150px] md:w-[300px] md:h-[300px]'>
                                    <Image src={img} alt='profile' height={540}  className='rounded-full'  />
                                </motion.div>
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Landing;