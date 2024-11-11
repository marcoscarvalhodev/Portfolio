import React, { Suspense } from 'react';
import BaseballCanvas from './components/Canvases/BaseballCanvas';
import FullCanvas from './components/Canvases/FullCanvas';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Projects from './components/ProjectsSection/Projects';

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

  const wrapper = React.useRef<HTMLDivElement | null>(null);

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
    <div ref={wrapper} className='relative w-full z-50 '>
      <NavBar />
      <section id='section1' className='top-sec h-[100vh] w-full relative'>
        <Hero />
      </section>

      <section id='section2' className='top-sec'>
        <Projects />
      </section>

      <FullCanvas />

      <div className='relative h-[200vh] w-screen'>
        <section id='section3' className='top-sec'>
          <BaseballCanvas />
        </section>
      </div>
    </div>
  );
}

export default App;
