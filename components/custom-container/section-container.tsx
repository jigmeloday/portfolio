import { ReactNode } from 'react';

function SectionContainer(props: { children: ReactNode }) {
    return(
        <div className='flex flex-col items-center lg:justify-start md:py-[44px] py-[26px]'>
            { props.children }
        </div>
    );
}

export default SectionContainer;