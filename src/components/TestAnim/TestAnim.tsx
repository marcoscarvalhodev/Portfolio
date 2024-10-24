{
  /*import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import * as THREE from 'three';

type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh;
    eye_iris: THREE.SkinnedMesh;
    FMB_Shoes_01_L001: THREE.SkinnedMesh;
    FMB_Shoes_01_L001_1: THREE.SkinnedMesh;
    FMB_Shoes_01_L001_2: THREE.SkinnedMesh;
    FMB_Shoes_01_R001: THREE.SkinnedMesh;
    FMB_Shoes_01_R001_1: THREE.SkinnedMesh;
    FMB_Shoes_01_R001_2: THREE.SkinnedMesh;
    FoamFinger001: THREE.SkinnedMesh;
    ['pitcher-body001']: THREE.SkinnedMesh;
    Mesh006: THREE.SkinnedMesh;
    Mesh006_1: THREE.SkinnedMesh;
    Mesh006_2: THREE.SkinnedMesh;
    Mesh006_3: THREE.SkinnedMesh;
    ['pitcher-body003']: THREE.SkinnedMesh;
    Mesh004: THREE.SkinnedMesh;
    Mesh004_1: THREE.SkinnedMesh;
    Куб008: THREE.SkinnedMesh;
    Куб008_1: THREE.SkinnedMesh;
    Mesh008: THREE.SkinnedMesh;
    Mesh008_1: THREE.SkinnedMesh;
    Plane002: THREE.Mesh;
    cheetah: THREE.Mesh;
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
    ['ORG-spine_1']: THREE.Bone;
  };
  materials: {
    ['Dirt.001']: THREE.MeshStandardMaterial;
    M_eye_iris: THREE.MeshStandardMaterial;
    M_Base: THREE.MeshStandardMaterial;
    M_Parts: THREE.MeshStandardMaterial;
    M_Bottom: THREE.MeshStandardMaterial;
    FoamFinger: THREE.MeshPhysicalMaterial;
    ['Material.010']: THREE.MeshPhysicalMaterial;
    ['skin-white.001']: THREE.MeshStandardMaterial;
    ['socks.001']: THREE.MeshStandardMaterial;
    ['lambert1.001']: THREE.MeshStandardMaterial;
    ['shoes-below.001']: THREE.MeshStandardMaterial;
    shorts: THREE.MeshPhysicalMaterial;
    ['Material.011']: THREE.MeshStandardMaterial;
    ['red-hat.001']: THREE.MeshStandardMaterial;
    id_5: THREE.MeshStandardMaterial;
    Материал: THREE.MeshPhysicalMaterial;
    SM_WaterBottle_MAT: THREE.MeshStandardMaterial;
    Material: THREE.MeshStandardMaterial;
    ['mat_0-acinonyx256.jpg']: THREE.MeshPhysicalMaterial;
  };
};

type ActionName =
  | 'Plane.001'
  | 'pitcher-rigAction'
  | 'Armature.002Action'
  | 'ArmatureAction.001'
  | 'cheetah'
  | 'Key.001Action.001'
  | 'Plane.002'
  | 'Armature.003Action.005';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function TestAnim(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF(
    '/test_anim.glb'
  ) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  React.useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.clampWhenFinished = true;
      action.repetitions = 1;
      action.play();
    });
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.02}
      position={[0, 54, 0]}
    >
      <group name='Scene'>
        <mesh
          name='Plane001'
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={materials['Dirt.001']}
          position={[-27.523, -2.596, -26.837]}
        />
        <group name='pitcher-rig'>
          <skinnedMesh
            name='eye_iris'
            geometry={nodes.eye_iris.geometry}
            material={materials.M_eye_iris}
            skeleton={nodes.eye_iris.skeleton}
          />
          <group name='FMB_Shoes_01_L'>
            <skinnedMesh
              name='FMB_Shoes_01_L001'
              geometry={nodes.FMB_Shoes_01_L001.geometry}
              material={materials.M_Base}
              skeleton={nodes.FMB_Shoes_01_L001.skeleton}
            />
            <skinnedMesh
              name='FMB_Shoes_01_L001_1'
              geometry={nodes.FMB_Shoes_01_L001_1.geometry}
              material={materials.M_Parts}
              skeleton={nodes.FMB_Shoes_01_L001_1.skeleton}
            />
            <skinnedMesh
              name='FMB_Shoes_01_L001_2'
              geometry={nodes.FMB_Shoes_01_L001_2.geometry}
              material={materials.M_Bottom}
              skeleton={nodes.FMB_Shoes_01_L001_2.skeleton}
            />
          </group>
          <group name='FMB_Shoes_01_R'>
            <skinnedMesh
              name='FMB_Shoes_01_R001'
              geometry={nodes.FMB_Shoes_01_R001.geometry}
              material={materials.M_Base}
              skeleton={nodes.FMB_Shoes_01_R001.skeleton}
            />
            <skinnedMesh
              name='FMB_Shoes_01_R001_1'
              geometry={nodes.FMB_Shoes_01_R001_1.geometry}
              material={materials.M_Parts}
              skeleton={nodes.FMB_Shoes_01_R001_1.skeleton}
            />
            <skinnedMesh
              name='FMB_Shoes_01_R001_2'
              geometry={nodes.FMB_Shoes_01_R001_2.geometry}
              material={materials.M_Bottom}
              skeleton={nodes.FMB_Shoes_01_R001_2.skeleton}
            />
          </group>
          <skinnedMesh
            name='FoamFinger001'
            geometry={nodes.FoamFinger001.geometry}
            material={materials.FoamFinger}
            skeleton={nodes.FoamFinger001.skeleton}
          />
          <skinnedMesh
            name='pitcher-body001'
            geometry={nodes['pitcher-body001'].geometry}
            material={materials['Material.010']}
            skeleton={nodes['pitcher-body001'].skeleton}
          />
          <group name='pitcher-body002'>
            <skinnedMesh
              name='Mesh006'
              geometry={nodes.Mesh006.geometry}
              material={materials['skin-white.001']}
              skeleton={nodes.Mesh006.skeleton}
            />
            <skinnedMesh
              name='Mesh006_1'
              geometry={nodes.Mesh006_1.geometry}
              material={materials['socks.001']}
              skeleton={nodes.Mesh006_1.skeleton}
            />
            <skinnedMesh
              name='Mesh006_2'
              geometry={nodes.Mesh006_2.geometry}
              material={materials['lambert1.001']}
              skeleton={nodes.Mesh006_2.skeleton}
            />
            <skinnedMesh
              name='Mesh006_3'
              geometry={nodes.Mesh006_3.geometry}
              material={materials['shoes-below.001']}
              skeleton={nodes.Mesh006_3.skeleton}
            />
          </group>
          <skinnedMesh
            name='pitcher-body003'
            geometry={nodes['pitcher-body003'].geometry}
            material={materials.shorts}
            skeleton={nodes['pitcher-body003'].skeleton}
          />
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
        <group name='pitcher-cap'>
          <skinnedMesh
            name='Mesh004'
            geometry={nodes.Mesh004.geometry}
            material={materials['Material.011']}
            skeleton={nodes.Mesh004.skeleton}
          />
          <skinnedMesh
            name='Mesh004_1'
            geometry={nodes.Mesh004_1.geometry}
            material={materials['red-hat.001']}
            skeleton={nodes.Mesh004_1.skeleton}
          />
        </group>
        <group name='Armature002' position={[-0.717, 3.289, -8.867]}>
          <group name='bag001_low'>
            <skinnedMesh
              name='Куб008'
              geometry={nodes.Куб008.geometry}
              material={materials.id_5}
              skeleton={nodes.Куб008.skeleton}
            />
            <skinnedMesh
              name='Куб008_1'
              geometry={nodes.Куб008_1.geometry}
              material={materials.Материал}
              skeleton={nodes.Куб008_1.skeleton}
            />
          </group>
          <primitive object={nodes.Bone_2} />
        </group>
        <group name='Armature'>
          <group name='SM_Body_L001'>
            <skinnedMesh
              name='Mesh008'
              geometry={nodes.Mesh008.geometry}
              material={materials.SM_WaterBottle_MAT}
              skeleton={nodes.Mesh008.skeleton}
            />
            <skinnedMesh
              name='Mesh008_1'
              geometry={nodes.Mesh008_1.geometry}
              material={materials.Material}
              skeleton={nodes.Mesh008_1.skeleton}
            />
          </group>
          <primitive object={nodes.Bone_3} />
        </group>
        <mesh
          name='Plane002'
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={materials['Dirt.001']}
          position={[0, -8.793, 0]}
          rotation={[0, 0, Math.PI]}
          scale={[-2109.664, -1444.109, -1734.615]}
        />
        <group name='Armature003' position={[0, 4.494, 0.13]}>
          <primitive object={nodes.Bone_1} />
        </group>
        <group name='rig001'>
          <primitive object={nodes['ORG-spine_1']} />
        </group>
        <mesh
          name='cheetah'
          castShadow
          receiveShadow
          geometry={nodes.cheetah.geometry}
          material={materials['mat_0-acinonyx256.jpg']}
          morphTargetDictionary={nodes.cheetah.morphTargetDictionary}
          morphTargetInfluences={nodes.cheetah.morphTargetInfluences}
          rotation={[Math.PI / 2, 0, 0]}
        />
      </group>
    </group>
  );
}

useGLTF.preload('/test_anim.glb');*/
}

