import { Group, TextureLoader } from 'three';
import { useFrame, useLoader, useThree } from '@react-three/fiber';
import ScreenSizes from '../../hooks/screenSizes';
import { UseBaseballContext } from '../../context/UseBaseballContext';

import * as THREE from 'three';
import React from 'react';
import { useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF, SkeletonUtils } from 'three-stdlib';

type ActionName =
  | 'baseball-pitcher'
  | 'cap.001'
  | 'belt'
  | 'baseball-batter'
  | 'helmet'
  | 'belt-2'
  | 'baseball-catcher'
  | 'Cube.002'
  | 'Cube.001'
  | 'ImageToStl.com_catcher helmet.001'
  | 'baseball-ball'
  | 'Sphere'
  | 'baseball-bat';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    cap001: THREE.Mesh;
    belt: THREE.Mesh;
    helmet: THREE.Mesh;
    ['belt-2']: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube001: THREE.Mesh;
    ImageToStlcom_catcher_helmet001: THREE.Mesh;
    Sphere: THREE.Mesh;
    ['baseball-player']: THREE.SkinnedMesh;
    cap: THREE.SkinnedMesh;
    ['baseball-player001']: THREE.SkinnedMesh;
    ['model-main-2']: THREE.SkinnedMesh;
    Cylinder__0: THREE.SkinnedMesh;
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
    root_1: THREE.Bone;
    ['MCH-torsoparent_1']: THREE.Bone;
    ['MCH-hand_ikparentL_1']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentL_1']: THREE.Bone;
    ['MCH-hand_ikparentR_1']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentR_1']: THREE.Bone;
    ['MCH-foot_ikparentL_1']: THREE.Bone;
    ['MCH-thigh_ik_targetparentL_1']: THREE.Bone;
    ['MCH-foot_ikparentR_1']: THREE.Bone;
    ['MCH-thigh_ik_targetparentR_1']: THREE.Bone;
    root_2: THREE.Bone;
    ['MCH-torsoparent_2']: THREE.Bone;
    ['MCH-hand_ikparentL_2']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentL_2']: THREE.Bone;
    ['MCH-hand_ikparentR_2']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentR_2']: THREE.Bone;
    ['MCH-foot_ikparentL_2']: THREE.Bone;
    ['MCH-thigh_ik_targetparentL_2']: THREE.Bone;
    ['MCH-foot_ikparentR_2']: THREE.Bone;
    ['MCH-thigh_ik_targetparentR_2']: THREE.Bone;
    Bone_1: THREE.Bone;
  };
  materials: { '': THREE.MeshStandardMaterial };
  animations: GLTFAction[];
};

interface playersProps {
  playAnimations: boolean;
}

export function BaseballPlayers(props: playersProps) {
  const group = React.useRef<THREE.Group | null>(null);
  const { scene, animations } = useGLTF('/baseball-animation.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  const { camera } = useThree();
  const texture = useLoader(TextureLoader, '/baseball-players.jpg');
  const { smallScreen } = ScreenSizes();

  const { setProjectsInView } = UseBaseballContext();

  React.useLayoutEffect(() => {
    texture.flipY = false;
    const selectedMaterial = materials[''];
    selectedMaterial.map = texture;
  });

  React.useEffect(() => {
    if (props.playAnimations) {
      if (
        actions['baseball-ball'] &&
        actions['baseball-batter'] &&
        actions['baseball-pitcher'] &&
        actions['baseball-catcher'] &&
        actions['baseball-bat']
      ) {
        actions['baseball-ball'].play().repetitions = 1;
        actions['baseball-batter'].play().repetitions = 1;
        actions['baseball-pitcher'].play().repetitions = 1;
        actions['baseball-catcher'].play().repetitions = 1;
        actions['baseball-bat'].play().repetitions = 1;
      }
    }
  });

  useFrame((state, delta) => {
    if (props.playAnimations) {
      const ballTime = actions['baseball-ball']?.time;
      if (ballTime && ballTime >= 12.2) {
        setProjectsInView(true);
      }
    }
  });

  useFrame((state, delta) => {
    if (props.playAnimations) {
      mixer.update(delta * 0.5);
      const ballTime = actions['baseball-ball']?.time;
      if (ballTime) {
        if (camera.position.x < -1.385) {
          camera.position.x += 0.07 * ballTime * (smallScreen ? 4 : 4);
        }

        if (camera.rotation.y < -0.013) {
          camera.rotation.y += 0.00048 * ballTime * (smallScreen ? 4 : 4);
        }
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
          name='baseball-player'
          geometry={nodes['baseball-player'].geometry}
          material={nodes['baseball-player'].material}
          skeleton={nodes['baseball-player'].skeleton}
        />
        <skinnedMesh
          name='cap'
          geometry={nodes.cap.geometry}
          material={nodes.cap.material}
          skeleton={nodes.cap.skeleton}
        />
        <skinnedMesh
          name='baseball-player001'
          geometry={nodes['baseball-player001'].geometry}
          material={nodes['baseball-player001'].material}
          skeleton={nodes['baseball-player001'].skeleton}
        />
        <skinnedMesh
          name='model-main-2'
          geometry={nodes['model-main-2'].geometry}
          material={nodes['model-main-2'].material}
          skeleton={nodes['model-main-2'].skeleton}
          position={[0.043, -0.097, 29.092]}
        />
        <skinnedMesh
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
