import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useTexture } from '@react-three/drei';
import CrossFade from '../../Shaders/CrossFade/CrossFade';
import { CrossFadeRefProps } from '../../Shaders/CrossFade/CrossFade';

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
  };
  materials: { '': THREE.MeshStandardMaterial };
};

export function SceneryAnimation(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/scenery-opt-v1.glb') as GLTFResult;
  const texture = useTexture('/desert_bake.jpg');
  const [crossFadeState, setCrossFadeState] = React.useState(false);
  const refMaterial = React.useRef<null | CrossFadeRefProps >(null);

  React.useLayoutEffect(() => {
    texture.flipY = false;
  });

  const dispFactor = React.useRef(0);
  const crossFadeRef = React.useRef<THREE.MeshStandardMaterial | null>(null);

  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-235.082, 92.705, 264.462]}
        rotation={[0, -0.185, 0]}
      >
        <meshStandardMaterial map={texture}/>
      </mesh>
    </group>
  );
}

useGLTF.preload('/scenery-opt-v1.glb');
