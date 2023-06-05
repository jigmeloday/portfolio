import { motion } from 'framer-motion';
import { SKILLS_CONSTANT } from '@/components/icons/icons';
import { MdKeyboardArrowRight } from 'react-icons/md';
import CustomContainer from '@/components/custom-container/custom-container';
import CustomHeader from '@/components/custom-header/custom-header';
import SectionContainer from '@/components/custom-container/section-container';

function Skills() {
    return(
       // <CustomContainer>
       //     <div className='px-[32px]'>
       //         <CustomHeader text='MY SPECIALTY' />
       //         <div className='flex flex-col py-[34px] '>
       //             {
       //                 SKILLS_CONSTANT.map(({ section,details }) => (
       //                     <div key={section} className='flex flex-col gap-[34px]'>
       //                         <motion.h1
       //                             initial={ { opacity: 0 } }
       //                             whileInView={ { opacity: 1 } }
       //                             viewport={ { once: true, amount: 0.9 } }
       //                             transition={ { delay: 0.5, duration: 0.9 } }
       //                             className='font-6 text-[24px] '>
       //                             {section}
       //                         </motion.h1>
       //                         <div className='flex lg:flex-row flex-col gap-[24px] pb-[46px] items-center lg:justify-start justify-center w-screen '>
       //                             {
       //                                 details.map(({ id, icon, list, title, classes, textColor, hover  }) => (
       //                                     <motion.div
       //                                         initial={{ opacity: 0, y: -100 }}
       //                                         whileInView={{ opacity: 1, y: 0 }}
       //                                         viewport={{ once: true, amount: 0.8 }}
       //                                         transition={{ type: 'spring', bounce: 0.1, delay: 0.7 }}
       //                                         key={id}
       //                                         className={`${classes} mb-[24px] w-[250px] h-[200px] shadow-lg overflow-hidden transition duration-150 group relative rounded-[4px]`}
       //                                     >
       //                                         <div className='flex group-hover:blur-lg transition-all duration-500 flex-col min-h-full  relative overflow-hidden justify-center items-center'>
       //                                             <div className='text-primary-main py-[8px]'>
       //                                                  <span className={`${textColor} text-[38px]`}>
       //                                                      {icon}
       //                                                  </span>
       //                                             </div>
       //                                             <span className='font-5 text-[14px] py-[12px]'>
       //                                               {title}
       //                                              </span>
       //                                         </div>
       //                                         <div className={`${hover} min-h-full w-full  absolute flex top-60 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500`}>
       //                                             <div className='p-[12px] gap-[22px]'>
       //                                                 {
       //                                                     list.map(({ name, id }) => (
       //                                                         <div className='flex items-center gap-[6px]' key={id}>
       //                                                             {
       //                                                                 section === 'My Skills' &&
       //                                                                 <span className={`${textColor} text-[22px]`}>
       //                                                                     <MdKeyboardArrowRight />
       //                                                                  </span>
       //                                                             }
       //                                                             <span className='font-6 text-[12px]'>{name}</span>
       //                                                         </div>
       //                                                     ))
       //                                                 }
       //                                             </div>
       //                                         </div>
       //                                     </motion.div>
       //                                 ))
       //                             }
       //                         </div>
       //
       //                     </div>
       //                 ))
       //             }
       //         </div>
       //     </div>
       // </CustomContainer>
        <CustomContainer>
            <SectionContainer>
                <CustomHeader text='MY SPECIALTY' />
                <div className=''>
                    {
                        SKILLS_CONSTANT.map(({ section, details }) => (
                            <div key={section} className='flex flex-col py-[24px] items-center lg:items-start text-justify'>
                                <motion.div
                                    initial={ { opacity: 0, y:100 } }
                                    whileInView={ { opacity: 1, y: 0 } }
                                    viewport={ { once: true, amount: 0.9 } }
                                    transition={ { type: 'spring', bounce: 0.1, delay: 0.5 } }
                                >
                                    <h1 className='font-8 text-[16px] md:text-[34px] lg:text-[26px]'>
                                        {section}
                                    </h1>
                                </motion.div>
                                <div className='py-[24px] flex md:flex-row flex-col md:gap-[24px]'>
                                    {
                                        details.map(({ id, title, classes, textColor, hover, list, icon }) => (
                                            <motion.div
                                                initial={ { opacity: 0, y: 100 } }
                                                whileInView={ { opacity: 1, y:0 } }
                                                viewport={ { once: true, amount: 0.9 } }
                                                transition={ { duration: 1.4, delay: 0.5 } }
                                                key={id} className={`${classes} mb-[24px] w-[250px] h-[200px] shadow-md overflow-hidden transition duration-150 group relative rounded-[4px]`}>
                                                <div className='flex group-hover:blur-lg transition-all duration-500 flex-col min-h-full  relative overflow-hidden justify-center items-center'>
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
                                                            list.map(({ name, id }) => {
                                                               return  section === 'My Skills' ? (
                                                                    <motion.div
                                                                        initial={{ opacity: 0, y: 120 }}
                                                                        whileInView={{ opacity: 1, y: 0 }}
                                                                        transition={{ duration: 0.4, delay: 0.2 }}
                                                                        className='flex items-center gap-[6px]' key={id}>
                                                                        <span className={`${textColor} text-[22px]`}>
                                                                           <MdKeyboardArrowRight />
                                                                        </span>
                                                                        <span className='font-6 text-[12px]'>{name}</span>
                                                                    </motion.div>
                                                                ) : (
                                                                   <motion.div
                                                                       initial={{ opacity: 0 }}
                                                                       whileInView={{ opacity: 1}}
                                                                       transition={{ duration: 1.4, delay: 0.2 }}
                                                                       className='flex items-center gap-[6px]' key={id}>
                                                                       <span className='font-6 text-[12px]'>{name}</span>
                                                                   </motion.div>
                                                               );
                                                            })
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
            </SectionContainer>
        </CustomContainer>
    );
}

export default Skills;