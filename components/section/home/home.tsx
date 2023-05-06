import { SOCIAL_ICONS } from '@/components/icons/icons';

function Landing(){
    return(
        <div className='flex flex-col justify-center items-center w-screen min-h-screen '>
            <div className='flex items-center justify-center bg-primary-dark shadow-2xl  rounded-full w-[200px] h-[200px] ' >
                profile
            </div>
            <div className='pt-[38px] text-center'>
                <h1 className='text-[40px] font-8'> Jigme Lodey </h1>
                <p className='pt-[8px] text-[24px]'> I am Software Developer </p>
                <div className='py-[30px] flex gap-[18px] justify-center'>
                    {
                        SOCIAL_ICONS.map(({ id, name }) => (
                            <div key={id} className='text-[34px] cursor-pointer text-primary-main hover:scale-150 translation duration-300 ' >
                                {name}
                            </div>
                        ))
                    }
                </div>

            </div>
        </div>
    );
}

export default Landing;