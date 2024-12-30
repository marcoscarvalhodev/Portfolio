import React from 'react';
import * as THREE from 'three';
import { Environment } from '@react-three/drei';

const SceneryLights = () => {
  const lightRef = React.useRef<null | THREE.DirectionalLight>(null);

  return (
    <>
      <directionalLight
        ref={lightRef}
        intensity={4}
        position={[60, 90, 60]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-32}
        shadow-camera-right={32}
        shadow-camera-top={32}
        shadow-camera-bottom={-32}
      />

      {

        <ambientLight intensity={0.5}/>
      }
    </>
  );
};

export default SceneryLights;
