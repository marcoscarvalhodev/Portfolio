import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useTexture } from '@react-three/drei';

type GLTFResult = GLTF & {
  nodes: {
    Cylinder001: THREE.Mesh;
  };
  materials: { '': THREE.MeshStandardMaterial };
};

export function TreeTrunk(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/tree_trunk-opt-v1.glb') as GLTFResult;

  const texture = useTexture('/tree_trunk_bake.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
  });

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[177.873, 1.222, 491.001]}
        rotation={[0.045, 0.684, -0.019]}
      >
        <meshStandardMaterial map={texture}/>
      </mesh>
    </group>
  );
}

useGLTF.preload('/tree_trunk-opt-v1.glb');
