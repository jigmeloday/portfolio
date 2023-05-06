import { NAV_CONST } from '@/components/layout/constant/navigation.constant';
import Icons from '@/components/icons/icons';

function SideNav() {
    return(
        <div className='lg:block drop-shadow-2xl fixed hidden top-[40%] left-[8%] bg-primary-dark rounded-[12px] px-2 py-6 text-primary-main'>
            {
                NAV_CONST.map(({ icon, id}) => (
                    <div key={id} className='flex justify-center px-[4px] py-[8px] gap-0.5'>
                        <Icons name={icon} className='text-[24px] items-center cursor-pointer hover:text-primary-dark hover:scale-150 transition delay-1500 duration-500 ease-in-out' />
                    </div>
                ))
            }
        </div>
    );
}

export default SideNav;
