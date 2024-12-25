import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import crossFadeFragment from './fragment.glsl';
import crossFadeVertex from './vertex.glsl';
import React from 'react';

interface CrossFadeProps {
  crossFadeState: boolean;
  crossFadeRef: React.MutableRefObject<CrossFadeRefProps | null>;
}

export interface CrossFadeRefProps {
  dispFactor: number;
  tex: THREE.TextureLoader;
  tex2: THREE.TextureLoader;
}

const CrossFade = ({ crossFadeState, crossFadeRef }: CrossFadeProps) => {
  const CrossFadeMaterial = shaderMaterial(
    {
      effectFactor: 5,
      dispFactor: 0,
      tex: null,
      tex2: null,
      disp: null,
    },
    crossFadeVertex,
    crossFadeFragment
  );

  useFrame(() => {
    if (crossFadeRef.current)
      crossFadeRef.current.dispFactor = THREE.MathUtils.lerp(
        crossFadeRef.current.dispFactor,
        crossFadeState ? 1 : 0,
        0.075
      );
  });

  return extend({ CrossFadeMaterial });
};

export default CrossFade;
