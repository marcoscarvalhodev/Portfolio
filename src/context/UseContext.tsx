import { useContext } from 'react';
import { CreateBaseballContext } from './BaseballContext';
import { CreateVideoProjectsContext } from './VideoProjectsContext';
import { CreateMenuMobileContext } from './MenuMobileContext';

export const UseBaseballContext = () => {
  const useBaseballContext = useContext(CreateBaseballContext);
  if (!useBaseballContext) {
    throw new Error('there is no baseball context');
  }

  return useBaseballContext;
};

export const UseVideoProjectsContext = () => {
  const useVideoProjectsContext = useContext(CreateVideoProjectsContext);
  if (!useVideoProjectsContext) {
    throw new Error('there is no videoProjects context');
  }

  return useVideoProjectsContext;
};

export const UseMenuMobileContext = () => {
  const useMenuMobileContext = useContext(CreateMenuMobileContext);
  if (!useMenuMobileContext) {
    throw new Error('there is no menuMobile context');
  }

  return useMenuMobileContext;
};
