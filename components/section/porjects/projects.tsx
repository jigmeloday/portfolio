import CustomContainer from '@/components/custom-container/custom-container';
import Image from 'next/image';
import { PROJECTS } from '@/components/section/porjects/constant/porject.constant';
import { motion } from 'framer-motion';

function Projects() {
    return (
        <CustomContainer>
            <motion.h1
                initial={ { opacity: 0, y: - 100 } }
                whileInView={ { opacity: 1, y: 0 } }
                viewport={ { once: true, amount: 0.9 } }
                transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                className='font-6 text-[32px] text-primary-main text-center lg:text-start'
            >
                Projects
            </motion.h1>
            <div className='py-8'>
                <motion.span
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={ { once: true, amount: 0.9 } }
                    transition={ { duration: 0.8, delay: 0.5 } }
                    className='text-text-dark'>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the  standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.

                </motion.span>
                <div className='flex lg:flex-row flex-col flex-wrap py-8 gap-[24px] '>
                    {
                        PROJECTS.map( ( { id, name, link, image, description } ) => (
                            <motion.div
                                initial={ { opacity: 0, y: - 100 } }
                                whileInView={ { opacity: 1, y: 0 } }
                                viewport={ { once: true, amount: 0.9 } }
                                transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                                key={id}
                                className='w-fit h-fit shadow-2xl p-[12px] border border-primary-dark rounded-[18px] basis-[calc((100%/3)-24px)]'>
                                <div className='relative '>
                                    <div className='w-[100%] h-[100%] absolute rounded-t-[8px] bg-gradient-to-r from-[#2e3047] via-white-0 opacity-[0.7]'/>
                                    <Image src={ image } alt='project' height={ 240 } className='rounded-t-[8px]  transition duration-300 ease-in-out'/>
                                </div>
                                <div className='pt-[12px]'>
                                    <h1 className='font-6 text-[18px] text-primary-main'>{name}</h1>
                                    <div className='pt-1'>
                                        <span className='font-2 text-[14px]'>
                                        {description}
                                    </span>
                                    </div>
                                    <div className='flex justify-center w-full py-4 ' >
                                        <span
                                            className='cursor-pointer text-[12px] font-2 text-primary-light hover:text-primary-main hover:scale-[1.2] transition duration-300 ease-in-out'>
                                            Read More {link}
                                        </span>
                                    </div>
                                </div>
                            </motion.div>
                        ) )
                    }

                </div>
            </div>
        </CustomContainer>
    );
}

export default Projects;