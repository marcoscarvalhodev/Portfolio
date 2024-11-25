/// <reference types="vite/client" />
/// <reference types="vite-plugin-svgr/client" />

declare module '@types/three' {
  export default interface Object3D {
    morphTargetDictionary: number;
    morphTargetInfluences: number;
    geometry: string;
  }
}


