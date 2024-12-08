import React from 'react';
import * as THREE from 'three';
import { TransitionContextInterface } from '../interfaces/ContextInterfaces';

export const CreateTransitionContext =
  React.createContext<TransitionContextInterface | null>(null);

export const TransitionContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const refTextOpacity1 = React.useRef<THREE.Mesh | null>(null);
  const refTextOpacity2 = React.useRef<THREE.Mesh | null>(null);
  return (
    <CreateTransitionContext.Provider value={{refTextOpacity1, refTextOpacity2 }}>
      {children}
    </CreateTransitionContext.Provider>
  );
};
