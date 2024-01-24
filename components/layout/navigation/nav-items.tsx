import { motion } from 'framer-motion';
import Image from 'next/image';
import img from '@/public/images/profile2.svg';
import { NAV_CONST, SOCIAL_ICONS } from '@/components/icons/icons';

function NavItems() {
    return(
        <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.9 }}
            className=' w-[240px] px-2 py-6  overflow-auto overscroll-none'>
            <div className='flex flex-col items-center pt-[22px]'>
                <motion.div
                    initial={{ y:-100, opacity: 0  }}
                    animate={{ y:0, opacity: 1 }}
                    transition={{ delay: 0.5, duration: 0.9 }}
                    className='flex items-center justify-center bg-secondary-light shadow-2xl relative rounded-full w-[150px] h-[150px] overflow-hidden' >
                    <Image src={img} alt='profile' height={240}  className='rounded-full'  />
                </motion.div>
                <div className='pt-[18px]'>
                    <div className='flex justify-center'>
                        <motion.h1
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.9, delay: 0.6 }}
                            className='text-[24px] text-center font-8  transition delay-1500 duration-500 ease-in-out '>
                           TENZIN NORZANG
                        </motion.h1>
                    </div>
                    <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.9, delay: 0.7 }}
                        className='pt-[8px] text-center text-[12px]'>
                        FULL STACK DEVELOPER IN
                        <span className='text-primary-main pl-[6px] cursor-pointer hover:text-primary-dark transition delay-1500 duration-500 ease-in-out'>BHUTAN</span>
                    </motion.span>
                </div>
            </div>
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className='overflow-hidden  px-2 py-6'>
                {
                    NAV_CONST.map(({ label, id, link}) => (
                        <motion.div
                            key={id}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 1 }}
                            className='flex justify-center px-[4px] py-[5px] '>
                            <a href={link}>
                                <div className='text-[12px] font-5 items-center cursor-pointer hover:text-primary-main hover:scale-125 transition delay-1500 duration-500 ease-in-out'>
                                    {label}
                                </div>
                            </a>
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
            <motion.div
                initial={{ x: -400 }}
                animate={{ x: 0 }}
                transition={{ duration: 1.4, delay: 0.9 }}
                className='flex items-end justify-center font-2 text-[12px] pt-[28px]'>
                ©Copyright ©2023 All rights reserved
            </motion.div>
        </motion.div>
    );
}

export default NavItems;