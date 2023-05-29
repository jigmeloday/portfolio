import { motion } from 'framer-motion';

function Skills() {
    return(
        // <div className='justify-center flex lg:px-[150px] py-[6%]'>
        //    <div className='col'>

        //    </div>
        // </div>
        <div className='min-h-screen justify-center flex lg:px-[150px] py-[6%] '>
            <div className='w-[80%] justify-start'>
                <motion.h1
                    initial={ { opacity: 0, y: - 100 } }
                    whileInView={ { opacity: 1, y: 0 } }
                    viewport={ { once: true, amount: 0.9 } }
                    transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                    className='font-6 text-[32px] text-primary-main text-center lg:text-start'
                >
                    Skills
                </motion.h1>
            </div>
        </div>
    );
}

export default Skills;