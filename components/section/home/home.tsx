import { motion } from 'framer-motion';
import Image from 'next/image';
import Button from '@/components/custom-botton/button';
import { MdKeyboardArrowRight } from 'react-icons/md';
import img  from '../../../public/images/landing-svg.svg';
import { Weather } from '@/components/section/home/helper';
import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { AiFillStar } from 'react-icons/ai';
import { STARS } from '@/components/section/home/constant/stars.constant';
import { useTypedSuperpower } from '@/shared/custom-hook/typewriter';

function Landing(){
    const getTime = Weather();
    const typeWriter = useTypedSuperpower(['User Experience Designer', 'User Interface Developer', 'Frontend Developer', 'Backend Developer']) ;
    return(
        <div className='flex min-h-screen justify-end px-[42px]'>
            <div className='flex w-[76%]'>
               <div className='flex flex-col justify-center px-[22px] w-[40%]'>
                   <motion.span
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.3, duration: 0.9 }}
                       viewport={ { once: true, amount: 0.9 } }
                       className='pt-[6px] pb-[4px] font-5'>
                       HI, THERE! 👋 I AM
                   </motion.span>
                   <motion.span
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.5, duration: 0.9 }}
                       viewport={ { once: true, amount: 0.9 } }
                       className='pb-[4px] font-6 text-[32px] text-primary-main'>
                       Jigme Lodey
                   </motion.span>
                   <motion.span
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.7, duration: 0.9 }}
                       viewport={ { once: true, amount: 0.9 } }
                       className='py-[8px] font-3 text-[14px]'>
                       I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                   </motion.span>
                   <motion.div
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.9, duration: 0.9 }}
                       viewport={ { once: true, amount: 0.9 } }
                       className='flex pt-[22px] items-center'>
                       <span className='text-center text-[24px]'>
                           <MdKeyboardArrowRight />
                       </span>
                       <span className='text-primary-main'> {typeWriter} </span>
                       <span className='animate-pulse'>_</span>
                   </motion.div>
                   <motion.div
                       initial={{ y: 100, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       transition={{ delay: 0.9, type:'spring', bounce: 0.8 }}
                       viewport={ { once: true, amount: 0.3, } }
                       className='py-[20px]'
                   >
                       <Button label='Hire Me' type='button' variant='contained' click={() => alert('hello')} />
                   </motion.div>
               </div>
                <div className='flex items-center justify-center w-full pr-[24px] relative'>
                    <motion.div
                        initial={{ x:-500, opacity:0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 5.9 }}
                        viewport={ { once: true, amount: 0.3, } }
                        className='flex items-center justify-center  relative  w-[300px] h-[300px] overflow-hidden'>
                        <Image src={img} alt='profile' height={540}  className='rounded-full'  />
                    </motion.div>
                    {
                        getTime === 'night' && STARS.map(({ classes, duration, delay}) => (
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: delay, duration: duration }}
                                viewport={ { once: true, amount: 0.3, } }
                                key={ classes}

                                className={`${classes} animate-pulse absolute`}>
                                <AiFillStar />
                            </motion.div>
                        ))
                    }
                    <motion.div
                        initial={{ scale:0, opacity:0.5 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.9, duration: 5.9 }}
                        viewport={ { once: true, amount: 0.3, } }
                        className='absolute right-[60%] top-[28%]'>
                        {
                            getTime === 'night' ? <BsFillMoonFill className='text-text-moon text-[32px]' /> : <BsFillSunFill className='text-text-sun text-[42px]' />
                        }
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

export default Landing;