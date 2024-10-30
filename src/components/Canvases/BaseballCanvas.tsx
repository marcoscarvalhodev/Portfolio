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
import { UseBaseballContext } from '../../context/UseContext';
import ScreenSizes from '../../hooks/screenSizes';
gsap.registerPlugin(ScrollTrigger);

const BaseballCanvas = () => {
  const [playAnimations, setPlayAnimations] = React.useState(false);
  const canvasBaseballRef = React.useRef<HTMLDivElement | null>(null);
  const { closeCanvas, projectsInView, setCloseCanvas } = UseBaseballContext();
  const { smallScreen } = ScreenSizes();

  useGSAP(() => {
    gsap.to(canvasBaseballRef.current, {
      scrollTrigger: {
        trigger: canvasBaseballRef.current,
        start: 'top top',
        end: 'bottom bottom',

        onEnter: () => {
          setPlayAnimations(true);
        },
      },
    });
  });

  useGSAP(() => {
    if (projectsInView) {
      gsap.to('.dot', {
        scale: 1,
        opacity: 1,
        duration: 1,
        ease: 'power1',
        background: '#f5f7fa',
        onComplete: () => {
          setCloseCanvas(true);
          gsap.to('.dot', {
            opacity: 0,
          });
        },
      });
    }
  }, [projectsInView]);

  return (
    <div
      ref={canvasBaseballRef}
      className='canvas mt-96 relative h-[100vh] w-full z-50'
    >
      
      {!smallScreen && (
        <span
          className={`upper h-[5rem] w-full absolute z-50 top-[-2.5rem] ${
            closeCanvas ? 'hidden' : 'block'
          }`}
        ></span>
      )}

      <div className='absolute dot-wrapper h-[100%] w-[100%] '>
        <span className='dot bg-[#c8c8ca] w-[142vmax] h-[142vmax] rounded-[50%] absolute top-[calc(50%+10px)] z-50 left-[calc(50%+9px)] translate-x-[-50%] translate-y-[-50%] scale-[0.1] opacity-0 block'></span>
      </div>
      
      {!closeCanvas && !smallScreen && (
        <Canvas
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
          <EffectsComponent />
          <PerspectiveCamera
            makeDefault
            far={2403.9}
            near={0.001}
            fov={40.991}
            position={[-30.385, 17.642, -107.34]}
            rotation={[3.206, -0.213, -3.123]}
            scale={3.653}
          />
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
          </group>
        </Canvas>
      )}

      {!smallScreen && (
        <span
          className={`lower absolute bottom-[-2.5rem] h-[5rem] w-screen ${
            closeCanvas ? 'hidden' : 'block'
          }`}
        ></span>
      )}
    </div>
  );
};

export default BaseballCanvas;
