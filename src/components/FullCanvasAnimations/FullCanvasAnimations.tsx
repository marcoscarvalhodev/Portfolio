import React from 'react';

import FullCanvasCamera from './FullCanvasCamera';
import { CheetahAnimation } from '../Animations/CheetahAnimation';
import { WalkerAnimation } from '../Animations/WalkerAnimation';
import { SceneryAnimation } from '../Animations/SceneryAnimation';
import { MessageAnimation } from '../Animations/MessageAnimation';
import { LionAnimation } from '../Animations/LionAnimation';
import { FoxAnimation } from '../Animations/FoxAnimation';
import { SnakeAnimation } from '../Animations/SnakeAnimation';

const FullCanvasAnimations = () => {
  return (
    <>
      <FullCanvasCamera />
      <SceneryAnimation />
      <WalkerAnimation />
      <MessageAnimation />
      <LionAnimation />
      <CheetahAnimation />
      <FoxAnimation />
      <SnakeAnimation />
    </>
  );
};

export default FullCanvasAnimations;
