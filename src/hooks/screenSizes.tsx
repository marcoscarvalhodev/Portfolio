import React from 'react';
import { UseMediaQuery } from './useMediaQuery';
const ScreenSizes = () => {
  return {
    smallScreen: UseMediaQuery('(max-width:860px)'),
    largeScreen: UseMediaQuery('(max-width:1024px)')
  };
};

export default ScreenSizes;
