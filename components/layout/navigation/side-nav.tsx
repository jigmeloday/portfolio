// import { NAV_CONST, SOCIAL_ICONS } from '@/components/icons/icons';
import { motion } from 'framer-motion';
// import Image from 'next/image';
// import img from '@/public/images/profile2.svg';
import NavItems from '@/components/layout/navigation/nav-items';

function SideNav() {
    return(
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9 }}
            className='lg:block shadow-2xl w-[240px] hidden overflow-hidden rounded-[12px] px-2 py-6 '>
            <NavItems />
        </motion.div>
    );
}

export default SideNav;
