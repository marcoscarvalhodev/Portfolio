import React, { Suspense, useEffect } from 'react';
import BaseballCanvas from './components/Canvases/BaseballCanvas';
import FullCanvas from './components/Canvases/FullCanvas';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import Projects from './components/ProjectsSection/Projects';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import ScreenSizes from './hooks/screenSizes';
import NavBarMobile from './components/NavBar/NavBarMobile';
import { UseMenuMobileContext } from './context/UseContext';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function App() {
  const titleRef = React.useRef<null | HTMLHeadingElement>(null);
  const { smallScreen } = ScreenSizes();
  const { menuButtonOn } = UseMenuMobileContext();

  React.useLayoutEffect(() => {
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({ ignoreMobileResize: true });
  }, []);

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
    <div ref={wrapper} className='relative w-screen z-50 overflow-x-hidden'>
      <FullCanvas />
      {smallScreen ? <NavBarMobile /> : <NavBar />}

      <main>
        <section id='section1' className='top-sec w-full  relative z-[50] h-[100vh]'>
          <Hero />
        </section>

        <section id='section2' className='top-sec relative z-[50]'>
          <h1 className='title relative z-[998] text-black_10 lg:m-sp-20 sm:m-sp-50 '>
            Works
          </h1>
          <Projects />
        </section>

        <section id='section3' className='top-sec'>
          <h1
            ref={titleRef}
            className='title text-black_10 text-f-10 relative z-[998] lg:m-sp-20 sm:m-sp-50 '
          >
            Skills
          </h1>
          <Skills />
        </section>

        <section id='section4' className='top-sec'>
          <h1 className='title text-black_10 text-f-10 relative z-[998] lg:m-sp-20 sm:m-sp-50'>
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
    </div>
  );
}

export default App;
