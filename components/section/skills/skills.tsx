import { motion } from 'framer-motion';
import { SKILLS_CONSTANT } from '@/components/icons/icons';
import { MdKeyboardArrowRight } from 'react-icons/md';
import CustomContainer from '@/components/custom-container/custom-container';
import CustomHeader from '@/components/custom-header/custom-header';

function Skills() {
    return(
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
               <span>

               </span>
               <div className='py-[24px]'>
                   {
                       SKILLS_CONSTANT.map(({ title,details }) => (
                           <div key={title} className='flex flex-col'>
                               <h1 className='font-6 text-[24px] py-[24px] '>
                                   {title}
                               </h1>
                               <div className='flex gap-[24px] py-[24px]'>
                                   {
                                       details.map(({ id, icon, list, title, classes, textColor, hover  }) => (
                                           <motion.div
                                               initial={{ opacity: 0, y: -100 }}
                                               whileInView={{ opacity: 1, y: 0 }}
                                               viewport={{ once: true, amount: 0.8 }}
                                               transition={{ type: 'spring', bounce: 0.1, delay: 0.7 }}
                                               key={id}
                                               className={`${classes} w-[250px] h-[200px] shadow-lg overflow-hidden transition duration-150 group relative rounded-[4px]`}
                                           >
                                               <div className='flex group-hover:blur transition-all duration-500 flex-col min-h-full  relative overflow-hidden justify-center items-center'>
                                                   <div className='text-primary-main py-[8px]'>
                                                        <span className={`${textColor} text-[38px]`}>
                                                            {icon}
                                                        </span>
                                                   </div>
                                                   <span className='font-5 text-[14px] py-[12px]'>
                                                     {title}
                                                    </span>
                                               </div>
                                               <div className={`${hover} min-h-full w-full  absolute flex top-60 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500`}>
                                                   <div className='p-[12px] gap-[22px]'>
                                                       {
                                                           list.map(({ name, id }) => (
                                                               <div className='flex items-center gap-[6px]' key={id}>
                                                    <span className={`${textColor} text-[22px]`}>
                                                        <MdKeyboardArrowRight />
                                                    </span>
                                                                   <span className='font-6 text-[12px]'>{name}</span>
                                                               </div>
                                                           ))
                                                       }
                                                   </div>
                                               </div>
                                           </motion.div>
                                       ))
                                   }
                               </div>

                           </div>
                       ))
                   }
               </div>
           </div>
       </CustomContainer>
    );
}

export default Skills;