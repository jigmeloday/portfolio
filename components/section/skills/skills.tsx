import { motion } from 'framer-motion';
import { SKILLS_CONSTANT } from '@/components/icons/icons';
import { MdKeyboardArrowRight } from 'react-icons/md';
import CustomContainer from '@/components/custom-container/custom-container';
import CustomHeader from '@/components/custom-header/custom-header';
import { DUMMY } from '@/components/section/about/about.constant';
function Skills() {
    return(
        // <div className='justify-center flex lg:px-[150px] py-[6%] '>
        //     <div className='w-[80%] justify-start'>
        //         <div className='py-[24px]'>
        //             <motion.h1
        //                 initial={ { opacity: 0, y: - 100 } }
        //                 whileInView={ { opacity: 1, y: 0 } }
        //                 viewport={ { once: true, amount: 0.9 } }
        //                 transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
        //                 className='font-6 text-[32px] text-primary-main text-center lg:text-start'
        //             >
        //                 Skills
        //             </motion.h1>
        //             <div className='py-[24px]'>
        //                 <span>
        //                     I possess a diverse range of skills that I regularly utilize, and I have highlighted some of them below. If you would like to learn more about my capabilities, I encourage you to refer to my CV, which provides a comprehensive overview of my experience and expertise, including skills that may not be mentioned here. I am proud to say that I have successfully applied these skills in over five projects as of 2022.
        //                 </span>
        //             </div>
        //         </div>
        //         <div className='flex flex-row pt-[24px] gap-[28px]'>
        //             {
        //                 SKILLS_CONSTANT.map(({ id, list, icon, title }) => (
        //                     <motion.div
        //                         initial={{ opacity: 0, y: -100 }}
        //                         whileInView={{ opacity: 1, y: 0 }}
        //                         viewport={{ once: true, amount: 0.8 }}
        //                         transition={{ type: 'spring', bounce: 0.1, delay: 0.7 }}
        //                         key={id}
        //                         className='w-[250px] h-[200px] overflow-hidden transition duration-150 group relative rounded-[16px]'
        //                     >
        //                         <div className='flex flex-col min-h-full bg-primary-main shadow-2xl relative overflow-hidden justify-center items-center'>
        //                             <div className='text-primary-main py-[8px]'>
        //                                     <span className='text-[38px]'>
        //                                         {icon}
        //                                     </span>
        //                             </div>
        //                             <span className='font-3 text-[14px] py-[12px]'>
        //                                     {title}
        //                                 </span>
        //                         </div>
        //                         <div className='min-h-full w-full bg-hover-main absolute flex top-60 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>
        //                             <div className='p-[12px] gap-[22px]'>
        //                                 {
        //                                     list.map(({ name, id }) => (
        //                                         <div className='flex items-center gap-[6px]' key={id}>
        //                                             <span className='text-primary-main'>
        //                                                 <MdKeyboardArrowRight />
        //                                             </span>
        //                                             <span className='font-3 text-[12px]'>{name}</span>
        //                                         </div>
        //                                     ))
        //                                 }
        //                             </div>
        //                         </div>
        //                     </motion.div>
        //                 ))
        //             }
        //         </div>
        //     </div>
        // </div>
        <CustomContainer>
            <div className='px-[32px]'>
                <motion.div
                    initial={ { opacity: 0, x: -100 } }
                    whileInView={ { opacity: 1, x: 0 } }
                    viewport={ { once: true, amount: 0.9 } }
                    transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                >
                    <CustomHeader text='MY SPECIALTY' />
                </motion.div>
                
            </div>
        </CustomContainer>
    );
}

export default Skills;