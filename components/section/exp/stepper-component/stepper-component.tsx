import { useState } from 'react';
import { EXP_DUMMY } from '@/components/section/exp/constant/exp.constant';

function StepperComponent() {
    const [open, setOpen] = useState('1');
    return(
        <ul className='relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out'>
            {
                EXP_DUMMY.map(({ id, title }, index) => {
                    return(
                        <li key={id} onClick={() => setOpen(id)}
                            className={`relative h-fit ${EXP_DUMMY.length !== index+1 && 'after:absolute after:left-[30px] after:top-[56px] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0]  dark:after:bg-neutral-600'}`}>
                            <div className='flex items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] focus:outline-none dark:after:bg-neutral-600 '>
                                <span className='mr-3 cursor-pointer flex h-[14px] w-[14px] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]'/>
                                <span className='cursor-pointer'>
                        {title}
                    </span>
                            </div>
                            <div className='ml-12 px-6'>

                                {
                                    open === id && <span>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </span>

                                }
                            </div>

                        </li>
                    );
                })
            }
        </ul>

    );
}

export default StepperComponent;