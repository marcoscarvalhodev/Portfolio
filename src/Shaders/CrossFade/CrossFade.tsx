import { extend } from '@react-three/fiber';
import { shaderMaterial } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import * as THREE from 'three';
import crossFadeFragment from './fragment.glsl';
import crossFadeVertex from './vertex.glsl';
import React from 'react';

interface CrossFadeProps {
  crossFadeState: boolean;
  crossFadeRef: React.MutableRefObject<THREE.MeshStandardMaterial | null>;
  texture1: THREE.Texture;
  texture2: THREE.Texture;
  dispTexture: THREE.Texture;
}

export interface CrossFadeRefProps {
  dispFactor: number;
  tex: THREE.TextureLoader;
  tex2: THREE.TextureLoader;
}

const CrossFade = ({
  crossFadeState,
  crossFadeRef,
  texture1,
  texture2,
  dispTexture,
}: CrossFadeProps) => {
  const [uniformsReady, setUniformsReady] = React.useState(false);

  React.useEffect(() => {
    if (crossFadeRef.current) {
      crossFadeRef.current.onBeforeCompile = (shader) => {
        //uniforms
        shader.uniforms.tex = { value: texture1 };
        shader.uniforms.tex2 = { value: texture2 };
        shader.uniforms.disp = { value: dispTexture };
        shader.uniforms.effectFactor = { value: 10 };
        shader.uniforms.dispFactor = { value: 0 };

        if (crossFadeRef.current) {
          crossFadeRef.current.userData.uniforms = shader.uniforms;
        }

        //vertex-shader
        shader.vertexShader = `
    varying vec2 vUv;
    ${shader.vertexShader}
    `.replace(
          `#include <uv_vertex>`,
          `
          #include <uv_vertex>
          vUv = uv;
      `
        );

        //fragment-shader
        shader.fragmentShader = `
              varying vec2 vUv;
          uniform sampler2D tex;
          uniform sampler2D tex2;
          uniform sampler2D disp;
          uniform float _rot;
          uniform float dispFactor;
          uniform float effectFactor;
    ${shader.fragmentShader}
    `.replace(
          `#include <map_fragment>`,
          `
          vec2 uv = vUv;
          vec4 disp = texture2D(disp, uv);
          vec2 distortedPosition = vec2(uv.x + dispFactor * (disp.r*effectFactor), uv.y);
          vec2 distortedPosition2 = vec2(uv.x - (1.0 - dispFactor) * (disp.r*effectFactor), uv.y);
          vec4 _texture = texture2D(tex, distortedPosition);
          vec4 _texture2 = texture2D(tex2, distortedPosition2);

          vec4 finalTexture = mix(_texture, _texture2, dispFactor);
              
          diffuseColor = finalTexture;
`
        );
      };

      setUniformsReady(true);
    }
  }, [setUniformsReady, crossFadeRef, dispTexture, texture1, texture2]);

  useFrame(() => {
    if (crossFadeRef.current && uniformsReady)
      crossFadeRef.current.userData.uniforms.dispFactor = {
        value: THREE.MathUtils.lerp(
          crossFadeRef.current.userData.uniforms.dispFactor.value,
          crossFadeState ? 1 : 0,
          0.075
        ),
      };
  });
};

export default CrossFade;
