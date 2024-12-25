import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import CrossFade, {
  CrossFadeRefProps,
} from '../../Shaders/CrossFade/CrossFade';
import { useFrame } from '@react-three/fiber';

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
  const { mixer, actions } = useAnimations(animations, group);
  const [crossFadeState, setCrossFadeState] = React.useState(false);
  const cheetahFired = React.useRef(false);
  const crossFadeRef = React.useRef<CrossFadeRefProps | null>(null);

  const [texture1, texture2, dispTexture] = useTexture([
    '/cheetah-bake-plain.jpg',
    '/cheetah-bake.jpg',
    '/disp_texture.jpg',
  ]);

  CrossFade({ crossFadeState, crossFadeRef });

  React.useLayoutEffect(() => {
    texture1.flipY = false;
    texture2.flipY = false;
  });

  useFrame(() => {
    const cheetahTime = actions['cheetah-rig-animation']?.time;

    if (cheetahTime) {
      if (cheetahTime > 16 && cheetahTime < 17 && !cheetahFired.current) {
        setCrossFadeState(true);
        cheetahFired.current = true;
      }

      if (cheetahTime > 66.5 && cheetahTime < 67.5 && cheetahFired.current) {
        setCrossFadeState(false);
        cheetahFired.current = false;
      }
    }
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
          >
            <crossFadeMaterial
              ref={crossFadeRef}
              tex={texture1}
              tex2={texture2}
              disp={dispTexture}
            
            />
          </skinnedMesh>
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
