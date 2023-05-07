import Landing from '@/components/section/home/home';
import Exp from '@/components/section/exp/exp';
import About from '@/components/section/about/about';

export default function Home() {
    return (
        <main>
            <section>
                <Landing/>
            </section>
            <section>
                <About />
            </section>
            <section>
                <Exp />
            </section>
        </main>
    );
}
