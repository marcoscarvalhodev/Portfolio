import React from 'react';
import {
  ToneMapping,
  Bloom,
  EffectComposer,
} from '@react-three/postprocessing';
import { BloomEffect, ToneMappingMode } from 'postprocessing';

const EffectsComponent = () => {
  const bloomed = React.useRef<typeof BloomEffect | null>(null);

  React.useEffect(() => {
    console.log(bloomed.current)
  })

  return (
    <EffectComposer>
      <Bloom
        ref={bloomed}
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
