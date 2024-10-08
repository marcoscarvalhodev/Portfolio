import React from 'react';
import BaseballCanvas from './Canvases/BaseballCanvas';

function App() {
  return (
    <div className=' relative w-full h-[200vh]'>
      <div className='upper h-[100vh] w-screen relative top-[30px] z-[999]'>
        <h1 className='text-[100px] absolute bottom-[50px] left-[50%] translate-x-[-50%]'>
          Projects
        </h1>
      </div>

      <BaseballCanvas />
      <div className='lower relative bottom-[30px] h-[100vh] w-screen'>
        
      </div>
    </div>
  );
}

export default App;
