// import { motion } from 'framer-motion';
import Image from 'next/image';
// import Button from '@/components/custom-botton/button';
import { MdKeyboardArrowRight } from 'react-icons/md';
import img  from '../../../public/images/landing-svg.svg';
// import { Weather } from '@/components/section/home/helper';
// import { BsFillMoonFill, BsFillSunFill } from 'react-icons/bs';
import { useTypedSuperpower } from '@/shared/custom-hook/typewriter';
import CustomContainer from '@/components/custom-container/custom-container';

function Landing(){
    // const getTime = Weather();
    const typeWriter = useTypedSuperpower(['User Experience Designer', 'User Interface Developer', 'Frontend Developer', 'Backend Developer']) ;
    return(
        // <div className='flex min-h-screen w-screen justify-center md:justify-end lg:px-[42px] px-[12px]'>
        //     <div className='flex w-screen lg:w-[76%] '>
        //         <div className='flex flex-col justify-center lg:px-[22px] lg:w-[40%] '>
        //             <motion.span
        //                 initial={{ opacity: 0 }}
        //                 whileInView={{ opacity: 1 }}
        //                 transition={{ delay: 0.3, duration: 0.9 }}
        //                 viewport={ { once: true, amount: 0.9 } }
        //                 className='pt-[6px] pb-[4px] font-5 text-[18px]'>
        //                 HI, THERE! 👋 I AM
        //             </motion.span>
        //             <motion.span
        //                 initial={{ opacity: 0 }}
        //                 whileInView={{ opacity: 1 }}
        //                 transition={{ delay: 0.5, duration: 0.9 }}
        //                 viewport={ { once: true, amount: 0.9 } }
        //                 className='pb-[4px] font-6 text-[28px] lg:text-[32px] text-primary-main'>
        //                 Jigme Lodey
        //             </motion.span>
        //             <motion.span
        //                 initial={{ opacity: 0 }}
        //                 whileInView={{ opacity: 1 }}
        //                 transition={{ delay: 0.7, duration: 0.9 }}
        //                 viewport={ { once: true, amount: 0.9 } }
        //                 className='py-[8px] lg:font-3 font-4 text-[14px]'>
        //                 I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
        //             </motion.span>
        //             <motion.div
        //                 initial={{ opacity: 0 }}
        //                 whileInView={{ opacity: 1 }}
        //                 transition={{ delay: 0.9, duration: 0.9 }}
        //                 viewport={ { once: true, amount: 0.9 } }
        //                 className='flex pt-[16px] items-center h-[34px]'>
        //                <span className='text-center text-[18px] lg:text-[24px]'>
        //                    <MdKeyboardArrowRight />
        //                </span>
        //                 <span className='text-primary-main text-[14px] lg:text-[16px]'> {typeWriter} </span>
        //                 <span className='animate-pulse text-[14px] lg:text-[16px]'>_</span>
        //             </motion.div>
        //             <motion.div
        //                 initial={{ y: 100, opacity: 0 }}
        //                 whileInView={{ y: 0, opacity: 1 }}
        //                 transition={{ delay: 0.9, type:'spring', bounce: 0.8 }}
        //                 viewport={ { once: true, amount: 0.3, } }
        //                 className='py-[20px]'
        //             >
        //                 <Button className='w-[70px] lg:w-[100px] text-[12px]' label='Hire Me' type='button' variant='contained' click={() => alert('hello')} />
        //             </motion.div>
        //         </div>
        //         <div className='flex lg:items-center justify-center w-full pr-[24px] relative'>
        //             <motion.div
        //                 initial={{ x: -200, opacity:0 }}
        //                 whileInView={{ x: 0, opacity: 1 }}
        //                 transition={{ delay: 0.9, duration: 5.9 }}
        //                 viewport={ { once: true, amount: 0.3, } }
        //                 className='flex block lg:hidden items-center justify-center  relative'>
        //                 <Image src={img} alt='profile' height={540}  className='rounded-full'  />
        //             </motion.div>
        //             <motion.div
        //                 initial={{ x: -500, opacity:0 }}
        //                 whileInView={{ x: 0, opacity: 1 }}
        //                 transition={{ delay: 0.9, duration: 5.9 }}
        //                 viewport={ { once: true, amount: 0.3, } }
        //                 className='flex items-center hidden lg:block justify-center  relative w-[300px] h-[300px] overflow-hidden'>
        //                 <Image src={img} alt='profile' height={540}  className='rounded-full'  />
        //             </motion.div>
        //             <motion.div
        //                 initial={{ scale:0, opacity:0.5 }}
        //                 whileInView={{ scale: 1, opacity: 1 }}
        //                 transition={{ delay: 0.9, duration: 5.9 }}
        //                 viewport={ { once: true, amount: 0.3, } }
        //                 className='absolute right-[60%] top-[34%] lg:top-[28%]'>
        //                 {
        //                     getTime === 'night' ? <BsFillMoonFill className='text-text-moon text-[20px] lg:text-[32px]' /> : <BsFillSunFill className='text-text-sun text-[24px] lg:text-[42px]' />
        //                 }
        //             </motion.div>
        //         </div>
        //     </div>
        // </div>
        <CustomContainer>
            <div className='flex'>
                <div className='flex flex-col justify-center min-h-screen w-[100%] '>
                   <h3 className='font-6 text-[16px] md:text-[24px]'>
                       HI, THERE! 👋 I AM
                   </h3>
                    <div className='py-[12px] lg:py-[4px]'>
                        <h2 className='font-7 text-[20px] md:text-[32px] text-primary-main'>
                            Jigme Lodey
                        </h2>
                    </div>
                    <div className='leading-normal py-[14px]'>
                        <span className='text-[12px] md:text-[16px] leading-normal '>
                            I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                        </span>
                        <div className='flex mt-[12px] py-[4px] items-center'>
                            <span className='text-[16px] md:text-[24px]'>
                                <MdKeyboardArrowRight />
                            </span>
                            <span className='text-primary-main text-[10px] md:text-[18px]'> {typeWriter} <span className='animate-pulse text-[10px] md:text-[16px]'>_</span> </span>

                        </div>
                    </div>
                </div>
                <div className='flex flex-col justify-center min-h-screen w-full'>
                  <div className='flex  justify-center'>
                      <div className='flex items-center justify-center  relative w-full h-[150px] md:w-[300px] md:h-[300px]'>
                          <Image src={img} alt='profile' height={540}  className='rounded-full'  />
                      </div>
                  </div>
                </div>
            </div>
        </CustomContainer>
    );
}

export default Landing;