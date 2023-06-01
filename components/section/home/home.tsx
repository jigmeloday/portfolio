// import { SOCIAL_ICONS } from '@/components/icons/icons';
import { motion } from 'framer-motion';
// import img  from '../../../public/images/profile.png';
// import Image from 'next/image';
import Button from '@/components/custom-botton/button';
import { MdKeyboardArrowRight } from 'react-icons/md';

function Landing(){
    return(

            // <div className='flex flex-col justify-center items-center w-screen min-h-screen '>
            //     <AnimatePresence>
            //     <motion.div
            //         initial={{ y:-100  }}
            //         animate={{ y:0 }}
            //         transition={{ duration: 0.9 }}
            //         className='flex items-center justify-center bg-primary-dark shadow-2xl relative rounded-full w-[200px] h-[200px] overflow-hidden' >
            //         <Image src={img} alt='profile' height={240}  className='rounded-full'  />
            //     </motion.div>
            //
            //     <div className='pt-[38px] text-center'>
            //         <motion.h1
            //             initial={{ opacity: 0 }}
            //             animate={{ opacity: 1 }}
            //             transition={{ duration: 1, delay: 0.5 }}
            //             className='text-[40px] font-8'> Jigme Lodey </motion.h1>
            //         <motion.span
            //             initial={{ opacity: 0 }}
            //             animate={{ opacity: 1 }}
            //             transition={{ duration: 1.2, delay: 0.7 }}
            //             className='pt-[8px] text-[24px]'>
            //             I am Software
            //             <span className='text-primary-main pl-[6px]'>Developer</span>
            //         </motion.span>
            //         <div className='py-[30px] flex gap-[18px] justify-center'>
            //             {
            //                 SOCIAL_ICONS.map(({ id, name }) => (
            //                     <motion.div
            //                         key={id}
            //                         initial={{ opacity: 0 }}
            //                         animate={{ opacity: 1 }}
            //                         transition={{ duration: 1.4, delay: 0.9 }}
            //                         className='text-[34px] cursor-pointer shadow-2xl text-primary-main hover:scale-150 translation duration-300 ' >
            //                         {name}
            //                     </motion.div>
            //                 ))
            //             }
            //         </div>
            //
            //     </div>
            //     </AnimatePresence>
            //
            // </div>
        <div className='flex min-h-screen justify-end'>
            <div className='flex w-[76%]'>
               <div className='flex flex-col justify-center px-[22px] w-[40%]'>
                   <motion.span
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.3, duration: 0.9 }}
                       viewport={ { once: true, amount: 0.9 } }
                       className='pt-[6px] pb-[4px] font-5'>
                       HI, THERE! 👋 I AM
                   </motion.span>
                   <motion.span
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.5, duration: 0.9 }}
                       viewport={ { once: true, amount: 0.9 } }
                       className='pb-[4px] font-6 text-[32px] text-primary-main'>
                       Jigme Lodey
                   </motion.span>
                   <motion.span
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.7, duration: 0.9 }}
                       viewport={ { once: true, amount: 0.9 } }
                       className='py-[8px] font-3 text-[14px]'>
                       I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences.
                   </motion.span>
                   <motion.div
                       initial={{ opacity: 0 }}
                       whileInView={{ opacity: 1 }}
                       transition={{ delay: 0.9, duration: 0.9 }}
                       viewport={ { once: true, amount: 0.9 } }
                       className='flex pt-[6px] pb-[18px] items-center'>
                       <span className='text-center text-[24px]'>
                           <MdKeyboardArrowRight />
                       </span>
                       <span className='text-primary-main'> Software Developer </span>
                       <span className='animate-pulse'>_</span>
                   </motion.div>
                   <motion.div
                       initial={{ y: 300, opacity: 0 }}
                       whileInView={{ y: 0, opacity: 1 }}
                       transition={{ delay: 0.9, type:'spring', bounce: 0.5 }}
                       viewport={ { once: true, amount: 0.3, } }
                   >
                       <Button label='Hire Me' type='button' variant='contained' click={() => alert('hello')} />
                   </motion.div>
               </div>
                <div>
                    Hello
                </div>
            </div>
        </div>
    );
}

export default Landing;