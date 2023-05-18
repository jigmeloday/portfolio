import CustomContainer from '@/components/custom-container/custom-container';
import { motion } from 'framer-motion';

function Skills() {
    return(
        <CustomContainer>
            <motion.h1
                initial={ { opacity: 0, y: - 100 } }
                whileInView={ { opacity: 1, y: 0 } }
                viewport={ { once: true, amount: 0.9 } }
                transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                className='font-6 text-[32px] text-primary-main text-center lg:text-start'
            >
                Skills
            </motion.h1>
            <div className='py-8'>
                hello
            </div>
        </CustomContainer>
    );
}

export default Skills;