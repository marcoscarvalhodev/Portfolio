import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { TextureLoader } from 'three';
import { useAnimations } from '@react-three/drei';
import { useFrame, useLoader, useThree } from '@react-three/fiber';

export function BaseballTest(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF('/baseball-animation.glb');
  const { actions, mixer } = useAnimations(animations, group);
  const { camera } = useThree();
  const texture = useLoader(TextureLoader, '/baseball-players.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
    const selectedMaterial = materials[''];
    selectedMaterial.map = texture;
  });

  React.useEffect(() => {
    actions['baseball-ball']?.play();
    actions['baseball-batter']?.play();
    actions['baseball-pitcher']?.play();
    actions['baseball-catcher']?.play();
    actions['baseball-bat']?.play();
  });

  useFrame((state, delta) => {
    mixer.update(delta * 0.5);
    const ballTime = actions['baseball-ball']?.time;
    if (ballTime) {
      if (camera.position.x < -1.385) {
        camera.position.x += 0.07 * ballTime * 4;
      }

      if (camera.rotation.y < -0.013) {
        camera.rotation.y += 0.00048 * ballTime * 4;
      }
    }
  });

  return (
    <group ref={group} {...props} dispose={null}>
      <group name='Scene'>
        <group name='rig001'>
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
        <group name='rig002' position={[0.043, -0.097, 29.092]}>
          <primitive object={nodes.root_1} />
          <primitive object={nodes['MCH-torsoparent_1']} />
          <primitive object={nodes['MCH-hand_ikparentL_1']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL_1']} />
          <primitive object={nodes['MCH-hand_ikparentR_1']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR_1']} />
          <primitive object={nodes['MCH-foot_ikparentL_1']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL_1']} />
          <primitive object={nodes['MCH-foot_ikparentR_1']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR_1']} />
        </group>
        <group name='rig004'>
          <primitive object={nodes.root_2} />
          <primitive object={nodes['MCH-torsoparent_2']} />
          <primitive object={nodes['MCH-hand_ikparentL_2']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL_2']} />
          <primitive object={nodes['MCH-hand_ikparentR_2']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR_2']} />
          <primitive object={nodes['MCH-foot_ikparentL_2']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL_2']} />
          <primitive object={nodes['MCH-foot_ikparentR_2']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR_2']} />
        </group>
        <group name='Armature001' position={[0.023, 3.475, -11.26]}>
          <group
            name='Bone'
            position={[-0.317, 1.978, 0.504]}
            rotation={[1.604, 0.3, 0.008]}
            scale={1.673}
          >
            <mesh
              name='Sphere'
              castShadow
              receiveShadow
              geometry={nodes.Sphere.geometry}
              material={nodes.Sphere.material}
              position={[0.017, 0.095, 0.012]}
              rotation={[-1.603, 0.018, -0.3]}
            />
          </group>
        </group>
        <group name='Armature' position={[-2.255, 3.605, 31.087]}>
          <primitive object={nodes.Bone_1} />
        </group>
        <skinnedMesh
          castShadow
          name='baseball-player'
          geometry={nodes['baseball-player'].geometry}
          material={nodes['baseball-player'].material}
          skeleton={nodes['baseball-player'].skeleton}
        />
        <skinnedMesh
        castShadow
          name='cap'
          geometry={nodes.cap.geometry}
          material={nodes.cap.material}
          skeleton={nodes.cap.skeleton}
        />
        <skinnedMesh
        castShadow
          name='model-main-2'
          geometry={nodes['model-main-2'].geometry}
          material={nodes['model-main-2'].material}
          skeleton={nodes['model-main-2'].skeleton}
          position={[0.043, -0.097, 29.092]}
        />
        <skinnedMesh
        castShadow
          name='baseball-player001'
          geometry={nodes['baseball-player001'].geometry}
          material={nodes['baseball-player001'].material}
          skeleton={nodes['baseball-player001'].skeleton}
        />
        <skinnedMesh
        castShadow
          name='Cylinder__0'
          geometry={nodes.Cylinder__0.geometry}
          material={nodes.Cylinder__0.material}
          skeleton={nodes.Cylinder__0.skeleton}
          position={[-2.255, 3.605, 31.087]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/baseball-animation.glb');
