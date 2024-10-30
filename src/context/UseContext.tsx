import { useContext } from 'react';
import { CreateBaseballContext } from './BaseballContext';
import { CreateVideoProjectsContext } from './VideoProjectsContext';

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
