import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations, useTexture } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { GLTF } from 'three-stdlib';
import CrossFade, {
  CrossFadeRefProps,
} from '../../Shaders/CrossFade/CrossFade';
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

  const crossFadeRef = React.useRef<null | CrossFadeRefProps>(null);
  const [crossFadeState, setCrossFadeState] = React.useState(false);
  const FoxFired = React.useRef(false);

  const [texture1, texture2, dispTexture] = useTexture([
    '/fox-bake-plain.jpg',
    '/fox-bake.jpg',
    'disp_texture.jpg',
  ]);


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
      const foxTime = actions['fox-rig-animation']?.time;
  
      if (foxTime) {
        if (foxTime > 6.2 && foxTime < 7.2 && !FoxFired.current) {
          setCrossFadeState(true);
          FoxFired.current = true;
        }
  
        if (foxTime > 67 && foxTime < 68 && FoxFired.current) {
          setCrossFadeState(false);
          FoxFired.current = false;
        }
      }
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
          >
            <crossFadeMaterial
              ref={crossFadeRef}
              tex={texture1}
              tex2={texture2}
              disp={dispTexture}
            />
          </skinnedMesh>
          <primitive object={nodes.root} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/fox-opt-v1.glb');
