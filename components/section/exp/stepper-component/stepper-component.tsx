import { useState } from 'react';
import { EXP_DUMMY } from '@/components/section/exp/constant/exp.constant';

function StepperComponent() {
    const [ open, setOpen ] = useState( '1' );
    return (
        <ul className='relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out'>
            {
                EXP_DUMMY.map( ( { id, title, currently, joined, stack }, index ) => {
                    return (
                        <li key={ id } onClick={ () => setOpen( id ) }
                            className={ `relative h-fit ${ EXP_DUMMY.length !== index + 1 && 'after:absolute after:left-[30px] after:top-[56px] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-secondary-main  dark:after:bg-secondary-main' }` }>
                            <div
                                className='flex items-center p-6 leading-[1.3rem] no-underline after:bg-secondary-main focus:outline-none dark:after:bg-secondary-main '>
                                <span
                                    className='mr-3 cursor-pointer flex h-[14px] w-[14px] items-center justify-center rounded-full bg-secondary-light '/>
                                <span className={`cursor-pointer font-2 ${open === id ? 'text-primary-main' : 'text-text-main '}`}>
                                    { title }
                                </span>
                            </div>
                            <div className='ml-6 px-6'>
                                {
                                    open === id &&
                                    <div className='w-[80%]'>
                                        <div>Frontend Developer</div>
                                        <div>
                                            <span>{joined}</span>
                                            -
                                            {
                                                currently ? <span>Now</span> : <span>end</span>
                                            }
                                        </div>
                                        <span className='text-text-main text-[16px] font-3'>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                                        </span>
                                    </div>
                                }
                            </div>

                        </li>);
                })
            }
        </ul>
    );
}

export default StepperComponent;