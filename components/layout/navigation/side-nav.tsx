import { NavigationModel } from '@/components/layout/model/navigation.model';

const NAV_CONST: NavigationModel[] = [
    {
        id: '1',
        icon: 'faHome',
        link: ''
    },
    {
        id: '1',
        icon: 'faUser',
        link: ''
    },
    {
        id: '1',
        icon: 'faLaptopCode',
        link: ''
    },
    {
        id: '1',
        icon: 'faDiagramProject',
        link: ''
    },
    {
        id: '1',
        icon: 'faContactCard',
        link: ''
    }
];

function SideNav() {
    return(
        <div className='lg:block drop-shadow-2xl fixed hidden top-[30%] left-[8%] bg-primary-dark rounded-[12px] px-2 py-6 text-primary-main'>
            {
                NAV_CONST.map(({ icon, id}) => (
                    <div key={id} className='flex justify-center px-[4px] py-[8px] '>
                        {icon}
                        {/*<Icons name={icon} className='text-[24px] py-2 items-center cursor-pointer hover:text-primary-dark hover:scale-150 transition delay-1500 duration-500 ease-in-out' />*/}
                    </div>
                ))
            }
        </div>
    );
}

export default SideNav;
