import { NavigationModel } from '@/components/layout/model/navigation.model';
import { RxDashboard } from 'react-icons/rx';
import { BiCodeCurly } from 'react-icons/bi';
import { FaCoffee, FaDatabase, FaLaptopCode, FaMobile , FaMapMarkerAlt, FaProjectDiagram, FaCode } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HomeModel } from '@/components/section/home/model/home.model';
import { ContactInfo } from '@/components/section/contact/model/contact.model';
import { FiMail, FiPhone } from 'react-icons/fi';
import { SkillModel } from '@/components/section/skills/model/skill.model';
import { MdDesignServices } from 'react-icons/md';

export const NAV_CONST: NavigationModel[] = [
    {
        id: '1',
        icon: <RxDashboard />,
        label: 'Home',
        link: ''
    },
    {
        id: '2',
        icon: <FaCoffee />,
        link: '<faBeer />',
        label: 'Know me'
    },
    {
        id: '3',
        icon: <FaLaptopCode />,
        link: '',
        label: 'Experince'
    },
    {
        id: '4',
        icon: <FaProjectDiagram />,
        link: '',
        label: 'Projects'
    },
    {
        id: '5',
        icon: <AiOutlineMail />,
        link: '',
        label: 'Contact'
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
        detail: 'Babesa,Thimphu,Bhutan'
    }
];

export const SKILLS_CONSTANT: SkillModel[] = [
    {
        section: 'My Skills',
        details: [
            {
                id: 's1',
                title: 'User Interface',
                icon: <FaCode />,
                classes: 'border-b border-expbox-card1-border',
                textColor: 'text-custom-card1',
                hover: 'bg-hover-card1',
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
                textColor: 'text-custom-card2',
                classes: 'border-b border-expbox-card2-border',
                hover: 'bg-hover-card2',
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
                textColor: 'text-custom-card3',
                classes: 'border-b border-expbox-card3-border',
                hover: 'bg-hover-card3',
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
            }
        ]
    },
    {
        section: 'My Expertise',
        details: [
            {
                id: 's1',
                title: 'Web Development',
                icon: <FaLaptopCode />,
                textColor: 'text-custom-card4',
                classes: 'border-b border-expbox-card4-border',
                hover: 'bg-hover-card4',
                list: [
                    {
                        id: 'l1',
                        name: 'I\'ve been a website developer since 2018, starting with pure CSS, JS, and HTML. Through internships, I learned different frameworks and libraries, and now I work as a professional web developer.'
                    },
                ]
            },
            {
                id: 's1',
                title: 'Application Development',
                icon: <FaMobile />,
                textColor: 'text-custom-card5',
                classes: 'border-b border-expbox-card5-border',
                hover: 'bg-hover-card5',
                list: [
                    {
                        id: 'l1',
                        name: 'I started as a React Native mobile app developer in 2020, built over two apps freelancing, and then moved to Flutter. Now experienced with both, I am confident in mobile app development.'
                    },
                ]
            },
            {
                id: 's1',
                title: 'Designing',
                icon: <MdDesignServices />,
                textColor: 'text-custom-card6',
                classes: 'border-b border-expbox-card6-border',
                hover: 'bg-hover-card6',
                list: [
                    {
                        id: 'l1',
                        name: 'Design is my second passion, and I took a crash course to learn the basics, including color selection. Though I am not a professional designer, I create designs for small-scale and personal projects using Figma, which I find easy to use.'
                    },

                ]
            }
        ]
    }


];