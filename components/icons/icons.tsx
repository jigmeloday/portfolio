import { NavigationModel } from '@/components/layout/model/navigation.model';
import { RxDashboard } from 'react-icons/rx';
import {  FaCoffee, FaLaptopCode, FaProjectDiagram } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HomeModel } from '@/components/section/home/model/home.model';

export const NAV_CONST: NavigationModel[] = [
    {
        id: '1',
        icon: <RxDashboard />,
        link: ''
    },
    {
        id: '2',
        icon: <FaCoffee />,
        link: '<faBeer />'
    },
    {
        id: '3',
        icon: <FaLaptopCode />,
        link: ''
    },
    {
        id: '4',
        icon: <FaProjectDiagram />,
        link: ''
    },
    {
        id: '5',
        icon: <AiOutlineMail />,
        link: ''
    }
];

export const SOCIAL_ICONS: HomeModel[] = [
    {
        id: '1',
        name: <AiOutlineLinkedin />
    },
    {
        id: '2',
        name: <AiOutlineInstagram />
    },
    {
        id: '3',
        name: <AiOutlineGithub />
    },
    {
        id: '4',
        name: <AiOutlineTwitter />
    }
];