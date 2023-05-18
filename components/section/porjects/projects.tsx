import CustomContainer from '@/components/custom-container/custom-container';
import Image from 'next/image';
import { PROJECTS } from '@/components/section/porjects/constant/porject.constant';

function Projects() {
    return (
        <CustomContainer>
            <div>Projects</div>
            <div className='py-8'>
                <span> Write up goes here</span>
                <div className='flex flex-row flex-wrap py-8 gap-[24px] '>
                    {
                        PROJECTS.map( ( { id, name, link, image, description } ) => (
                            <div key={id} className='w-fit h-fit border rounded-[12px] basis-[calc((100%/3)-24px)]'>
                                <div className='relative'>
                                    <Image src={ image } alt='project' height={ 240 }/>
                                </div>
                                <div className='py-2 px-4'>
                                    <h1>{name}</h1>
                                    <span className='py-6'>
                                        {description}
                                    </span>
                                    <div className='flex justify-center w-full '>
                                        {link}
                                    </div>
                                </div>
                            </div>
                        ) )
                    }

                </div>
            </div>
        </CustomContainer>
    );
}

export default Projects;