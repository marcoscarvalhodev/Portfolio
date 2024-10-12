import React from 'react';
import { SquaredRobot } from './SquaredRobot';
import FullCanvasCamera from './FullCanvasCamera';
import { useFrame } from '@react-three/fiber';
const FullCanvasAnimations = () => {
  return (
    <>
      <FullCanvasCamera />
      <SquaredRobot />
    </>
  );
};

export default FullCanvasAnimations;
