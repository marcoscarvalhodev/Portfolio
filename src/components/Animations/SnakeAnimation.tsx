import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useLoader} from '@react-three/fiber';
import { TextureLoader } from 'three';
type GLTFResult = GLTF & {
  nodes: {
    Mesh_1001: THREE.SkinnedMesh;
    Hips2: THREE.Bone;
  };
  materials: {'': THREE.MeshStandardMaterial};
};

type ActionName = 'snake-rig-animation';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function SnakeAnimation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    '/snake-opt-v1.glb'
  ) as GLTFResult;
  const { actions } = useAnimations(animations, group);

  const texture = useLoader(TextureLoader, '/snake-bake.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
    const selectedMaterial = materials[''];
    selectedMaterial.map = texture;
  });

  React.useEffect(() => {
    actions['snake-rig-animation']?.play();
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='Armature001' position={[0, 0, 36.911]}>
          <primitive object={nodes.Hips2} />
        </group>
        <skinnedMesh
          name='Mesh_1001'
          geometry={nodes.Mesh_1001.geometry}
          material={nodes.Mesh_1001.material}
          skeleton={nodes.Mesh_1001.skeleton}
          position={[0, 0, 36.911]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/snake-opt-v1.glb');
