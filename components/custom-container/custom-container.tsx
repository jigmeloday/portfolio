import { ReactNode } from 'react';

function CustomContainer(props: { children: ReactNode }) {
    return(
        <div className='min-h-screen flex justify-end px-[28px]'>
            <div className='w-[76%]  py-[32px]'>
                {props.children}
            </div>
        </div>
    );
}

export default CustomContainer;