import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF } from 'three-stdlib';

type GLTFResult = GLTF & {
  nodes: {
    tumbleweed: THREE.Mesh;
    Plane001: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Plane: THREE.Mesh;
    ['Text-1']: THREE.Mesh;
    ['Text-2']: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    ['40Rocksobj']: THREE.Mesh;
    ['40Rocksobj001']: THREE.Mesh;
    ['40Rocksobj005']: THREE.Mesh;
    ['cactus-1001']: THREE.Mesh;
    ['cactus-1003']: THREE.Mesh;
    ['merged-field001']: THREE.Mesh;
    ['merged-field003']: THREE.Mesh;
    ['40Rocksobj002']: THREE.Mesh;
    ['40Rocksobj003']: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    Cube007: THREE.SkinnedMesh;
    Mesh_1001: THREE.SkinnedMesh;
    bull_skull: THREE.Mesh;
    Text: THREE.Mesh;
    eye_iris: THREE.SkinnedMesh;
    FMB_Shoes_01_L: THREE.SkinnedMesh;
    FMB_Shoes_01_R: THREE.SkinnedMesh;
    FoamFinger001: THREE.SkinnedMesh;
    ['pitcher-body001']: THREE.SkinnedMesh;
    ['pitcher-body002']: THREE.SkinnedMesh;
    ['pitcher-body003']: THREE.SkinnedMesh;
    ['pitcher-cap']: THREE.SkinnedMesh;
    bag001_low: THREE.SkinnedMesh;
    SM_Body_L001: THREE.SkinnedMesh;
    cheetah: THREE.SkinnedMesh;
    Plane002: THREE.Mesh;
    object_0001: THREE.SkinnedMesh;
    root: THREE.Bone;
    Hips2: THREE.Bone;
    root_1: THREE.Bone;
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
    root_2: THREE.Bone;
    ['MCH-torsoparent_1']: THREE.Bone;
    ['MCH-foot_ikparentL_1']: THREE.Bone;
    ['MCH-thigh_ik_targetparentL_1']: THREE.Bone;
    ['MCH-foot_ikparentR_1']: THREE.Bone;
    ['MCH-thigh_ik_targetparentR_1']: THREE.Bone;
    ['MCH-hand_ikparentL_1']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentL_1']: THREE.Bone;
    ['MCH-hand_ikparentR_1']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentR_1']: THREE.Bone;
    neutral_bone: THREE.Bone;
    Bone_1: THREE.Bone;
    ['ORG-spine_2']: THREE.Bone;
    root_3: THREE.Bone;
    ['MCH-torsoparent_2']: THREE.Bone;
    ['MCH-foot_ikparentL_2']: THREE.Bone;
    ['MCH-thigh_ik_targetparentL_2']: THREE.Bone;
    ['MCH-foot_ikparentR_2']: THREE.Bone;
    ['MCH-thigh_ik_targetparentR_2']: THREE.Bone;
    ['MCH-hand_ikparentL_2']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentL_2']: THREE.Bone;
    ['MCH-hand_ikparentR_2']: THREE.Bone;
    ['MCH-upper_arm_ik_targetparentR_2']: THREE.Bone;
  };
  materials: {};
};

