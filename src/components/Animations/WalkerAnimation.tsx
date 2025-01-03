import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

import { UseTransitionContext } from '../../context/UseContext';
import { useFrame } from '@react-three/fiber';

type GLTFResult = GLTF & {
  nodes: {
    tumbleweed: THREE.Mesh;
    ['pitcher-cap']: THREE.SkinnedMesh;
    eye_iris: THREE.SkinnedMesh;
    FoamFinger001: THREE.SkinnedMesh;
    ['pitcher-body002']: THREE.SkinnedMesh;
    bag001_low: THREE.SkinnedMesh;
    SM_Body_L001: THREE.SkinnedMesh;
    root: THREE.Bone;
    ['MCH-torsoparent']: THREE.Bone;
    ['MCH-hand_ikparentL']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentL']: THREE.Bone;
    ['MCH-hand_ikparentR']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentR']: THREE.Bone;
    ['MCH-foot_ikparentL']: THREE.Bone;
    ['MCH-thigh_ik_targetparentL']: THREE.Bone;
    ['MCH-foot_ikparentR']: THREE.Bone;
    ['MCH-thigh_ik_targetparentR']: THREE.Bone;
    Bone_2: THREE.Bone;
    Bone_3: THREE.Bone;
    Bone_1: THREE.Bone;
  };
  materials: {};
};

type ActionName =
  | 'tumbleweed-rig-animation'
  | 'walker-rig-animation'
  | 'backpack-rig-animation'
  | 'ArmatureAction.001'
  | 'cap-rig-animation';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function WalkerAnimation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    '/walker-opt-v1.glb'
  ) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);
  const { refTextOpacity1, refTextOpacity2 } = UseTransitionContext();

  const texture = useTexture('/walker_tumbleweed.jpg');
  let opacityText1 = 1;
  let opacityText2 = 0;

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

  useFrame(() => {
    const walkerTime = actions['walker-rig-animation']?.time;

    if (walkerTime && walkerTime > 49 && walkerTime < 52) {
      if (opacityText1 > 0) {
        const material = refTextOpacity1.current?.material as THREE.Material;
        opacityText1 -= 0.01;
        material.opacity = opacityText1;
      }

      if (opacityText2 < 1) {
        const material = refTextOpacity2.current?.material as THREE.Material;
        opacityText2 += 0.01;
        material.opacity = opacityText2;
      }
    }

    if (walkerTime && walkerTime > 65 && walkerTime < 68) {
      if (opacityText1 < 1) {
        const material = refTextOpacity1.current?.material as THREE.Material;
        opacityText1 += 0.01;
        material.opacity = opacityText1;
      }

      if (opacityText2 > 0) {
        const material = refTextOpacity2.current?.material as THREE.Material;
        opacityText2 -= 0.01;
        material.opacity = opacityText2;
      }
    }

    return null;
  });
  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <mesh
          name='tumbleweed'
          castShadow
          receiveShadow
          geometry={nodes.tumbleweed.geometry}
          material={nodes.tumbleweed.material}
          position={[-342.259, 17.871, -76.308]}
          rotation={[0, 0, -1.382]}
        >
          <meshStandardMaterial map={texture} />
        </mesh>
        <group name='pitcher-rig'>
          <primitive object={nodes.root} />
          <primitive object={nodes['MCH-torsoparent']} />
          <primitive object={nodes['MCH-hand_ikparentL']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL']} />
          <primitive object={nodes['MCH-hand_ikparentR']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR']} />
          <primitive object={nodes['MCH-foot_ikparentL']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL']} />
          <primitive object={nodes['MCH-foot_ikparentR']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR']} />
        </group>
        <skinnedMesh
          castShadow
          name='pitcher-cap'
          geometry={nodes['pitcher-cap'].geometry}
          material={nodes['pitcher-cap'].material}
          skeleton={nodes['pitcher-cap'].skeleton}
        >
          <meshStandardMaterial map={texture} />
        </skinnedMesh>
        <group name='Armature002' position={[-0.717, 3.289, -8.867]}>
          <primitive object={nodes.Bone_2} />
        </group>
        <group name='Armature'>
          <primitive object={nodes.Bone_3} />
        </group>
        <group name='Armature003' position={[0, 4.494, 0.13]}>
          <primitive object={nodes.Bone_1} />
        </group>
        <skinnedMesh
          castShadow
          name='eye_iris'
          geometry={nodes.eye_iris.geometry}
          material={nodes.eye_iris.material}
          skeleton={nodes.eye_iris.skeleton}
        >
          <meshStandardMaterial map={texture} />
        </skinnedMesh>
        <skinnedMesh
          castShadow
          name='FoamFinger001'
          geometry={nodes.FoamFinger001.geometry}
          material={nodes.FoamFinger001.material}
          skeleton={nodes.FoamFinger001.skeleton}
        >
          <meshStandardMaterial map={texture} />
        </skinnedMesh>
        <skinnedMesh
          castShadow
          name='pitcher-body002'
          geometry={nodes['pitcher-body002'].geometry}
          material={nodes['pitcher-body002'].material}
          skeleton={nodes['pitcher-body002'].skeleton}
        >
          <meshStandardMaterial map={texture} />
        </skinnedMesh>
        <skinnedMesh
          castShadow
          name='bag001_low'
          geometry={nodes.bag001_low.geometry}
          material={nodes.bag001_low.material}
          skeleton={nodes.bag001_low.skeleton}
          position={[-0.717, 3.289, -8.867]}
        >
          <meshStandardMaterial map={texture} />
        </skinnedMesh>
        <skinnedMesh
          castShadow
          name='SM_Body_L001'
          geometry={nodes.SM_Body_L001.geometry}
          material={nodes.SM_Body_L001.material}
          skeleton={nodes.SM_Body_L001.skeleton}
        >
          <meshStandardMaterial map={texture} />
        </skinnedMesh>
      </group>
    </group>
  );
}

useGLTF.preload('/walker-opt-v1.glb');
