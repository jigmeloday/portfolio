import { ReactNode } from 'react';

function Chip(props: { children: ReactNode }) {
    return(
        <div className='md:font-2 font-4 border-[1px] flex justify-center items-center text-[12px] lg:text-[16px] w-fit px-[8px] border-primary-light shadow-lg rounded-[8px]'>
            {props.children}
        </div>
    );
}

export default Chip;