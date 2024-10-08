import React from 'react';
import { Canvas } from '@react-three/fiber';
import EffectsComponent from '../EffectsComponent/EffectsComponent';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { PerspectiveCamera } from '@react-three/drei';
import { Sky } from '@react-three/drei';
import { Environment } from '@react-three/drei';
import { BaseballField } from '../BaseballAnimations/BaseballField';
import { BaseballPlayers } from '../BaseballAnimations/BaseballPlayers';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import Projects from '../ProjectsSection/Projects';
import { UseBaseballContext } from '../../context/UseBaseballContext';

gsap.registerPlugin(ScrollTrigger);

const BaseballCanvas = () => {
  const refBaseballCanvas = React.useRef<null | HTMLCanvasElement>(null);
  const [playAnimations, setPlayAnimations] = React.useState(false);

  const { closeCanvas, projectsInView, setCloseCanvas } = UseBaseballContext();

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

    if (projectsInView) {
      gsap.to('.dot', {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power1',
        onComplete: () => {
          setCloseCanvas(true);
        },
      });
    }
  }, [projectsInView]);

  return (
    <div className='canvas relative h-[100vh] w-[100vw]'>
      <span className='upper h-[50px] w-screen absolute z-50 top-[-25px] block'></span>

      <div className='dot bg-[#f5f7fa] w-[142vmax] h-[142vmax] rounded-[50%] absolute top-[50%] z-40 left-[50%] translate-x-[-50%] translate-y-[-50%] scale-[0.1] opacity-0 '></div>
      <Projects />
      {!closeCanvas && (
        <Canvas
          ref={refBaseballCanvas}
          style={{
            position: 'relative',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0,
            height: '100%',
            width: '100vw',
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
              <sphereGeometry args={[300, 300, 300]} />
              <meshStandardMaterial
                color={'#f1be16'}
                emissive={'#dda919'}
                emissiveIntensity={8}
              />
            </mesh>

            <Sky />
            <Environment
              files='./sky.hdr'
              background
              backgroundIntensity={1}
              environmentIntensity={1.6}
            />

            <BaseballField />
            <BaseballPlayers playAnimations={playAnimations} />
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
      )}

      <span className='lower absolute bottom-[-25px] h-[50px] w-screen block'></span>
    </div>
  );
};

export default BaseballCanvas;
