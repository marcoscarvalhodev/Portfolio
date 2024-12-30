import * as THREE from 'three';
import React from 'react';
import { useFrame } from '@react-three/fiber';

interface PauseOutFocusProps {
  mixer: THREE.AnimationMixer;
  setCrossFadeState: React.Dispatch<React.SetStateAction<boolean>>;
  time1: number;
  time2: number;
}

const PauseOutFocus = ({
  mixer,
  setCrossFadeState,
  time1,
  time2,
}: PauseOutFocusProps) => {
  React.useEffect(() => {
    const visibilityChange = () => {
      if (document.visibilityState === 'visible') {
        if (mixer.time >= time1 && mixer.time < time2) {
          setCrossFadeState(true);
        }
        if (mixer.time >= time2) {
          setCrossFadeState(false);
        }
      }
    };

    document.addEventListener('visibilitychange', visibilityChange);

    return () => {
      document.removeEventListener('visibilitychange', visibilityChange);
    };
  });
};

export default PauseOutFocus;
