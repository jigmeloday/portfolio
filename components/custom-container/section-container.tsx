import { ReactNode } from 'react';

function SectionContainer(props: { children: ReactNode }) {
    return(
        <div className='flex flex-col items-center lg:items-start md:py-[44px] py-[26px] px-[32px] lg:px-[0]'>
            { props.children }
        </div>
    );
}

export default SectionContainer;