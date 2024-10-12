import React from 'react';
import { Canvas } from '@react-three/fiber';
import FullCanvasAnimations from '../FullCanvasAnimations/FullCanvasAnimations';
import { PerspectiveCamera, Sky } from '@react-three/drei';

const FullCanvas = () => {
  const canvasRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={canvasRef}
      className='full-canvas top-0 bottom-0 fixed w-screen h-[100%] z-40 bg-[#f5f7fa] overflow-scroll'
    >
      <Canvas className='h-[100%] w-[100%]'>
        <Sky distance={200} />
        <PerspectiveCamera
          name='Camera'
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={9.895}
          position={[-28.641, 62.913, 40.138]}
          rotation={[-0.2, -0.64, 0]}
        />
        <directionalLight intensity={5} position={[-60, 100, 40]} />
        <FullCanvasAnimations />
      </Canvas>
    </div>
  );
};

export default FullCanvas;
