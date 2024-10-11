import React from 'react';
import {
  ToneMapping,
  Bloom,
  EffectComposer,
} from '@react-three/postprocessing';
import {ToneMappingMode } from 'postprocessing';

const EffectsComponent = () => {
  return (
    <EffectComposer>
      <Bloom
        mipmapBlur
        luminanceSmoothing={1}
        luminanceThreshold={1.1}
        intensity={1.5}
      />
      <ToneMapping mode={ToneMappingMode.REINHARD2_ADAPTIVE} />
    </EffectComposer>
  );
};

export default EffectsComponent;
