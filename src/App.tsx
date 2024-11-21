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
import Skills from './components/Skills/Skills';
import ScreenSizes from './hooks/screenSizes';
import NavBarMobile from './components/NavBar/NavBarMobile';
gsap.registerPlugin(ScrollTrigger);

function App() {
  const titleRef = React.useRef<null | HTMLHeadingElement>(null);
  const { smallScreen } = ScreenSizes();

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

      {smallScreen ? <NavBarMobile /> : <NavBar />}

      <section id='section1' className='top-sec h-[100vh] w-full relative'>
        <Hero />
      </section>

      <section id='section2' className='top-sec relative z-[50]'>
        <h1 className='relative z-[998] text-black_10 text-f-10 lg:m-sp-20 sm:m-sp-50 '>
          Works
        </h1>
        <Projects />
      </section>

      <section id='section3' className='top-sec'>
        <h1
          ref={titleRef}
          className='text-black_10 text-f-10 relative z-[998] lg:m-sp-20 sm:m-sp-50 '
        >
          Skills
        </h1>
        <Skills />
      </section>

      <section id='section4' className='top-sec'>
        <h1 className='text-black_10 text-f-10 relative z-[998] lg:m-sp-20 sm:m-sp-50'>
          Contact
        </h1>
        <Contact />
      </section>

      <section className='h-[100vh] w-screen relative'>
        <button className='absolute translate-x-[-50%] translate-y-[-50%] top-[50%] left-[50%] z-[998] text-f-25 bg-transparent rounded-[4rem] border-solid border-[3px] border-blue_10 text-blue_10 py-[0.5rem] px-[2rem] hover:bg-blue_10 hover:text-white_10 transition-all duration-[0.7s]'>
          Restart animation
        </button>
        <BaseballCanvas />
      </section>
    </main>
  );
}

export default App;
