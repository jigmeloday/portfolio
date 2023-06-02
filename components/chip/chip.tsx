import { ReactNode } from 'react';

function Chip(props: { children: ReactNode }) {
    return(
        <div className='font-2 border-[1px] w-fit px-[8px] border-primary-light shadow-lg rounded-[8px]'>
            {props.children}
        </div>
    );
}

export default Chip;