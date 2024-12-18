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
        position={[90, 90, 90]}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-camera-left={-32}
        shadow-camera-right={32}
        shadow-camera-top={32}
        shadow-camera-bottom={-32}
      />

      {
        <Environment
          files={'./sky.hdr'}
          background
          backgroundIntensity={0.3}
          environmentIntensity={0.3}
        />
      }
    </>
  );
};

export default SceneryLights;
