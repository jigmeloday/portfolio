import { CONTACT_INFO } from '@/components/icons/icons';

function ContactInfo() {
    const action = (label: string): void => {
        label.includes('Email') ? window.location.href = 'mailto:jigmenlodey@gmail.com': label.includes('Phone')? window.location.href = 'tel:77455740' :
            window.open('https://www.google.com/maps/place/Thimphu/@27.4794937,89.6384811,13z/data=!3m1!4b1!4m5!3m4!1s0x39e19419962037b7:0x7c01ffe2660560d1!8m2!3d27.4712216!4d89.6339041');
    };
    return(
        <div className='flex lg:flex-col gap-[32px] my-[32px] lg:justify-start justify-center'>
            {
                CONTACT_INFO.map(({ id, icon, label, detail }) => (
                    <div
                        key={id}
                        className='flex py-[12px] lg:flex-row flex-col items-center gap-[14px]'>
                        <div
                            onClick={() => action(label)}
                            className='flex bg-secondary-main h-[54px] w-[54px] shadow-2xl hover:bg-secondary-dark hover:text-text-light transition duration-200 ease-in-out rounded-full items-center justify-center cursor-pointer'>
                                        <span className='text-[18px]'>
                                            {icon}
                                        </span>
                        </div>
                        <div className='hidden lg:block'>
                            <div className='flex flex-col'>
                                <span className='font-4 text-text-main'>{label}</span>
                                <span className='font-2 text-[14px] text-text-main'>{detail}</span>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default ContactInfo;