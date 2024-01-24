import { NavigationModel } from '@/components/layout/model/navigation.model';
import { RxDashboard } from 'react-icons/rx';
import { BiCodeCurly } from 'react-icons/bi';
import { FaCoffee, FaDatabase, FaLaptopCode, FaMobile , FaMapMarkerAlt, FaProjectDiagram, FaCode, FaNetworkWired } from 'react-icons/fa';
import { AiOutlineMail, AiOutlineLinkedin, AiOutlineInstagram, AiOutlineGithub, AiOutlineTwitter } from 'react-icons/ai';
import { HomeModel } from '@/components/section/home/model/home.model';
import { ContactInfo } from '@/components/section/contact/model/contact.model';
import { FiMail, FiPhone } from 'react-icons/fi';
import { SkillModel } from '@/components/section/skills/model/skill.model';

export const NAV_CONST: NavigationModel[] = [
    {
        id: '1',
        icon: <RxDashboard />,
        label: 'Home',
        link: '/#'
    },
    {
        id: '2',
        icon: <FaCoffee />,
        link: '/#about',
        label: 'Know Me'
    },
    {
        id: '3',
        icon: <FaLaptopCode />,
        link: '/#exp',
        label: 'Experience'
    },
    {
        id: '4',
        icon: <FaProjectDiagram />,
        link: '/#work',
        label: 'Projects'
    },
    {
        id: '5',
        icon: <AiOutlineMail />,
        link: '/#contact',
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
        detail: 'tenzin27norzang@gmail.com'
    },
    {
        id: 'c2',
        icon: <FiPhone />,
        label: 'Phone',
        detail: '+975-77664575'
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
                title: 'Qulaity Assurance',
                icon: <FaCode />,
                classes: 'border-b border-expbox-card1-border',
                textColor: 'text-custom-card1',
                hover: 'bg-hover-card1',
                list: [
                    {
                        id: 'l1',
                        name: 'Cypress'
                    },
                    {
                        id: 'l2',
                        name: 'Pen Testing'
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
                        name: 'Since my graduation, I started working in a software development company in Bhutan. Since then I have been doing lots of projects on web development with various frameworks.'
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
                        name: 'I did a lot of mobile application development while doing my bacholers and also developed an AI incorporated mobile application using flutter.  I am confident in mobile app development.'
                    },
                ]
            },
            {
                id: 's1',
                title: 'QA Testing',
                icon: <FaNetworkWired />,
                textColor: 'text-custom-card6',
                classes: 'border-b border-expbox-card6-border',
                hover: 'bg-hover-card6',
                list: [
                    {
                        id: 'l1',
                        name: 'What\'s a software without quality right? I have also worked as quality assurance for three projects, writing end-to-end testing using the cypress framework and also specializing in pen testing.'
                    },

                ]
            }
        ]
    }


];