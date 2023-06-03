import Landing from '@/components/section/home/home';
import About from '@/components/section/about/about';
import Exp from '@/components/section/exp/exp';
import Skills from '@/components/section/skills/skills';
// import Projects from '@/components/section/porjects/projects';
// import Contact from '@/components/section/contact/contact';

export default function Home() {
    return (
        <main>
            <section className='w-screen'>
                <Landing/>
            </section>
            <section>
                <About />
            </section>
            <section>
                <Exp />
            </section>
            <section>
                <Skills />
            </section>
            {/*<section>*/}
            {/*    <Projects />*/}
            {/*</section>*/}
            {/*<section>*/}
            {/*    <Contact />*/}
            {/*</section>*/}
        </main>
    );
}
