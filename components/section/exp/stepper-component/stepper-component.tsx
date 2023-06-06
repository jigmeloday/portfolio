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
                            className={ `relative h-fit ${ (EXP_DUMMY.length !== index + 1 || open === id) && 'after:absolute after:left-[12px]  md:after:left-[30px] after:top-[34px] md:after:top-[54px] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-primary-main  ' } transition duration-200 ease-in-out` }>
                            <div
                                className='flex items-center p-2 md:p-6 leading-[1.3rem] no-underline after:bg-primary-main focus:outline-none transition duration-200 ease-in-out'>
                                <span
                                    className='md:mr-3 mr-[8px] cursor-pointer flex h-[8px] w-[8px] md:h-[14px] md:w-[14px] items-center justify-center rounded-full bg-primary-main transition duration-200 ease-in-out '/>
                                <div className='transition duration-200 ease-in-out hover:text-primary-main'>
                                    <span
                                        className={ `cursor-pointer text-[12px] md:text-[18px] lg:font-2 font-4 ${ open === id ? 'text-primary-main' : 'text-text-main ' } transition duration-200 ease-in-out` }>
                                    { company }
                                </span>
                                </div>
                            </div>
                            {
                                open === id &&
                                <motion.div
                                    initial={ { opacity: 0 } }
                                    animate={ { opacity: 1 } }
                                    transition={ { duration: 0.8 } }
                                    className='md:ml-6 ml-[8px] md:px-6 pl-4 py-[18px] transition-[height] duration-200 ease-in-out'>
                                    <div className='lg:w-[80%] md:w-[70%] w-full transition duration-200 ease-in-out'>
                                        <motion.span
                                            initial={ { opacity: 0 } }
                                            animate={ { opacity: 1 } }
                                            transition={ { duration: 0.8, delay: 0.3 } }
                                            className='font-6 md:text-[22px] text-text-dark'>{ title }</motion.span>
                                        <div
                                            className='md:pt-[12px] pt-[6px] md:pb-[24px] pb-[12px] md:font-3 font-5 text-[10px] md:text-[12px] text-text-dark'>
                                            <motion.span
                                                initial={ { opacity: 0 } }
                                                animate={ { opacity: 1 } }
                                                transition={ { duration: 0.8, delay: 0.5 } }
                                            >{ `${ joined } - ${ ended || 'Ongoing' }` }</motion.span>
                                        </div>
                                        <motion.div
                                            initial={ { opacity: 0, y: -40 } }
                                            animate={ { opacity:1, y: 0 } }
                                            transition={ { duration: 0.8, delay: 0.7 } }
                                        >
                                            <span
                                                className='text-text-main text-[13px] md:text-[16px] font-4 md:font-3'>
                                                { description }
                                            </span>
                                        </motion.div>
                                        <div
                                            className='flex gap-[12px] pt-4'>
                                            {
                                                stack?.map( ( { id, name, duration } ) =>
                                                    <motion.div
                                                        key={id}
                                                        initial={ { opacity: 0, y: -40 } }
                                                        animate={ { opacity: 1, y: 0 } }
                                                        transition={ { duration: 0.5, delay: duration } }
                                                    >
                                                        <Chip key={ id }>{ name }</Chip>
                                                    </motion.div> )
                                            }

                                        </div>
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