import React, { useRef } from 'react';
import { useGLTF, PerspectiveCamera } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import { TextureLoader } from 'three';

export function BaseballField(props) {
  const { nodes, materials } = useGLTF('/baseball-field.glb');
  const texture = useLoader(TextureLoader, '/baseball-field.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
    const selectedMaterial = materials[''];
    selectedMaterial.map = texture;
  });
  
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['merged-desert'].geometry}
        material={nodes['merged-desert'].material}
        position={[0.169, -0.97, -77.021]}
      />
      <PerspectiveCamera
        makeDefault={true}
        far={2403.9}
        near={0.001}
        fov={40.991}
        position={[-30.385, 17.642, -107.34]}
        rotation={[3.206, -0.213, -3.123]}
        scale={3.653}
      />
    </group>
  );
}

useGLTF.preload('/baseball-field.glb');
