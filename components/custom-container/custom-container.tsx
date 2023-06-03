import { ReactNode } from 'react';

function CustomContainer(props: { children: ReactNode }) {
    return(
       <div className='flex min-h-screen bg-blue-200 lg:justify-end'>
           <div className='lg:w-[74%] w-full'>
               {props.children}
           </div>
       </div>
    );
}

export default CustomContainer;