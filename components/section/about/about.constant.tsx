import { AboutModel } from '@/components/section/about/about.model';
import { MdOutlineDeveloperMode, MdOutlineDesignServices } from 'react-icons/md';
import { HiCode } from 'react-icons/hi';


export const DUMMY = [
    {
        title: 'Who Am I?',
        description: 'Greetings! I am Tenzin Norzang, a dedicated professional with a bachelor\'s degree in Information Technology from the College of Science and Technology in Bhutan. My enthusiasm for technology extends to a fervent passion for Networking and Artificial Intelligence. What truly excites me is the ever-evolving landscape of these fields. Beyond my academic qualifications, I am actively engaged in continuous skill development, particularly in the realm of web development. Committed to staying abreast of the latest trends and advancements, I am eager to apply my knowledge and skills to contribute to innovative projects and make a meaningful impact in the tech industry.'
    },
    {
        title: 'What do I do?',
        description: 'I am a highly motivated and results-driven professional currently contributing to the success of SELISE Bhutan, a dynamic software development company. In my role as a Software Developer, I actively engage in the entire software development lifecycle, showcasing adaptability, strong problem-solving skills, and a commitment to timely project delivery. I continuously seek hands-on experiences to stay abreast of industry trends. I have a proven track record of successful project delivery and am dedicated to personal growth and professional development. I am eager to further develop expertise in [Specify areas of interest] and make meaningful contributions to innovative projects.'
    },
];
export const ABOUT_BOX: AboutModel[] = [
    {
        id: '1',
        icon: <MdOutlineDeveloperMode/>,
        title: 'Mobile Application',
        description: 'I did a lot of mobile application development while doing my bacholers and also developed an AI incorporated mobile application using flutter.  I am confident in mobile app development.'
    },
    {
        id: '2',
        icon: <HiCode/>,
        title: 'Web Application',
        description: 'Since my graduation, I started working in a software development company in Bhutan. Since then I have been doing lots of projects on web development with various frameworks.'
    },
    {
        id: '3',
        icon: <MdOutlineDesignServices/>,
        title: 'QA Testing',
        description: 'What\'s a software without quality right? I have also worked as quality assurance for three projects, writing end-to-end testing using the cypress framework and also specializing in pen testing.'
    }
];