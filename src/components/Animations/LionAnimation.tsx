import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

type GLTFResult = GLTF & {
  nodes: {
    object_0001: THREE.SkinnedMesh;
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
  };
  materials: {};
};

type ActionName = 'lion-rig-animation' | 'Key.003Action' | 'lion-key-animation';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function LionAnimation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    '/lion-opt-v1.glb'
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const texture = useLoader(TextureLoader, '/lion-bake.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
    const selectedMaterial = materials[''];
    selectedMaterial.map = texture;
  });

  React.useEffect(() => {
   actions['lion-rig-animation']?.play();
   actions['Key.003Action']?.play();
   actions['lion-key-animation']?.play();
  })

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='lion-main-rig' position={[-47.112, 5.2, 495.341]}>
          <skinnedMesh
            name='object_0001'
            geometry={nodes.object_0001.geometry}
            material={nodes.object_0001.material}
            skeleton={nodes.object_0001.skeleton}
            morphTargetDictionary={nodes.object_0001.morphTargetDictionary}
            morphTargetInfluences={nodes.object_0001.morphTargetInfluences}
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
      </group>
    </group>
  );
}

useGLTF.preload('/lion-opt-v1.glb');
