import * as THREE from 'three';
import React from 'react';
import { useFrame, useGraph } from '@react-three/fiber';
import { useGLTF, useAnimations } from '@react-three/drei';
import { GLTF, SkeletonUtils } from 'three-stdlib';

type ActionName = 'squared-robot';

interface GLTFAction extends THREE.AnimationClip {
  name: ActionName;
}

type GLTFResult = GLTF & {
  nodes: {
    Cube001: THREE.SkinnedMesh;
    Cube006: THREE.SkinnedMesh;
    Cube006_1: THREE.SkinnedMesh;
    root: THREE.Bone;
  };
  materials: {
    body: THREE.MeshStandardMaterial;
    holes: THREE.MeshStandardMaterial;
  };
  animations: GLTFAction[];
};

export function SquaredRobot(props: JSX.IntrinsicElements['group']) {
  const group = React.useRef<THREE.Group | null>(null);
  const { scene, animations } = useGLTF('/squared_robot.glb');
  const clone = React.useMemo(() => SkeletonUtils.clone(scene), [scene]);
  const { nodes, materials } = useGraph(clone) as GLTFResult;
  const { actions, mixer } = useAnimations(animations, group);

  const [scrollPos, setScrollPos] = React.useState(0);

  const targetAnimationTime = React.useRef(0); // Store the target animation time
  const currentAnimationTime = React.useRef(0);

  React.useEffect(() => {
    animations.forEach((clip) => {
      const action = mixer.clipAction(clip);
      action.play();
      action.zeroSlopeAtEnd = false;
      action.clampWhenFinished = true;
    });
  }, [animations, mixer]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const scrollProgress = scrollY / maxScroll;
      setScrollPos(scrollProgress);
    };

    window.addEventListener('scroll', handleScroll);
  });

  useFrame((state, delta) => {
    const duration = animations[0].duration || 1;
    const clampedScrollPosition = Math.min(scrollPos, 1); // Clamp to avoid exceeding 1

    targetAnimationTime.current = clampedScrollPosition * duration;

    
    currentAnimationTime.current = THREE.MathUtils.lerp(
      currentAnimationTime.current,
      targetAnimationTime.current,
      0.1 
    );

    mixer.setTime(currentAnimationTime.current);
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[0, 1, 0]}
      position={[5, 0, 0]}
      scale={0.3}
    >
      <group name='Scene'>
        <group name='Armature002' position={[0.008, 1.041, 0.254]}>
          <primitive object={nodes.root} />
          <skinnedMesh
            name='Cube001'
            geometry={nodes.Cube001.geometry}
            material={materials.body}
            skeleton={nodes.Cube001.skeleton}
          />
          <group name='Cube005'>
            <skinnedMesh
              name='Cube006'
              geometry={nodes.Cube006.geometry}
              material={materials.body}
              skeleton={nodes.Cube006.skeleton}
            />
            <skinnedMesh
              name='Cube006_1'
              geometry={nodes.Cube006_1.geometry}
              material={materials.holes}
              skeleton={nodes.Cube006_1.skeleton}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload('/squared_robot.glb');
