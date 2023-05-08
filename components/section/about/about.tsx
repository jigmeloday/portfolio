import { AnimatePresence, motion } from 'framer-motion';
import { ABOUT_BOX, DUMMY } from '@/components/section/about/about.constant';

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
                    <div className='flex flex-row py-8 justify-center gap-[38px]'>
                        {
                            ABOUT_BOX.map(({ id,  title, description }) => (
                                <div
                                    key={id}
                                    className='w-[250px] h-[200px] overflow-hidden transition duration-150 group relative rounded-[16px]'
                                >
                                    <div className='min-h-full bg-primary-main shadow-2xl relative overflow-hidden'>{title}</div>
                                    <div className='min-h-full w-full bg-hover-main absolute flex items-center justify-center top-60 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
                                        {description}
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </AnimatePresence>
    );
}

export default About;