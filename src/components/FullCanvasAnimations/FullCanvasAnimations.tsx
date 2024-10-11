import React from 'react';
import { useFrame } from '@react-three/fiber';
import { Mesh } from 'three';
import { SquaredRobot } from './SquaredRobot';
const FullCanvasAnimations = () => {
  return (
    <>
      <ambientLight intensity={2}/>
      <SquaredRobot />
    </>
  );
};

export default FullCanvasAnimations;
