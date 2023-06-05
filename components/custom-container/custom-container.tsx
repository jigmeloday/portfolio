import { ReactNode } from 'react';

function CustomContainer(props: { children: ReactNode }) {
    return(
       <div className='flex lg:min-h-screen justify-start lg:justify-end py-[42px]'>
           <div className='lg:w-[74%] w-full px-[16px] md:px-[40px] lg:px-[8px] '>
               {props.children}
           </div>
       </div>
    );
}

export default CustomContainer;