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
                            <div key={id} className='w-fit h-fit shadow-2xl  rounded-[8px] basis-[calc((100%/3)-24px)]'>
                                <div className='relative'>
                                    <Image src={ image } alt='project' height={ 240 } className='rounded-t-[8px]'/>
                                </div>
                                <div className='py-2 px-4'>
                                    <h1 className='font-6 text-[18px] text-primary-main'>{name}</h1>
                                    <div className='pt-1'>
                                        <span className='font-2 text-[14px]'>
                                        {description}
                                    </span>
                                    </div>
                                    <div className='flex justify-center w-full py-4 ' >
                                        <span
                                            className='cursor-pointer font-2 text-primary-light hover:text-primary-main transition duration-300 ease-in-out'>
                                            Read More {link}
                                        </span>
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