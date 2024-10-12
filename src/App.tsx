import React, { Suspense } from 'react';
import BaseballCanvas from './components/Canvases/BaseballCanvas';
import FullCanvas from './components/Canvases/FullCanvas';
import Hero from './components/Hero/Hero';

function App() {
  const wrapper = React.useRef<HTMLDivElement | null>(null);

  return (
    <div ref={wrapper} className='relative w-full z-50 '>
      <div className=' h-[100vh] w-full relative'>
        <Hero />

        <h1 className='text-[#0a1524] sm:text-title-font-30 md:text-title-font-20 lg:text-title-font-10 absolute bottom-[30px] left-0 z-50'>
          Projects
        </h1>
      </div>

      <BaseballCanvas />
      <FullCanvas />

      <div className='relative h-[500vh] w-screen'></div>
    </div>
  );
}

export default App;
