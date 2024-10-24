import React from 'react';
import { SquaredRobot } from './SquaredRobot';
import FullCanvasCamera from './FullCanvasCamera';
import { TestAnim } from '../TestAnim/TestAnim';

const FullCanvasAnimations = () => {
  return (
    <>
      <FullCanvasCamera />
      {<TestAnim />}
      {/*<SquaredRobot />*/}
    </>
  );
};

export default FullCanvasAnimations;
