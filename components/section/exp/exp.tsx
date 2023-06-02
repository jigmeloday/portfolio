import CustomContainer from '@/components/custom-container/custom-container';
import { motion } from 'framer-motion';
import StepperComponent from '@/components/section/exp/stepper-component/stepper-component';
import CustomHeader from '@/components/custom-header/custom-header';

export function Exp() {
    return (
            <CustomContainer>
               <div className='px-[32px]'>
                   <CustomHeader text='MY EXPERIENCE' />
                   <div className='py-[34px]'>
                       <motion.h1
                           initial={ { opacity: 0, y: - 100 } }
                           whileInView={ { opacity: 1, y: 0 } }
                           viewport={ { once: true, amount: 0.9 } }
                           transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                           className='font-6 text-[24px]'>
                           My Journey
                       </motion.h1>
                       <motion.div
                           initial={ { opacity: 0 } }
                           whileInView={ { opacity: 1 } }
                           viewport={ { once: true, amount: 0.9 } }
                           transition={ { delay: 0.5 } }
                           >
                           <StepperComponent />
                       </motion.div>
                   </div>
               </div>
            </CustomContainer>
    );
}

export default Exp;