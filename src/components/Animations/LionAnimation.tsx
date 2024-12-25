import * as THREE from 'three';
import React, { useRef } from 'react';
import { useFrame } from '@react-three/fiber';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import CrossFade, {
  CrossFadeRefProps,
} from '../../Shaders/CrossFade/CrossFade';

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
  materials: { '': THREE.MeshStandardMaterial };
};

type ActionName = 'lion-rig-animation' | 'Key.003Action' | 'lion-key-animation';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function LionAnimation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, animations } = useGLTF('/lion-opt-v1.glb') as GLTFResult;
  const { mixer, actions } = useAnimations(animations, group);
  const crossFadeRef = React.useRef<CrossFadeRefProps | null>(null);
  const [crossFadeState, setCrossFadeState] = React.useState(false);
  const lionFired = React.useRef(false);
  const dispFactor = 0;
  const [texture1, texture2, dispTexture] = useTexture([
    '/lion-bake-plain.jpg',
    'lion-bake.jpg',
    'disp_texture.jpg',
  ]);

  CrossFade({
    crossFadeState,
    crossFadeRef
  });

  React.useLayoutEffect(() => {
    texture1.flipY = false;
    texture2.flipY = false;
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
    const lionTime = actions['lion-rig-animation']?.time;

    if (lionTime) {
      if (lionTime > 39 && lionTime < 40 && !lionFired.current) {
        setCrossFadeState(true);
        lionFired.current = true;
      }

      if (lionTime > 76 && lionTime < 77 && lionFired.current) {
        setCrossFadeState(false);
        lionFired.current = false;
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='lion-main-rig' position={[-47.112, 5.2, 495.341]}>
          <skinnedMesh
            castShadow
            name='object_0001'
            geometry={nodes.object_0001.geometry}
            material={nodes.object_0001.material}
            skeleton={nodes.object_0001.skeleton}
            morphTargetDictionary={nodes.object_0001.morphTargetDictionary}
            morphTargetInfluences={nodes.object_0001.morphTargetInfluences}
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
      </group>
    </group>
  );
}

useGLTF.preload('/lion-opt-v1.glb');
