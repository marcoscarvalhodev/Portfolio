import * as THREE from 'three';
import React from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { UseTransitionContext } from '../../context/UseContext';

type GLTFResult = GLTF & {
  nodes: {
    ['Text-1']: THREE.Mesh;
    ['Text-2']: THREE.Mesh;
  };
  materials: {
    text: THREE.MeshStandardMaterial;
  };
};

export function MessageAnimation() {
  const { nodes, materials } = useGLTF('/message.glb') as GLTFResult;
  const { refTextOpacity1, refTextOpacity2 } = UseTransitionContext();

  return (
    <group dispose={null}>
      <mesh
        ref={refTextOpacity1}
        castShadow
        receiveShadow
        geometry={nodes['Text-1'].geometry}
        material={materials.text}
        position={[-242.031, 102.442, 313.959]}
        rotation={[Math.PI / 2, 0, -1.388]}
      >
        <meshStandardMaterial color={'black'} transparent />
      </mesh>
      <mesh
        ref={refTextOpacity2}
        castShadow
        receiveShadow
        geometry={nodes['Text-2'].geometry}
        material={materials.text}
        position={[-228.704, 103.028, 241.924]}
        rotation={[Math.PI / 2, 0, -1.388]}
      >
        <meshStandardMaterial color={'black'} transparent opacity={0}/>
      </mesh>
    </group>
  );
}

useGLTF.preload('/message.glb');
