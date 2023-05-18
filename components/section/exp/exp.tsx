import CustomContainer from '@/components/custom-container/custom-container';
import { AnimatePresence, motion } from 'framer-motion';
import StepperComponent from '@/components/section/exp/stepper-component/stepper-component';

export function Exp() {
    return (
        <AnimatePresence>
            <CustomContainer>
                <motion.h1
                    initial={ { opacity: 0, y: - 100 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true, amount: 0.9 } }
                    transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                    className='font-6 text-[32px] text-primary-main text-center lg:text-start'
                >
                   My Journey.
                </motion.h1>
                <motion.div
                    initial={ { opacity: 0 } }
                    whileInView={ { opacity: 1 } }
                    viewport={ { once: true, amount: 0.9 } }
                    transition={ { delay: 0.5 } }
                    className='py-8'>
                    <StepperComponent />
                </motion.div>
            </CustomContainer>
        </AnimatePresence>
    );
}

export default Exp;