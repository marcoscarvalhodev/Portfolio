import { Canvas } from '@react-three/fiber';
import React from 'react';
import { BaseballTest } from './BaseballTest';
import { Environment, Mask, OrbitControls, Sky } from '@react-three/drei';
import { BaseballField } from './BaseballAnimations/BaseballField';
import {
  ToneMapping,
  Bloom,
  EffectComposer,
  Vignette,
} from '@react-three/postprocessing';
import { ToneMappingMode } from 'postprocessing';

function App() {
  return (
    <>
      <div className='w-full h-screen bg-red-700'></div>
      <Canvas
        flat
        style={{
          width: '100%',
          height: '100vh',
          position: 'static',
        }}
        camera={{
          fov: 40,
          position: [-1.385, 13.642, -107.34],
          rotation: [3.006, -0.013, -3.123],
        }}
        dpr={window.devicePixelRatio}
        shadows={true}
      >
        <EffectComposer>
          <Bloom
            mipmapBlur
            luminanceSmoothing={0.1}
            luminanceThreshold={1.1}
            intensity={3}
          />
          <Vignette eskil={false} offset={0.1} darkness={1.1} />
          <ToneMapping mode={ToneMappingMode.NEUTRAL} />
        </EffectComposer>

        <mesh position={[500, 100, 2000]}>
          <sphereGeometry args={[200, 200, 200]} />
          <meshStandardMaterial
            color={'#f0dc2b'}
            emissive={'#e4d125'}
            emissiveIntensity={4}
          />
        </mesh>

        <Sky />

        <Environment
          files='./sky.jpg'
          background
          backgroundIntensity={1}
          environmentIntensity={2}
        />

        <ambientLight />
        <BaseballTest />
        <BaseballField />
      </Canvas>
    </>
  );
}

export default App;
