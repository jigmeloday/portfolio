import { useState } from 'react';

function StepperComponent() {
    const [open, setOpen] = useState('1');
    return(
        <ul className='relative m-0 w-full list-none overflow-hidden p-0 transition-[height] duration-200 ease-in-out'>
            <li onClick={() => setOpen('1')} className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                    <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                        1
                    </span>
                    <span className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                        step1
                    </span>
                </div>
                {
                    open === '1' && <div className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 ps-1 duration-300 ease-in-out">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                }
            </li>
            <li className="relative h-fit after:absolute after:left-[2.45rem] after:top-[3.6rem] after:mt-px after:h-[calc(100%-2.45rem)] after:w-px after:bg-[#e0e0e0] after:content-[''] dark:after:bg-neutral-600">
                <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                    <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                        2
                    </span>
                    <span className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                        step2
                    </span>
                </div>
                {
                    open === '2' && <div className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 ps-1 duration-300 ease-in-out">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                }
            </li>
            <li className="relative h-fit">
                <div className="flex cursor-pointer items-center p-6 leading-[1.3rem] no-underline after:bg-[#e0e0e0] after:content-[''] hover:bg-[#f9f9f9] focus:outline-none dark:after:bg-neutral-600 dark:hover:bg-[#3b3b3b]">
                    <span className="mr-3 flex h-[1.938rem] w-[1.938rem] items-center justify-center rounded-full bg-[#ebedef] text-sm font-medium text-[#40464f]">
                        3
                    </span>
                    <span className="text-neutral-500 after:absolute after:flex after:text-[0.8rem] after:content-[data-content] dark:text-neutral-300">
                        step3
                    </span>
                </div>
                {
                    open === '3' && <div className="transition-[height, margin-bottom, padding-top, padding-bottom] left-0 overflow-hidden pb-6 pl-[3.75rem] pr-6 ps-1 duration-300 ease-in-out">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
                }
            </li>
        </ul>
    );
}

export default StepperComponent;