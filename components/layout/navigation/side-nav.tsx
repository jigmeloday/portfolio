import { NavigationModel } from '@/components/layout/model/navigation.model';
import { RxDashboard } from 'react-icons/rx';
import { FaBeer, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';
import {AiOutlineMail} from 'react-icons/ai';

const NAV_CONST: NavigationModel[] = [
    {
        id: '1',
        icon: <RxDashboard />,
        link: ''
    },
    {
        id: '1',
        icon: <FaBeer />,
        link: '<faBeer />'
    },
    {
        id: '1',
        icon: <FaLaptopCode />,
        link: ''
    },
    {
        id: '1',
        icon: <FaProjectDiagram />,
        link: ''
    },
    {
        id: '1',
        icon: <AiOutlineMail />,
        link: ''
    }
];

function SideNav() {
    return(
        <div className='lg:block drop-shadow-2xl fixed hidden top-[30%] left-[8%] bg-primary-dark rounded-[12px] px-2 py-6 text-primary-main'>
            {
                NAV_CONST.map(({ icon, id}) => (
                    <div key={id} className='flex justify-center px-[4px] py-[8px] '>
                        <div className='text-[14px] items-center cursor-pointer hover:text-primary-dark hover:scale-150 transition delay-1500 duration-500 ease-in-out'>
                            {icon}
                        </div>
                    </div>
                ))
            }
        </div>
    );
}

export default SideNav;
