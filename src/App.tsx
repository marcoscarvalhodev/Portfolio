import React, { Suspense } from 'react';
import BaseballCanvas from './components/Canvases/BaseballCanvas';
import FullCanvas from './components/Canvases/FullCanvas';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Projects from './components/ProjectsSection/Projects';
import Contact from './components/Contact/Contact';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({ ignoreMobileResize: true });
  });

  React.useEffect(() => {
    const ctx = gsap.context(() => {});

    ctx.revert();
  });

  const wrapper = React.useRef<HTMLElement | null>(null);

  React.useLayoutEffect(() => {
    window.scrollTo(0, 0);

    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('beforeunload', handleBeforeUnload);

    return () => {
      window.removeEventListener('beforeunload', handleBeforeUnload);
    };
  }, []);

  return (
    <main ref={wrapper} className='relative w-full z-50 '>
      <FullCanvas />

      <NavBar />
      <section id='section1' className='top-sec h-[100vh] w-full relative'>
        <Hero />
      </section>

      <section id='section2' className='top-sec'>
        <Projects />
      </section>

      <section id='section3' className='top-sec'>
        <BaseballCanvas />
      </section>

      <section id='section4' className='top-sec'>
        <Contact />
      </section>

      <section className='h-[100vh] w-screen'></section>
    </main>
  );
}

export default App;
