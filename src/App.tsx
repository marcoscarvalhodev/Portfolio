import React, { Suspense } from 'react';
import BaseballCanvas from './components/Canvases/BaseballCanvas';
import FullCanvas from './components/Canvases/FullCanvas';
import Hero from './components/Hero/Hero';
import NavBar from './components/NavBar/NavBar';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

function App() {
  useGSAP(() => {
    ScrollTrigger.normalizeScroll(true);
    ScrollTrigger.config({ ignoreMobileResize: true });
  });

  const wrapper = React.useRef<HTMLDivElement | null>(null);

  return (
    <div ref={wrapper} className='relative w-full z-50 '>
      <NavBar />
      <div className=' h-[100vh] w-full relative'>
        <Hero />
      </div>

      <BaseballCanvas />
      <FullCanvas />

      <div className='relative h-[200vh] w-screen'></div>
    </div>
  );
}

export default App;
