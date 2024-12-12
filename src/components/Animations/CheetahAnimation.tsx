import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';
type GLTFResult = GLTF & {
  nodes: {
    cheetah: THREE.SkinnedMesh;
    root: THREE.Bone;
    ['MCH-torsoparent']: THREE.Bone;
    ['MCH-foot_ikparentL']: THREE.Bone;
    ['MCH-thigh_ik_targetparentL']: THREE.Bone;
    ['MCH-foot_ikparentR']: THREE.Bone;
    ['MCH-thigh_ik_targetparentR']: THREE.Bone;
    ['MCH-hand_ikparentL']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentL']: THREE.Bone;
    ['MCH-hand_ikparentR']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentR']: THREE.Bone;
    neutral_bone: THREE.Bone;
  };
  materials: { '': THREE.MeshStandardMaterial };
};

type ActionName =
  | 'cheetah-rig-animation'
  | 'cheetah-key-animation'
  | 'Key.001Action.001';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function CheetahAnimation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    '/cheetah-opt-v1.glb'
  ) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  const texture = useLoader(TextureLoader, '/cheetah-bake.jpg');

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
        <group name='cheetah-rig-main'>
          <skinnedMesh
            castShadow
            name='cheetah'
            geometry={nodes.cheetah.geometry}
            material={nodes.cheetah.material}
            skeleton={nodes.cheetah.skeleton}
            morphTargetDictionary={nodes.cheetah.morphTargetDictionary}
            morphTargetInfluences={nodes.cheetah.morphTargetInfluences}
          />
          <primitive object={nodes.root} />
          <primitive object={nodes['MCH-torsoparent']} />
          <primitive object={nodes['MCH-foot_ikparentL']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-foot_ikparentR']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
          <primitive object={nodes['MCH-hand_ikparentL']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
          <primitive object={nodes['MCH-hand_ikparentR']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
        </group>
        <primitive object={nodes.neutral_bone} />
      </group>
    </group>
  );
}

useGLTF.preload('/cheetah-opt-v1.glb');
