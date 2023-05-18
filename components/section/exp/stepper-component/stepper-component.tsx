import { useState } from 'react';
import { EXP_DUMMY } from '@/components/section/exp/constant/exp.constant';
import Chip from '@/components/chip/chip';
import { motion } from 'framer-motion';

function StepperComponent() {
    const [ open, setOpen ] = useState( '1' );
    return (
        <ul className='relative m-0 w-full list-none overflow-hidden p-0 transition duration-200 ease-in-out'>
            {
                EXP_DUMMY.map( ( { id, title, joined, description, ended, stack, company }, index ) =>
                    (
                        <li key={ id } onClick={ () => setOpen( id ) }
                            className={ `relative h-fit ${ (EXP_DUMMY.length !== index + 1 || open === id )  && 'after:absolute after:left-[30px] after:top-[56px] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-secondary-main  ' } transition duration-200 ease-in-out` }>
                            <div className='flex items-center p-6 leading-[1.3rem] no-underline after:bg-secondary-main focus:outline-none transition duration-200 ease-in-out'>
                                <span className='mr-3 cursor-pointer flex h-[14px] w-[14px] items-center justify-center rounded-full bg-secondary-light transition duration-200 ease-in-out '/>
                                <span
                                    className={ `cursor-pointer font-2 ${ open === id ? 'text-primary-main' : 'text-text-main ' } transition duration-200 ease-in-out` }>
                                    { company }
                                </span>
                            </div>
                                {
                                    open === id &&
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1}}
                                        transition={{ duration: 0.8 }}
                                        className='ml-6 px-6 transition-[height] duration-200 ease-in-out'>
                                        <div className='lg:w-[80%] transition duration-200 ease-in-out'>
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1}}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className='font-6 text-[22px] text-text-light'>{title}</motion.span>
                                            <div className='pt-[2px] pb-[8px] font-3 text-[14px] text-text-dark'>
                                                <motion.span
                                                    initial={{ opacity: 0 }}
                                                    animate={{ opacity: 1}}
                                                    transition={{ duration: 0.8, delay: 0.3 }}
                                                >{ `${ joined } - ${ ended || 'Ongoing' }` }</motion.span>
                                            </div>
                                            <motion.span
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1}}
                                                transition={{ duration: 0.8, delay: 0.4 }}
                                                className='text-text-main text-[16px] font-3'>
                                                {description}
                                            </motion.span>
                                            <motion.div
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1}}
                                                transition={{ duration: 0.8, delay: 0.5 }}
                                                className='flex gap-[12px] pt-4'>
                                                {
                                                    stack?.map( ( { id, name } ) => <Chip key={ id }>{ name }</Chip> )
                                                }

                                            </motion.div>
                                        </div>
                                    </motion.div>
                                }
                        </li>
                    )
                )
            }
        </ul>
    );
}

export default StepperComponent;