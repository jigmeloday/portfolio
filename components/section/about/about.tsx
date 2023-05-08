import { AnimatePresence, motion } from 'framer-motion';
import { ABOUT_BOX, DUMMY } from '@/components/section/about/about.constant';

function About() {
    return(
        <AnimatePresence>
            <div className='min-h-screen justify-center flex px-[150px] py-[6%] '>
                <div className='w-[80%] justify-start'>
                    <motion.h1
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.9 }}
                        transition={{ type: 'spring', bounce: 0.1, delay: 0.5 }}
                        className='font-6 text-[32px] text-primary-main'
                    >
                        About Me
                    </motion.h1>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ type: 'spring', bounce: 0.1, delay: 0.6 }}
                        className='py-[32px] text-justify text-text-dark'>
                        {DUMMY}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: -100 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.8 }}
                        transition={{ type: 'spring', bounce: 0.1, delay: 0.7 }}
                        className='flex flex-row py-8 justify-center gap-[38px]'>
                        {
                            ABOUT_BOX.map(({ id, icon,  title, description }) => (
                                <div
                                    key={id}
                                    className='w-[250px] h-[200px] overflow-hidden transition duration-150 group relative rounded-[16px]'
                                >
                                    <div className='flex flex-col min-h-full bg-primary-main shadow-2xl relative overflow-hidden justify-center items-center'>
                                        <div className='text-primary-main'>
                                            {icon}

                                        </div>
                                        <span>
                                            {title}
                                        </span>
                                    </div>
                                    <div className='min-h-full w-full bg-hover-main absolute flex items-center justify-center top-60 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                        {description}
                                    </div>
                                </div>
                            ))
                        }
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default About;