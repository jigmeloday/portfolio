import { AnimatePresence, motion } from 'framer-motion';
import { DUMMY } from '@/components/section/about/about.constant';

function About() {
    return(
        <AnimatePresence>
            <div className='min-h-screen justify-center flex px-[150px] py-[6%] '>
                {/*<motion.div*/}
                {/*    initial={{ opacity: 0, y: -100 }}*/}
                {/*    whileInView={{ opacity: 1, y: 0 }}*/}
                {/*    viewport={{ once: true, amount: 0.8 }}*/}
                {/*    transition={{ type: 'spring', bounce: 0.1 }}*/}
                {/*>*/}
                {/*    hello*/}
                {/*</motion.div>*/}
                <div className='w-[80%] justify-start'>
                    <motion.h1
                        className='font-6 text-[32px]'
                    >
                        About Me
                    </motion.h1>
                    <div className='py-[32px] text-justify'>
                        {DUMMY}
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default About;