import * as THREE from 'three';
import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { TextureLoader } from 'three';
import { useLoader } from '@react-three/fiber';
type GLTFResult = GLTF & {
  nodes: {
    Plane001: THREE.Mesh;
    Cube001: THREE.Mesh;
    Cube002: THREE.Mesh;
    Cube003: THREE.Mesh;
    Plane: THREE.Mesh;
    Cube004: THREE.Mesh;
    Cube005: THREE.Mesh;
    ['40Rocksobj005']: THREE.Mesh;
    ['cactus-1001']: THREE.Mesh;
    ['cactus-1003']: THREE.Mesh;
    ['merged-field001']: THREE.Mesh;
    ['merged-field003']: THREE.Mesh;
    ['40Rocksobj002']: THREE.Mesh;
    ['40Rocksobj003']: THREE.Mesh;
    Cylinder001: THREE.Mesh;
    bull_skull: THREE.Mesh;
    Text: THREE.Mesh;
    Plane002: THREE.Mesh;
  };
  materials: {};
};

export function SceneryAnimation(props: JSX.IntrinsicElements['group']) {
  const group = useRef<THREE.Group | null>(null);
  const { nodes, materials } = useGLTF('/portfolio-v1.glb') as GLTFResult;

  const texture = useLoader(TextureLoader, '/desert_bake.jpg');

  React.useLayoutEffect(() => {
    texture.flipY = false;
    const selectedMaterial = materials[''];
    selectedMaterial.map = texture;
  });
  
  return (
    <group
      ref={group}
      {...props}
      
    >
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane001.geometry}
        material={nodes.Plane001.material}
        position={[-27.523, -2.596, -26.837]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube001.geometry}
        material={nodes.Cube001.material}
        position={[-235.082, 92.705, 264.462]}
        rotation={[0, -0.185, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube002.geometry}
        material={nodes.Cube002.material}
        position={[-246.323, 58.2, 312.201]}
        rotation={[0, -0.175, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube003.geometry}
        material={nodes.Cube003.material}
        position={[-228.104, 80.298, 214.974]}
        rotation={[0, -0.175, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane.geometry}
        material={nodes.Plane.material}
        position={[-233.829, 92.897, 264.955]}
        rotation={[0.003, -0.187, -1.563]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube004.geometry}
        material={nodes.Cube004.material}
        position={[-230.05, 21.878, 263.78]}
        rotation={[0, -0.157, 0]}
        scale={[1.165, 19.256, 1.876]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube005.geometry}
        material={nodes.Cube005.material}
        position={[-227.838, 29.476, 261.351]}
        rotation={[0, -0.169, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['40Rocksobj005'].geometry}
        material={nodes['40Rocksobj005'].material}
        position={[-223.671, 6.644, 290.008]}
        rotation={[1.585, 0.025, -0.998]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['cactus-1001'].geometry}
        material={nodes['cactus-1001'].material}
        position={[112.907, 48.486, 86.577]}
        rotation={[-Math.PI, 1.156, -Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['cactus-1003'].geometry}
        material={nodes['cactus-1003'].material}
        position={[-245.306, 38.589, 380.378]}
        rotation={[Math.PI, -0.871, Math.PI]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['merged-field001'].geometry}
        material={nodes['merged-field001'].material}
        position={[116.029, 15.348, 81.656]}
        rotation={[-3.056, -0.3, -3.08]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['merged-field003'].geometry}
        material={nodes['merged-field003'].material}
        position={[-251.638, 8.007, 377.159]}
        rotation={[-0.283, 0.047, -0.047]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['40Rocksobj002'].geometry}
        material={nodes['40Rocksobj002'].material}
        position={[103.733, 7.561, 156.036]}
        rotation={[-1.139, 0.562, -0.764]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes['40Rocksobj003'].geometry}
        material={nodes['40Rocksobj003'].material}
        position={[116.253, 8.14, 175.307]}
        rotation={[2.657, -1.187, -0.209]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder001.geometry}
        material={nodes.Cylinder001.material}
        position={[177.873, 1.222, 491.001]}
        rotation={[0, 0.683, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.bull_skull.geometry}
        material={nodes.bull_skull.material}
        position={[-209.397, 3.28, 221.547]}
        rotation={[0.064, 0.919, -0.063]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[-226.657, 29.102, 260.781]}
        rotation={[1.568, 0.004, -1.403]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane002.geometry}
        material={nodes.Plane002.material}
        position={[0, 0.131, 0]}
      />
    </group>
  );
}

useGLTF.preload('/portfolio-v1.glb');
