import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Cube007: THREE.SkinnedMesh;
    root: THREE.Bone;
  };
  materials: { '': THREE.MeshStandardMaterial };
};

type ActionName = 'fox-rig-animation' | 'fox-key-animation' | 'Key.002Action';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function FoxAnimation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    '/fox-opt-v1.glb'
  ) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  const texture = useLoader(TextureLoader, '/fox-bake.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
    const selectedMaterial = materials[''];
    selectedMaterial.map = texture;
    materials[''] = new THREE.MeshStandardMaterial({ map: texture });
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
        <group name='fox-armature-1' position={[-228.109, 0.965, 312.407]}>
          <skinnedMesh
            castShadow
            name='Cube007'
            geometry={nodes.Cube007.geometry}
            material={nodes.Cube007.material}
            skeleton={nodes.Cube007.skeleton}
            morphTargetDictionary={nodes.Cube007.morphTargetDictionary}
            morphTargetInfluences={nodes.Cube007.morphTargetInfluences}
          />
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/fox-opt-v1.glb');
