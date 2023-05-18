import CustomContainer from '@/components/custom-container/custom-container';
import Image from 'next/image';
import img from '../../../public/images/naykabgokap.png';

function Projects() {
    return(
        <CustomContainer>
            <div>Projects</div>
            <div className='py-8'>
                <span> Write up goes here</span>
                <div className='flex flex-row py-8 gap-[24px]'>
                    <div className='w-fit h-fit border rounded-[12px]'>
                        <div className='relative'>
                            <Image src={img} alt='project' height={240} />
                        </div>
                        <div className='py-2 px-4'>
                            <h1>Project Name</h1>
                            <span className='py-6'>
                            hello
                        </span>
                            <div className='flex justify-center w-full '>
                                Visit
                            </div>
                        </div>
                    </div>
                    <div className='w-fit h-fit border rounded-[12px]'>
                        <div className='relative'>
                            <Image src={img} alt='project' height={240} />
                        </div>
                        <div className='py-2 px-4'>
                            <h1>Project Name</h1>
                            <span className='py-6'>
                            hello
                        </span>
                            <div className='flex justify-center w-full '>
                                Visit
                            </div>
                        </div>
                    </div>
                    <div className='w-fit h-fit border rounded-[12px]'>
                        <div className='relative'>
                            <Image src={img} alt='project' height={240} />
                        </div>
                        <div className='py-2 px-4'>
                            <h1>Project Name</h1>
                            <span className='py-6'>
                            hello
                        </span>
                            <div className='flex justify-center w-full '>
                                Visit
                            </div>
                        </div>
                    </div>
                    <div className='w-fit h-fit border rounded-[12px]'>
                        <div className='relative'>
                            <Image src={img} alt='project' height={240} />
                        </div>
                        <div className='py-2 px-4'>
                            <h1>Project Name</h1>
                            <span className='py-6'>
                            hello
                        </span>
                            <div className='flex justify-center w-full '>
                                Visit
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </CustomContainer>
    );
}

export default Projects;