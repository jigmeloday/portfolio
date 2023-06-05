import { motion } from 'framer-motion';

function CustomHeader(props: { text: string }) {
    return(
            <motion.h5
                initial={ { opacity: 0, y: 100} }
                whileInView={ { opacity: 1, y:0 } }
                viewport={ { once: true, amount: 0.9 } }
                transition={ { duration: 0.6, delay: 0.2 } }
                className='font-4 text-[14px] md:text-[18px] text-primary-header text-start'
            >
                { props.text.toUpperCase() }
            </motion.h5>
    );
}

export default CustomHeader;