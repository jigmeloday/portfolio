import { ReactNode } from 'react';

function SectionContainer(props: { children: ReactNode }) {
    return(
        <div className='flex justify-center lg:justify-start md:py-[44px]'>
            { props.children }
        </div>
    );
}

export default SectionContainer;