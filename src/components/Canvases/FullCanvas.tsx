import React from 'react';
import { Canvas } from '@react-three/fiber';
import FullCanvasAnimations from '../FullCanvasAnimations/FullCanvasAnimations';
import { PerspectiveCamera, Sky } from '@react-three/drei';

const FullCanvas = () => {
  const canvasRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={canvasRef}
      className='full-canvas top-0 bottom-0 fixed w-screen h-[100%] z-40 bg-[#f5f7fa] overflow-y-scroll'
    >
      <Canvas className='h-[100%] w-[100%]'>
        <Sky distance={200} />
        <PerspectiveCamera
          name='Camera'
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={30.895}
          position={[30.641,20.913, 45.138]}
          rotation={[-0.3, 0.7, 0]}
        />
        <directionalLight intensity={5} position={[-60, 100, 40]} />
        <FullCanvasAnimations />
      </Canvas>
    </div>
  );
};

export default FullCanvas;
