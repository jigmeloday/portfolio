import { NAV_CONST, SOCIAL_ICONS } from '@/components/icons/icons';
import { motion } from 'framer-motion';
import Image from 'next/image';
import img from '@/public/images/profile.png';

function SideNav() {
    return(
        <div className='lg:block shadow-2xl w-[240px] hidden overflow-hidden rounded-[12px] px-2 py-6 '>
            <div className='flex flex-col items-center pt-[22px]'>
                <motion.div
                    initial={{ y:-100  }}
                    animate={{ y:0 }}
                    transition={{ duration: 0.9 }}
                    className='flex items-center justify-center bg-primary-dark shadow-2xl relative rounded-full w-[150px] h-[150px] overflow-hidden' >
                    <Image src={img} alt='profile' height={240}  className='rounded-full'  />
                </motion.div>
                <div className='pt-[18px]'>
                    <motion.h1
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className='text-[24px] text-center font-8'> Jigme Lodey </motion.h1>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.7 }}
                        className='pt-[8px] text-center text-[12px]'>
                        FULL STACK DEVELOPER IN
                        <span className='text-primary-main pl-[6px]'>BHUTAN</span>
                    </motion.span>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='overflow-hidden  px-2 py-4'>
                {
                    NAV_CONST.map(({ label, id}) => (
                        <motion.div
                            key={id}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className='flex justify-center px-[4px] py-[6px] '>
                            <div className='text-[14px] font-6 items-center cursor-pointer hover:text-primary-main hover:scale-150 transition delay-1500 duration-500 ease-in-out'>
                                {label}
                            </div>
                        </motion.div>
                    ))
                }
            </motion.div>
            <div className='flex w-full justify-center py-[14px] gap-[8px]'>
                {
                    SOCIAL_ICONS.map(({ id, name }) =>(
                        <motion.div
                            key={id}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 1.4, delay: 0.9 }}
                            className='text-[24px] text-center cursor-pointer shadow-2xl text-primary-main hover:scale-150 translation duration-300 ' >
                            {name}
                        </motion.div>
                    ))
                }
            </div>
            <div className='flex items-end justify-center font-2 text-[12px] pt-[28px]'>
                ©Copyright ©2023 All rights reserved
            </div>
        </div>
    );
}

export default SideNav;
