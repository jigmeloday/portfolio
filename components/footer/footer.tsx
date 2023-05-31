function Footer() {
    const date = new Date();
    return(
        <div className='py-[22px] font-3 text-[14px] text-center' >
            <div className='flex justify-center'>
                <div className='w-[86%] text-[12px] font-2'>
                    ©Copyright ©{date.getFullYear()} All rights reserved
                </div>
            </div>
        </div>
    );
}

export default Footer;