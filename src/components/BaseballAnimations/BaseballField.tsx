import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    ['merged-desert']: THREE.Mesh;
  };
  materials: { '': THREE.MeshStandardMaterial };
};

export function BaseballField(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/baseball-field.glb') as GLTFResult;
  const texture = useLoader(TextureLoader, '/baseball-field.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
    const selectedMaterial = materials[''];
    selectedMaterial.map = texture;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        receiveShadow
        geometry={nodes['merged-desert'].geometry}
        material={nodes['merged-desert'].material}
        position={[0.169, -0.97, -77.021]}
      />
      
    </group>
  );
}

useGLTF.preload('/baseball-field.glb');
