import { motion } from 'framer-motion';

function CustomHeader(props: { text: string }) {
    return(
        <motion.h1
            initial={ { opacity: 0, y: - 100 } }
            whileInView={ { opacity: 1, y: 0 } }
            viewport={ { once: true, amount: 0.9 } }
            transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
            className='font-6 text-[32px] text-primary-main text-center lg:text-start'
        >
            {props.text}
        </motion.h1>
    );
}

export default CustomHeader;