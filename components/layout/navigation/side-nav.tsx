import { NAV_CONST } from '@/components/layout/constant/navigation.constant';

function SideNav() {
    return(
        <div className='lg:block shadow-2xl fixed hidden top-[40%] left-[8%] bg-primary-dark rounded-[8px] px-4 py-6 text-yellow-300'>
            {
                NAV_CONST.map(({ icon, id, link}) => (
                    <div key={id}>
                        {icon}
                    </div>
                ))
            }
        </div>
    );
}

export default SideNav;