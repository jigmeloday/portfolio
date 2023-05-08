import { AnimatePresence, motion } from 'framer-motion';

function About() {
    return(
        <AnimatePresence>
            <div className='min-h-screen flex justify-center '>
                <motion.div
                    initial={{ opacity: 0, y: -100 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.8 }}
                    transition={{ type: 'spring', bounce: 0.1 }}
                >
                    hello
                </motion.div>

            </div>
        </AnimatePresence>
    );
}

export default About;