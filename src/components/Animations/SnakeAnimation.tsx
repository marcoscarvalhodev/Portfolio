import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useTexture } from '@react-three/drei';

type GLTFResult = GLTF & {
  nodes: {
    Mesh_1001: THREE.SkinnedMesh;
    Hips2: THREE.Bone;
  };
  materials: {};
};

type ActionName = 'snake-rig-animation';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function SnakeAnimation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    '/snake-opt-v1.glb'
  ) as GLTFResult;

  const { actions, mixer } = useAnimations(animations, group);
  const texture = useTexture('/snake-bake.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
  });

  React.useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.repetitions = 1;
      action.clampWhenFinished = true;
      action.play();
    });
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature001' position={[0, 0, 36.911]}>
          <primitive object={nodes.Hips2} />
        </group>
        <skinnedMesh
          castShadow
          name='Mesh_1001'
          geometry={nodes.Mesh_1001.geometry}
          material={nodes.Mesh_1001.material}
          skeleton={nodes.Mesh_1001.skeleton}
          position={[0, 0, 36.911]}
        >
          <meshStandardMaterial map={texture} />
        </skinnedMesh>
      </group>
    </group>
  );
}

useGLTF.preload('/snake-opt-v1.glb');
