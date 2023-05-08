import { AboutModel } from '@/components/section/about/about.model';
import { MdOutlineDeveloperMode } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';
import { FaDesktop } from 'react-icons/fa';


export const DUMMY: string = 'Hey there! My name is Jigme Lodey and I am a passionate software developer from Thimphu, Bhutan. As a full stack developer, I leverage my skills in both front-end and back-end technologies to create robust and dynamic software solutions. I first fell in love with programming while studying IT in high school, and pursued my passion by majoring in Computer Science. Since then, I have been dedicated to exploring the endless possibilities of the programming world, constantly learning and evolving my skills. Whether it\'s building websites, web-apps, or mobile apps, I always strive to create innovative and user-friendly software that exceeds expectations. If you have a project that needs a tech-savvy touch, let\'s work together to bring it to life!';
export const ABOUT_BOX: AboutModel[] = [
    {
        id: '1',
        icon: <MdOutlineDeveloperMode/>,
        title: 'Mobile Application',
        description: 'hello'
    },
    {
        id: '2',
        icon: <HiCode/>,
        title: 'Web Application',
        description: 'hello'
    },
    {
        id: '2',
        icon: <FaDesktop/>,
        title: 'System Application',
        description: 'hello'
    }
];