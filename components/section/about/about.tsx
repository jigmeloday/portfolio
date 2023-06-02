// import { motion } from 'framer-motion';
// import { ABOUT_BOX, DUMMY } from '@/components/section/about/about.constant';
import CustomContainer from '@/components/custom-container/custom-container';
import CustomHeader from '@/components/custom-header/custom-header';

function About() {
    return (
            <CustomContainer>

                {/*<motion.div*/}
                {/*    initial={ { opacity: 0, y: - 100 } }*/}
                {/*    whileInView={ { opacity: 1, y: 0 } }*/}
                {/*    viewport={ { once: true, amount: 0.8 } }*/}
                {/*    transition={ { type: 'spring', bounce: 0.1, delay: 0.6 } }*/}
                {/*    className='py-[32px] text-justify text-text-main'>*/}
                {/*    { DUMMY }*/}
                {/*</motion.div>*/}
                {/*<div className='flex flex-col  items-center md:flex-row py-8  gap-[12px] justify-center lg:justify-between'>*/}
                {/*    {*/}
                {/*        ABOUT_BOX.map( ( { id, icon, title, description } ) => (*/}
                {/*            <motion.div*/}
                {/*                initial={{ opacity: 0, y: -100 }}*/}
                {/*                whileInView={{ opacity: 1, y: 0 }}*/}
                {/*                viewport={{ once: true, amount: 0.8 }}*/}
                {/*                transition={{ type: 'spring', bounce: 0.1, delay: 0.7 }}*/}
                {/*                key={id}*/}
                {/*                className='w-[250px] h-[200px] overflow-hidden transition duration-150 group relative rounded-[16px]'*/}
                {/*            >*/}
                {/*                <div className='flex flex-col min-h-full bg-primary-main shadow-2xl relative overflow-hidden justify-center items-center'>*/}
                {/*                    <div className='text-primary-main py-[8px]'>*/}
                {/*                            <span className='text-[38px]'>*/}
                {/*                                {icon}*/}
                {/*                            </span>*/}
                {/*                    </div>*/}
                {/*                    <span className='font-3 text-[14px] py-[12px]'>*/}
                {/*                            {title}*/}
                {/*                        </span>*/}
                {/*                </div>*/}
                {/*                <div className='min-h-full w-full items-center justify-center bg-hover-main absolute flex top-60 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-500'>*/}
                {/*                    <div className='p-[12px] '>*/}
                {/*                           <span className='text-text-light font-2 text-[12px] '>*/}
                {/*                                {description}*/}
                {/*                           </span>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </motion.div>*/}
                {/*        ) )*/}
                {/*    }*/}
                {/*</div>*/}

                <div className='px-[32px]'>
                    <CustomHeader text='About Me' />
                </div>
            </CustomContainer>

    );
}

export default About;