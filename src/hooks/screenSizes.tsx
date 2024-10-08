import React from 'react';
import { UseMediaQuery } from './useMediaQuery';
const ScreenSizes = () => {
  return {
    smallScreen: UseMediaQuery('(max-width:680px)'),
  };
};

export default ScreenSizes;
