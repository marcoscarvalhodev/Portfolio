import { useFrame, useThree } from '@react-three/fiber';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const FullCanvasCamera = () => {
  const { camera, invalidate } = useThree();
  const cameraRef = React.useRef(camera);

  React.useEffect(() => {
    camera.lookAt(-10, -12.5, 0);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        scrub: 5,
        start: 'top top',
        end: 'bottom bottom',
      },
    });

    tl.to(
      camera.position,
      {
        x: camera.position.x - 17,
        y: camera.position.y - 3,
      },
      0
    ).to(
      camera.rotation,
      {
        y: camera.rotation.y - 0.5,
      },
      0
    );
  });

  React.useLayoutEffect(() => {
    camera.rotation.order = 'YXZ';
  }, [camera]);

  return null;
};

export default FullCanvasCamera;