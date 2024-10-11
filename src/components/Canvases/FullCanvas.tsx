import React from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import FullCanvasAnimations from '../FullCanvasAnimations/FullCanvasAnimations';

const FullCanvas = () => {
  const canvasRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={canvasRef}
      className=' top-0 bottom-0 fixed w-screen h-[100%] z-40  bg-[#f5f7fa] overflow-scroll'
    >
      <Canvas className='h-[100%] w-[100%]'>
        <directionalLight intensity={2} />
        <FullCanvasAnimations />
      </Canvas>
    </div>
  );
};

export default FullCanvas;
