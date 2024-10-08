import { useContext } from 'react';
import { CreateBaseballContext } from './BaseballContext';

export const UseBaseballContext = () => {
  const useBaseballContext = useContext(CreateBaseballContext);
  if (!useBaseballContext) {
    throw new Error('there is no baseball context');
  }

  return useBaseballContext;
};
