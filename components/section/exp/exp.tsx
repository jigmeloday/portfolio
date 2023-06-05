import CustomContainer from '@/components/custom-container/custom-container';
import { motion } from 'framer-motion';
import StepperComponent from '@/components/section/exp/stepper-component/stepper-component';
import CustomHeader from '@/components/custom-header/custom-header';
import SectionContainer from '@/components/custom-container/section-container';

export function Exp() {
    return (
        <CustomContainer>
            <SectionContainer>
                <CustomHeader text='MY EXPERIENCE' />
                <div className='flex flex-col py-[24px] items-center lg:items-start text-justify'>
                    <motion.div
                        initial={ { opacity: 0, y: 100} }
                        whileInView={ { opacity: 1, y:0 } }
                        viewport={ { once: true, amount: 0.9 } }
                        transition={ { duration: 0.6, delay: 0.2 } }
                    >
                        <h1 className='font-8 text-[16px] md:text-[34px] lg:text-[26px]'>
                            My Journey
                        </h1>
                    </motion.div>
                    <motion.div
                        initial={ { opacity: 0, y: 100} }
                        whileInView={ { opacity: 1, y:0 } }
                        viewport={ { once: true, amount: 0.9 } }
                        transition={ { duration: 0.6, delay: 0.2 } }
                    >
                        <StepperComponent />
                    </motion.div>
                </div>
            </SectionContainer>
        </CustomContainer>
    );
}

export default Exp;