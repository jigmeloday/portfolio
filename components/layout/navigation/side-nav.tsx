import { NAV_CONST } from '@/components/icons/icons';
import { AnimatePresence, motion } from 'framer-motion';

function SideNav() {
    return(
        <AnimatePresence>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='lg:block drop-shadow-2xl fixed hidden top-[30%] left-[8%] overflow-hidden bg-primary-dark rounded-[12px] px-2 py-6 text-primary-main'>
                {
                    NAV_CONST.map(({ icon, id}) => (
                        <motion.div
                            key={id}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 1, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className='flex justify-center px-[4px] py-[8px] '>
                            <div className='text-[18px] items-center cursor-pointer hover:text-primary-light hover:scale-150 transition delay-1500 duration-500 ease-in-out'>
                                {icon}
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
        </AnimatePresence>
    );
}

export default SideNav;
