import { motion } from 'framer-motion';
import CustomContainer from '@/components/custom-container/custom-container';
import CustomHeader from '@/components/custom-header/custom-header';
import { DUMMY } from '@/components/section/about/about.constant';
import SectionContainer from '@/components/custom-container/section-container';

function About() {
    return (
        <CustomContainer>
            <SectionContainer>
                <CustomHeader text='ABOUT ME' />
                <div className='flex flex-col items-start w-full'>
                    {
                        DUMMY.map(({ title, description }) => (
                            <div key={title} className='flex flex-col py-[24px] items-center lg:items-start text-justify'>
                                <motion.div
                                    initial={ { opacity: 0,  y: 110 } }
                                    whileInView={ { opacity: 1, y: 0 } }
                                    viewport={ { once: true, amount: 0.9 } }
                                    transition={ { duration: 0.6, delay: 0.5 } }
                                >
                                    <h1 className='font-8 text-[16px] md:text-[34px] lg:text-[26px]'>
                                        {title}
                                    </h1>
                                </motion.div>
                                <motion.div
                                    initial={ { scale: 0 } }
                                    whileInView={ { scale: 1} }
                                    viewport={ { once: true, amount: 0.9 } }
                                    transition={ { duration: 1.2, delay: 0.5 } }
                                    className='pt-[14px] lg:w-[90%] md:pl-[12px]'>
                                    <span className='text-[10px] md:text-[18px] lg:text-[14px] lg:leading-9'>{description}</span>
                                </motion.div>
                            </div>
                        ))
                    }
                </div>
            </SectionContainer>
        </CustomContainer>

    );
}

export default About;