/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />
import * as THREE from 'three';
import { CrossFadeRefProps } from './Shaders/CrossFade/CrossFade';

declare module '' {
  export default interface Object3D {
    morphTargetDictionary: number;
    morphTargetInfluences: number;
    geometry: string;
  }
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      crossFadeMaterial: {
        ref: React.MutableRefObject<CrossFadeRefProps | null>;
        tex: THREE.Texture | null;
        tex2: THREE.Texture | null;
        disp: THREE.Texture | null;
      };
    }
  }
}
