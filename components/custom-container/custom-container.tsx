import { ReactNode } from 'react';

function CustomContainer(props: { children: ReactNode }) {
    return(
        <div className='min-h-screen flex lg:justify-end lg:px-[28px]'>
            <div className='lg:w-[76%]  py-[32px]'>
                {props.children}
            </div>
        </div>
    );
}

export default CustomContainer;