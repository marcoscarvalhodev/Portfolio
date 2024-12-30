import React from 'react';
import { Canvas } from '@react-three/fiber';
import FullCanvasAnimations from '../FullCanvasAnimations/FullCanvasAnimations';
import { PerspectiveCamera } from '@react-three/drei';
import * as THREE from 'three';
import SceneryLights from '../Lights/SceneryLights';

const FullCanvas = () => {
  const canvasRef = React.useRef<HTMLDivElement | null>(null);

  return (
    <div
      ref={canvasRef}
      className='full-canvas top-0 bottom-0 fixed w-screen h-[100%] z-40 bg-[#f5f7fa] overflow-y-scroll'
    >
      <Canvas
        className='h-[100%] w-[100%]'
        shadows
        gl={{ toneMapping: THREE.NeutralToneMapping, toneMappingExposure: 1 }}
      >
        <PerspectiveCamera
          name='Camera'
          makeDefault={true}
          far={1000}
          near={0.1}
          fov={30.895}
          position={[30.641, 20.913, 45.138]}
          rotation={[-0.3, 0.7, 0]}
        />
        <SceneryLights />
        <group dispose={null} scale={0.05} position={[0, 0, 0]}>
          <FullCanvasAnimations />
        </group>
      </Canvas>
    </div>
  );
};

export default FullCanvas;
