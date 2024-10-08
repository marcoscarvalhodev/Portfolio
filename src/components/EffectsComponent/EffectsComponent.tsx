import React from 'react';
import {
  ToneMapping,
  Bloom,
  EffectComposer,
} from '@react-three/postprocessing';
import { ToneMappingMode } from 'postprocessing';

const EffectsComponent = () => {
  return (
    <EffectComposer>
      <Bloom
        mipmapBlur
        luminanceSmoothing={1}
        luminanceThreshold={1.1}
        intensity={4}
      />
      <ToneMapping mode={ToneMappingMode.OPTIMIZED_CINEON} />
    </EffectComposer>
  );
};

export default EffectsComponent;
