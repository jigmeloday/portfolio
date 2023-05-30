import { NavigationModel } from '@/components/layout/model/navigation.model';
import { RxDashboard } from 'react-icons/rx';
import { FaCoffee, FaLaptopCode, FaMapMarkerAlt, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HomeModel } from '@/components/section/home/model/home.model';
import { ContactInfo } from '@/components/section/contact/model/contact.model';
import { FiMail, FiPhone } from 'react-icons/fi';
import { SkillModel } from '@/components/section/skills/model/skill.model';

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

export const CONTACT_INFO: ContactInfo[] = [
    {
        id: 'c1',
        icon: <FiMail />,
        label: 'Email',
        detail: 'jigmenlodey@gmail.com'
    },
    {
        id: 'c2',
        icon: <FiPhone />,
        label: 'Phone',
        detail: '+975-77455740'
    },
    {
        id: 'c3',
        icon: <FaMapMarkerAlt />,
        label: 'Location',
        detail: 'Babesa, Thimphu, Bhutan'
    }
];

export const SKILLS_CONSTANT: SkillModel[] = [
    {
        title: 'User Interface',
        icon: <FaCode />,
        list: [
            {
                name: 'string'
            }
        ]
    }
];