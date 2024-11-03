import React from 'react';

import FullCanvasCamera from './FullCanvasCamera';
import { TestAnim } from '../TestAnim/TestAnim';

const FullCanvasAnimations = () => {
  return (
    <>
      <FullCanvasCamera />
      {<TestAnim />}
    
    </>
  );
};

export default FullCanvasAnimations;
