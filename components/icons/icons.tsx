import { NavigationModel } from '@/components/layout/model/navigation.model';
import { RxDashboard } from 'react-icons/rx';
import { BiCodeCurly } from 'react-icons/bi';
import { FaCoffee, FaDatabase, FaLaptopCode, FaMapMarkerAlt, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HomeModel } from '@/components/section/home/model/home.model';
import { ContactInfo } from '@/components/section/contact/model/contact.model';
import { FiMail, FiPhone } from 'react-icons/fi';
import { SkillModel } from '@/components/section/skills/model/skill.model';
import { TbTools } from 'react-icons/tb';

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
        id: 's1',
        title: 'User Interface',
        icon: <FaCode />,
        list: [
            {
                id: 'l1',
                name: 'HTML'
            },
            {
                id: 'l2',
                name: 'CSS'
            },
            {
                id: 'l2',
                name: 'SCSS'
            },
            {
                id: 'l2',
                name: 'Tailwind'
            },
            {
                id: 'l2',
                name: 'StyleComponent'
            },
            {
                id: 'l2',
                name: 'MUI'
            }
        ]
    },
    {
        id: 's1',
        title: 'Fontend',
        icon: <BiCodeCurly />,
        list: [
            {
                id: 'l1',
                name: 'Javascript'
            },
            {
                id: 'l2',
                name: 'TypeScript'
            },
            {
                id: 'l2',
                name: 'React'
            },
            {
                id: 'l2',
                name: 'Angular'
            },
            {
                id: 'l2',
                name: 'React Native'
            },
            {
                id: 'l2',
                name: 'Next.js'
            },
            {
                id: 'l2',
                name: 'Node.js'
            }
        ]
    },
    {
        id: 's1',
        title: 'Backend',
        icon: <FaDatabase />,
        list: [
            {
                id: 'l1',
                name: 'Mongo'
            },
            {
                id: 'l2',
                name: 'Postgres'
            },
            {
                id: 'l2',
                name: 'Rails'
            },
            {
                id: 'l2',
                name: 'Go'
            },
            {
                id: 'l2',
                name: 'Spring'
            },
            {
                id: 'l2',
                name: 'Express'
            },
            {
                id: 'l2',
                name: 'Firebase'
            }
        ]
    },
    {
        id: 's1',
        title: 'Other',
        icon: <TbTools />,
        list: [
            {
                id: 'l1',
                name: 'Figma'
            },
            {
                id: 'l2',
                name: 'Docker'
            },
            {
                id: 'l2',
                name: 'Github'
            },
            {
                id: 'l2',
                name: 'Bitbucket'
            }
        ]
    }
];