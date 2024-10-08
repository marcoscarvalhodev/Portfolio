import React, { Suspense } from 'react';
import BaseballCanvas from './components/Canvases/BaseballCanvas';

function App() {
  return (
    <div className=' relative w-screen z-50 mx-[96px]'>
      <div className=' h-[100vh] w-screen relative'>
        <h1 className='text-[#0a1524] text-[100px] absolute bottom-[50px] left-0 z-50'>
          Projects
        </h1>
      </div>

      <BaseballCanvas />

      <div className='relative h-[100vh] w-screen'></div>
    </div>
  );
}

export default App;
