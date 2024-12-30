import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import CrossFade from '../../Shaders/CrossFade/CrossFade';

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.Mesh;
  };
  materials: {};
};

export function SceneryAnimation(props: JSX.IntrinsicElements['group']) {
  const { nodes, materials } = useGLTF('/scenery-opt-v1.glb') as GLTFResult;
  const texture = useTexture('/desert_bake.jpg');
  const [crossFadeState, setCrossFadeState] = React.useState(false);

  React.useLayoutEffect(() => {
    texture.flipY = false;
  });
  const crossFadeRef = React.useRef<THREE.MeshStandardMaterial | null>(null);

  CrossFade({
    dispTexture: texture,
    texture1: texture,
    texture2: texture,
    crossFadeRef,
    crossFadeState,
  });
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
        <meshStandardMaterial ref={crossFadeRef} />
      </mesh>
    </group>
  );
}

useGLTF.preload('/scenery-opt.glb');
