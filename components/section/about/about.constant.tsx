import { AboutModel } from '@/components/section/about/about.model';
import { MdOutlineDeveloperMode, MdOutlineDesignServices } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';


export const DUMMY: string = 'Hey there! My name is Jigme Lodey and I am a passionate software developer from Thimphu, Bhutan. As a full stack developer, I leverage my skills in both front-end and back-end technologies to create robust and dynamic software solutions. I first fell in love with programming while studying IT in high school, and pursued my passion by majoring in Computer Science. Since then, I have been dedicated to exploring the endless possibilities of the programming world, constantly learning and evolving my skills. Whether it\'s building websites, web-apps, or mobile apps, I always strive to create innovative and user-friendly software that exceeds expectations. If you have a project that needs a tech-savvy touch, let\'s work together to bring it to life!';
export const ABOUT_BOX: AboutModel[] = [
    {
        id: '1',
        icon: <MdOutlineDeveloperMode/>,
        title: 'Mobile Application',
        description: 'I started as a React Native mobile app developer in 2020, built over two apps freelancing, and then moved to Flutter. Now experienced with both, I am confident in mobile app development.'
    },
    {
        id: '2',
        icon: <HiCode/>,
        title: 'Web Application',
        description: 'I\'ve been a website developer since 2018, starting with pure CSS, JS, and HTML. Through internships, I learned different frameworks and libraries, and now I work as a professional web developer.'
    },
    {
        id: '2',
        icon: <MdOutlineDesignServices/>,
        title: 'Design Application',
        description: 'Design is my second passion, and I took a crash course to learn the basics, including color selection. Though I am not a professional designer, I create designs for small-scale and personal projects using Figma, which I find easy to use.'
    }
];