type ActionName =
  | 'tumbleweedAction'
  | 'Cylinder.001Action'
  | 'Armature.001Action'
  | 'Key.002Action'
  | 'Armature.001Action.002'
  | 'pitcher-rigAction'
  | 'Armature.002Action'
  | 'ArmatureAction.001'
  | 'cheetah-rig-mainAction'
  | 'Key.001Action.001'
  | 'Armature.003Action.005'
  | 'lion-main-rigAction'
  | 'Key.003Action';
type GLTFActions = Record<ActionName, THREE.AnimationAction>;

export function TestAnim(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials, animations } = useGLTF(
    '/test_anim.glb'
  ) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  React.useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.clampWhenFinished = true;
      action.repetitions = 1;
      action.play();
    });
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      scale={0.05}
      position={[0, 0, 0]}
    >
      <group name='Scene'>
        <mesh
          frustumCulled={false}
          name='tumbleweed'
          castShadow
          receiveShadow
          geometry={nodes.tumbleweed.geometry}
          material={nodes.tumbleweed.material}
          position={[-342.259, 17.871, -76.308]}
          rotation={[0, 0, -1.382]}
        />
        <group name='merged-field002' position={[189.582, 20.675, 82.162]} />
        <group name='IvyLeaf001' position={[92.613, -0.202, 89.335]} />
        <mesh
          frustumCulled={false}
          name='Plane001'
          castShadow
          receiveShadow
          geometry={nodes.Plane001.geometry}
          material={nodes.Plane001.material}
          position={[-27.523, -2.596, -26.837]}
        />
        <mesh
          frustumCulled={false}
          name='Cube001'
          castShadow
          receiveShadow
          geometry={nodes.Cube001.geometry}
          material={nodes.Cube001.material}
          position={[-235.082, 92.705, 264.462]}
          rotation={[0, -0.185, 0]}
          scale={1.557}
        />
        <mesh
          frustumCulled={false}
          name='Cube002'
          castShadow
          receiveShadow
          geometry={nodes.Cube002.geometry}
          material={nodes.Cube002.material}
          position={[-246.323, 58.2, 312.201]}
          rotation={[0, -0.175, 0]}
          scale={[1.557, 46.13, 3.218]}
        />
        <mesh
          frustumCulled={false}
          name='Cube003'
          castShadow
          receiveShadow
          geometry={nodes.Cube003.geometry}
          material={nodes.Cube003.material}
          position={[-228.104, 80.298, 214.974]}
          rotation={[0, -0.175, 0]}
          scale={[1.557, 76.923, 3.218]}
        />
        <mesh
          frustumCulled={false}
          name='Plane'
          castShadow
          receiveShadow
          geometry={nodes.Plane.geometry}
          material={nodes.Plane.material}
          position={[-233.829, 92.897, 264.955]}
          rotation={[0.003, -0.187, -1.563]}
          scale={1.557}
        />
        <mesh
          frustumCulled={false}
          name='Text-1'
          castShadow
          receiveShadow
          geometry={nodes['Text-1'].geometry}
          material={nodes['Text-1'].material}
          position={[-242.031, 102.442, 313.959]}
          rotation={[Math.PI / 2, 0, -1.388]}
          scale={12.535}
        />
        <mesh
          frustumCulled={false}
          name='Text-2'
          castShadow
          receiveShadow
          geometry={nodes['Text-2'].geometry}
          material={nodes['Text-2'].material}
          position={[-228.704, 103.028, 241.924]}
          rotation={[Math.PI / 2, 0, -1.388]}
          scale={11.282}
        />
        <mesh
          frustumCulled={false}
          name='Cube004'
          castShadow
          receiveShadow
          geometry={nodes.Cube004.geometry}
          material={nodes.Cube004.material}
          position={[-230.05, 21.878, 263.78]}
          rotation={[0, -0.157, 0]}
          scale={[1.165, 19.256, 1.876]}
        />
        <mesh
          frustumCulled={false}
          name='Cube005'
          castShadow
          receiveShadow
          geometry={nodes.Cube005.geometry}
          material={nodes.Cube005.material}
          position={[-227.838, 29.476, 261.351]}
          rotation={[0, -0.169, 0]}
          scale={[0.654, 8.126, 19.727]}
        />
        <mesh
          frustumCulled={false}
          name='40Rocksobj'
          castShadow
          receiveShadow
          geometry={nodes['40Rocksobj'].geometry}
          material={nodes['40Rocksobj'].material}
          position={[-435.596, 31.986, 249.39]}
          rotation={[Math.PI / 2, 0, 0]}
          scale={14.523}
        />
        <mesh
          frustumCulled={false}
          name='40Rocksobj001'
          castShadow
          receiveShadow
          geometry={nodes['40Rocksobj001'].geometry}
          material={nodes['40Rocksobj001'].material}
          position={[-430.931, 41.995, 288.181]}
          rotation={[-1.629, -0.158, 1.074]}
        />
        <mesh
          frustumCulled={false}
          name='40Rocksobj005'
          castShadow
          receiveShadow
          geometry={nodes['40Rocksobj005'].geometry}
          material={nodes['40Rocksobj005'].material}
          position={[-223.671, 6.644, 290.008]}
          rotation={[1.585, 0.025, -0.998]}
          scale={23.175}
        />
        <mesh
          frustumCulled={false}
          name='cactus-1001'
          castShadow
          receiveShadow
          geometry={nodes['cactus-1001'].geometry}
          material={nodes['cactus-1001'].material}
          position={[112.907, 48.486, 86.577]}
          rotation={[-Math.PI, 1.156, -Math.PI]}
          scale={2.202}
        />
        <mesh
          frustumCulled={false}
          name='cactus-1003'
          castShadow
          receiveShadow
          geometry={nodes['cactus-1003'].geometry}
          material={nodes['cactus-1003'].material}
          position={[155.996, 43.203, 425.231]}
          rotation={[-Math.PI, 0.808, -Math.PI]}
          scale={3.23}
        />
        <mesh
          frustumCulled={false}
          name='merged-field001'
          castShadow
          receiveShadow
          geometry={nodes['merged-field001'].geometry}
          material={nodes['merged-field001'].material}
          position={[116.029, 15.348, 81.656]}
          rotation={[-3.056, -0.3, -3.08]}
          scale={4.194}
        />
        <mesh
          frustumCulled={false}
          name='merged-field003'
          castShadow
          receiveShadow
          geometry={nodes['merged-field003'].geometry}
          material={nodes['merged-field003'].material}
          position={[159.879, 12.621, 419.283]}
          rotation={[-1.771, -1.282, -1.84]}
          scale={2.941}
        />
        <mesh
          frustumCulled={false}
          name='40Rocksobj002'
          castShadow
          receiveShadow
          geometry={nodes['40Rocksobj002'].geometry}
          material={nodes['40Rocksobj002'].material}
          position={[103.733, 7.561, 156.036]}
          rotation={[-1.139, 0.562, -0.764]}
          scale={30.727}
        />
        <mesh
          frustumCulled={false}
          name='40Rocksobj003'
          castShadow
          receiveShadow
          geometry={nodes['40Rocksobj003'].geometry}
          material={nodes['40Rocksobj003'].material}
          position={[116.253, 8.14, 175.307]}
          rotation={[2.657, -1.187, -0.209]}
          scale={31.895}
        />
        <mesh
          frustumCulled={false}
          name='Cylinder001'
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001.geometry}
          material={nodes.Cylinder001.material}
          position={[177.873, 1.222, 491.001]}
          rotation={[0, 0.683, 0]}
          scale={[8.637, 6.291, 8.637]}
        />
        <group name='fox-armature-1' position={[-228.109, 0.965, 312.407]}>
          <skinnedMesh
            frustumCulled={false}
            name='Cube007'
            geometry={nodes.Cube007.geometry}
            material={nodes.Cube007.material}
            skeleton={nodes.Cube007.skeleton}
            morphTargetDictionary={nodes.Cube007.morphTargetDictionary}
            morphTargetInfluences={nodes.Cube007.morphTargetInfluences}
          />
          <primitive object={nodes.root} />
        </group>
        <group name='Armature001' position={[0, 0, 36.911]}>
          <skinnedMesh
            frustumCulled={false}
            name='Mesh_1001'
            geometry={nodes.Mesh_1001.geometry}
            material={nodes.Mesh_1001.material}
            skeleton={nodes.Mesh_1001.skeleton}
          />
          <primitive object={nodes.Hips2} />
        </group>
        <mesh
          frustumCulled={false}
          name='bull_skull'
          castShadow
          receiveShadow
          geometry={nodes.bull_skull.geometry}
          material={nodes.bull_skull.material}
          position={[-209.397, 3.28, 221.547]}
          rotation={[0.064, 0.919, -0.063]}
          scale={61.582}
        />
        <mesh
          frustumCulled={false}
          name='Text'
          castShadow
          receiveShadow
          geometry={nodes.Text.geometry}
          material={nodes.Text.material}
          position={[-226.657, 29.102, 260.781]}
          rotation={[1.568, 0.004, -1.403]}
          scale={12.318}
        />
        <group name='pitcher-rig'>
          <skinnedMesh
            frustumCulled={false}
            name='eye_iris'
            geometry={nodes.eye_iris.geometry}
            material={nodes.eye_iris.material}
            skeleton={nodes.eye_iris.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            name='FMB_Shoes_01_L'
            geometry={nodes.FMB_Shoes_01_L.geometry}
            material={nodes.FMB_Shoes_01_L.material}
            skeleton={nodes.FMB_Shoes_01_L.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            name='FMB_Shoes_01_R'
            geometry={nodes.FMB_Shoes_01_R.geometry}
            material={nodes.FMB_Shoes_01_R.material}
            skeleton={nodes.FMB_Shoes_01_R.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            name='FoamFinger001'
            geometry={nodes.FoamFinger001.geometry}
            material={nodes.FoamFinger001.material}
            skeleton={nodes.FoamFinger001.skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            name='pitcher-body001'
            geometry={nodes['pitcher-body001'].geometry}
            material={nodes['pitcher-body001'].material}
            skeleton={nodes['pitcher-body001'].skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            name='pitcher-body002'
            geometry={nodes['pitcher-body002'].geometry}
            material={nodes['pitcher-body002'].material}
            skeleton={nodes['pitcher-body002'].skeleton}
          />
          <skinnedMesh
            frustumCulled={false}
            name='pitcher-body003'
            geometry={nodes['pitcher-body003'].geometry}
            material={nodes['pitcher-body003'].material}
            skeleton={nodes['pitcher-body003'].skeleton}
          />
          <primitive object={nodes.root_1} />
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
          frustumCulled={false}
          name='pitcher-cap'
          geometry={nodes['pitcher-cap'].geometry}
          material={nodes['pitcher-cap'].material}
          skeleton={nodes['pitcher-cap'].skeleton}
        />
        <group
          frustumCulled={false}
          name='bag052_low'
          position={[-0.351, 3.4, -8.583]}
          rotation={[-Math.PI, 1.464, -Math.PI]}
          scale={[0.557, 0.482, 0.737]}
        />
        <group name='Armature002' position={[-0.717, 3.289, -8.867]}>
          <skinnedMesh
            frustumCulled={false}
            name='bag001_low'
            geometry={nodes.bag001_low.geometry}
            material={nodes.bag001_low.material}
            skeleton={nodes.bag001_low.skeleton}
          />
          <primitive object={nodes.Bone_2} />
        </group>
        <group name='Armature'>
          <skinnedMesh
            frustumCulled={false}
            name='SM_Body_L001'
            geometry={nodes.SM_Body_L001.geometry}
            material={nodes.SM_Body_L001.material}
            skeleton={nodes.SM_Body_L001.skeleton}
          />
          <primitive object={nodes.Bone_3} />
        </group>
        <group name='cheetah-rig-main'>
          <skinnedMesh
            frustumCulled={false}
            name='cheetah'
            geometry={nodes.cheetah.geometry}
            material={nodes.cheetah.material}
            skeleton={nodes.cheetah.skeleton}
            morphTargetDictionary={nodes.cheetah.morphTargetDictionary}
            morphTargetInfluences={nodes.cheetah.morphTargetInfluences}
          />
          <primitive object={nodes.root_2} />
          <primitive object={nodes['MCH-torsoparent_1']} />
          <primitive object={nodes['MCH-foot_ikparentL_1']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL_1']} />
          <primitive object={nodes['MCH-foot_ikparentR_1']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR_1']} />
          <primitive object={nodes['MCH-hand_ikparentL_1']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL_1']} />
          <primitive object={nodes['MCH-hand_ikparentR_1']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR_1']} />
          <primitive object={nodes.neutral_bone} />
        </group>
        <mesh
          frustumCulled={false}
          name='Plane002'
          castShadow
          receiveShadow
          geometry={nodes.Plane002.geometry}
          material={nodes.Plane002.material}
          position={[0, -8.793, 0]}
          rotation={[0, 0, Math.PI]}
          scale={[-2109.664, -1444.109, -1734.615]}
        />
        <group name='Armature003' position={[0, 4.494, 0.13]}>
          <primitive object={nodes.Bone_1} />
        </group>
        <group name='rig001'>
          <primitive object={nodes['ORG-spine_2']} />
        </group>
        <group name='lion-main-rig' position={[-47.112, 5.2, 495.341]}>
          <skinnedMesh
            frustumCulled={false}
            name='object_0001'
            geometry={nodes.object_0001.geometry}
            material={nodes.object_0001.material}
            skeleton={nodes.object_0001.skeleton}
            morphTargetDictionary={nodes.object_0001.morphTargetDictionary}
            morphTargetInfluences={nodes.object_0001.morphTargetInfluences}
          />
          <primitive object={nodes.root_3} />
          <primitive object={nodes['MCH-torsoparent_2']} />
          <primitive object={nodes['MCH-foot_ikparentL_2']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentL_2']} />
          <primitive object={nodes['MCH-foot_ikparentR_2']} />
          <primitive object={nodes['MCH-thigh_ik_targetparentR_2']} />
          <primitive object={nodes['MCH-hand_ikparentL_2']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentL_2']} />
          <primitive object={nodes['MCH-hand_ikparentR_2']} />
          <primitive object={nodes['MCH-upper_arm_ik_targetparentR_2']} />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/test_anim.glb');
