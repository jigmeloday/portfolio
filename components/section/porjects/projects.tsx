import CustomContainer from '@/components/custom-container/custom-container';
import Image from 'next/image';
import { PROJECTS } from '@/components/section/porjects/constant/porject.constant';
import { motion } from 'framer-motion';
import CustomHeader from '@/components/custom-header/custom-header';
import SectionContainer from '@/components/custom-container/section-container';

function Projects() {
    return (
        // <CustomContainer>
        //     <div className='px-[24px]'>
        //         <CustomHeader text='PROJECTS' />
        //         <div className='py-[34px]'>
        //             <motion.h1
        //                 initial={ { opacity: 0, x: -10 } }
        //                 whileInView={ { opacity: 1, x: 0 } }
        //                 viewport={ { once: true, amount: 0.9 } }
        //                 transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
        //                 className='font-6 text-[24px] '>
        //                 My Works
        //             </motion.h1>
        //             <div className='py-[12px]'>
        //                 <motion.span
        //                     initial={{ opacity: 0 }}
        //                     whileInView={{ opacity: 1 }}
        //                     viewport={ { once: true, amount: 0.9 } }
        //                     transition={ { duration: 0.8, delay: 0.5 } }
        //                     className='text-text-dark'>
        //                     Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
        //
        //                 </motion.span>
        //             </div>
        //             <div className='flex lg:flex-row flex-col flex-wrap py-8 gap-[24px]  md:items-center '>
        //                 {
        //                     PROJECTS.map( ( { id, name, link, image, description } ) => (
        //                         <motion.div
        //                             initial={ { opacity: 0, y: - 100 } }
        //                             whileInView={ { opacity: 1, y: 0 } }
        //                             viewport={ { once: true, amount: 0.9 } }
        //                             transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
        //                             key={id}
        //                             className='w-fit h-fit shadow-2xl p-[12px] rounded-[8px] basis-[calc((100%/3)-24px)]'>
        //                             <div className='flex justify-center relative'>
        //                                 <Image src={ image } alt='project' layout='filled'  className='rounded-t-[8px]  transition duration-300 ease-in-out'/>
        //                             </div>
        //                             <div className='pt-[12px]'>
        //                                 <h1 className='font-6 text-[18px] text-primary-main'>{name}</h1>
        //                                 <div className='pt-1'>
        //                                 <span className='font-5 text-[13px]'>
        //                                 {description.substring(0, 80)+ '...'}
        //                             </span>
        //                                 </div>
        //                                 <div className='flex justify-center w-full py-4 ' >
        //                                 <span
        //                                     className='cursor-pointer font-4 text-[12px] font-2 hover:text-primary-main hover:scale-[1.2] transition duration-300 ease-in-out'>
        //                                     Read More {link}
        //                                 </span>
        //                                 </div>
        //                             </div>
        //                         </motion.div>
        //                     ) )
        //                 }
        //
        //             </div>
        //         </div>
        //     </div>
        // </CustomContainer>
        <CustomContainer>
            <SectionContainer>
                <CustomHeader text='PROJECTS' />
                <div className='flex flex-col py-[24px] items-center lg:items-start text-justify'>
                    <motion.div
                        initial={ { opacity: 0,  y: 110 } }
                        whileInView={ { opacity: 1, y: 0 } }
                        viewport={ { once: true, amount: 0.9 } }
                        transition={ { duration: 0.6, delay: 0.5 } }
                    >
                        <h1 className='font-8 text-[16px] md:text-[34px] lg:text-[26px]'>
                            My Works
                        </h1>
                    </motion.div>
                    <div className='flex lg:flex-row flex-col flex-wrap py-8 gap-[24px]  md:items-center '>
                        {
                            PROJECTS.map(({ id, name, link, image, description }) => (
                                <motion.div
                                    key={id}
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    viewport={ { once: true, amount: 0.9 } }
                                    transition={ { duration: 0.6, delay: 0.5 } }

                                className='w-fit h-fit shadow-md p-[12px] rounded-[8px] basis-[calc((100%/3)-24px)]'>
                                    <motion.div
                                        initial={{ opacity: 0, y: 110 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={ { once: true, amount: 0.9 } }
                                        transition={ { duration: 0.6, delay: 1.0 } }
                                        className='flex justify-center relative'>
                                        <Image src={ image } alt='project' layout='filled'  className='rounded-t-[8px]  transition duration-300 ease-in-out'/>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: 90 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={ { once: true, amount: 0.9 } }
                                        transition={ { duration: 0.6, delay: 1.5 } }
                                        className='pt-[12px]'>
                                        <h1 className='font-6 text-[18px] text-primary-main'>{name}</h1>
                                        <span className='font-5 text-[13px]'>
                                            {description.substring(0, 80)+ '...'}
                                        </span>
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0}}
                                        whileInView={{ opacity: 1}}
                                        viewport={ { once: true, amount: 0.9 } }
                                        transition={ { duration: 0.6, delay: 2.0 } }
                                        className='flex justify-center w-full py-4 ' >
                                        <span
                                            className='cursor-pointer font-4 text-[12px] font-2 hover:text-primary-main hover:scale-[1.2] transition duration-300 ease-in-out'>
                                            Read More {link}
                                        </span>
                                    </motion.div>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </SectionContainer>
        </CustomContainer>
    );
}

export default Projects;