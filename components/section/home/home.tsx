// import { SOCIAL_ICONS } from '@/components/icons/icons';
// import { AnimatePresence, motion } from 'framer-motion';
// import img  from '../../../public/images/profile.png';
// import Image from 'next/image';
import Button from '@/components/custom-botton/button';

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
                   <span>
                       HI, THERE! 👋 I AM
                   </span>
                   <span> Jigme Lodey</span>
                   <span> I’m a software engineer specializing in building (and occasionally designing) exceptional digital experiences. </span>
                   <span> Software Developer </span>
                   <Button label='Hire Me' type='button' variant='contained' click={() => alert('hello')} />
               </div>
                <div>
                    Hello
                </div>
            </div>
        </div>
    );
}

export default Landing;