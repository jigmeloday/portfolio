import { memo } from 'react';
import { useTypedSuperpower } from '@/shared/custom-hook/typewriter';

function Typewriter() {
    const typeWriter = useTypedSuperpower(['User Experience Designer', 'User Interface Developer', 'Frontend Developer', 'Backend Developer']) ;

    return(
        <span className='text-primary-main text-[10px] md:text-[18px]'> {typeWriter} <span className='animate-pulse text-[10px] md:text-[16px]'>_</span> </span>
    );
}

export default memo(Typewriter);