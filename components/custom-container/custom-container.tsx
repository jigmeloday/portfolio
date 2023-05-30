import { ReactNode } from 'react';

function CustomContainer(props: { children: ReactNode }) {
    return(
        <div className=' justify-center flex lg:px-[150px] py-[6%] '>
            <div className='w-[80%] justify-start'>
                {props.children}
            </div>
        </div>
    );
}

export default CustomContainer;