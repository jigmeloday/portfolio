import { motion } from 'framer-motion';
import CustomContainer from '@/components/custom-container/custom-container';
import CustomHeader from '@/components/custom-header/custom-header';
import { DUMMY } from '@/components/section/about/about.constant';

function About() {
    return (
            <CustomContainer>
                <div className='px-[32px]'>
                    <motion.div
                        initial={ { opacity: 0, x: -100 } }
                        whileInView={ { opacity: 1, x: 0 } }
                        viewport={ { once: true, amount: 0.9 } }
                        transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                    >
                        <CustomHeader text='ABOUT ME' />
                    </motion.div>
                    <div className='flex flex-col gap-[34px] py-[34px]'>
                        {
                            DUMMY.map(({ title, description }) => (
                                <div
                                    key={title}
                                    className='flex flex-col gap-[12px]'
                                >
                                    <motion.h1
                                        initial={ { opacity: 0, x: -100 } }
                                        whileInView={ { opacity: 1, x: 0 } }
                                        viewport={ { once: true, amount: 0.9 } }
                                        transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                                        className='font-6 text-[24px] '>
                                        {title}
                                    </motion.h1>
                                    <motion.div
                                        initial={ { opacity: 0, x: -100 } }
                                        whileInView={ { opacity: 1, x: 0 } }
                                        viewport={ { once: true, amount: 0.9 } }
                                        transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                                        className='px-[8px] w-[90%]'>
                                        <span className='font-4 text-[14px]'>
                                        {description}
                                    </span>
                                    </motion.div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </CustomContainer>

    );
}

export default About;