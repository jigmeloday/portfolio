import { motion } from 'framer-motion';

function Skills() {
    return(
        <div className='justify-center flex lg:px-[150px] py-[6%] '>
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
                <span>
                    I possess a diverse range of skills that I regularly utilize, and I have highlighted some of them below. If you would like to learn more about my capabilities, I encourage you to refer to my CV, which provides a comprehensive overview of my experience and expertise, including skills that may not be mentioned here. I am proud to say that I have successfully applied these skills in over five projects as of 2022.
                </span>
                <div>

                </div>
            </div>
        </div>
    );
}

export default Skills;