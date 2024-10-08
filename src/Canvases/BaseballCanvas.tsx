import React from 'react';
import { Canvas } from '@react-three/fiber';
import EffectsComponent from '../components/EffectsComponent/EffectsComponent';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PerspectiveCamera } from '@react-three/drei';
import { Sky } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { BaseballField } from '../BaseballAnimations/BaseballField';
import { BaseballPlayers } from '../BaseballAnimations/BaseballPlayers';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

gsap.registerPlugin(ScrollTrigger);

const BaseballCanvas = () => {
  const refBaseballCanvas = React.useRef<null | HTMLCanvasElement>(null);
  const [playAnimations, setPlayAnimations] = React.useState(false);

  useGSAP(() => {
    if (refBaseballCanvas.current) {
      gsap.to(refBaseballCanvas.current, {
        scrollTrigger: {
          trigger: refBaseballCanvas.current,
          start: 'top top',
          end: 'bottom bottom',
          onEnter: () => {
            setPlayAnimations(true);
          },
        },
      });
    }
  });

  return (
    <div>
      <Canvas
        ref={refBaseballCanvas}
        style={{
          position: 'relative',
          top: 0,
          right: 0,
          left: 0,
          bottom: 0,
          height: '100vh',
        }}
        camera={{
          fov: 40,
          position: [-1.385, 13.642, -107.34],
          rotation: [3.006, -0.013, -3.123],
        }}
        dpr={window.devicePixelRatio}
        shadows={true}
      >
        <group>
          <mesh position={[500, 100, 2000]}>
            <sphereGeometry args={[200, 200, 200]} />
            <meshStandardMaterial
              color={'#ebcc1e'}
              emissive={'#d67f0c'}
              emissiveIntensity={12}
            />
          </mesh>

          <Sky />
          <Environment
            files='./sky.hdr'
            background
            backgroundIntensity={1}
            environmentIntensity={0.5}
          />

          <BaseballField />
          <BaseballPlayers playAnimations={playAnimations}/>
          <PerspectiveCamera
            makeDefault
            far={2403.9}
            near={0.001}
            fov={40.991}
            position={[-30.385, 17.642, -107.34]}
            rotation={[3.206, -0.213, -3.123]}
            scale={3.653}
          />
        </group>

        <EffectsComponent />
      </Canvas>
    </div>
  );
};

export default BaseballCanvas;
