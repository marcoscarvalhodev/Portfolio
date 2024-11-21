import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollHideProps {
  element: string;
  orientation: 'xPercent' | 'yPercent' | 'x' | 'y';
  orientationVal1: number;
  orientationVal2: number;
  
}

const ScrollHideElement = ({
  element,
  orientation,
  orientationVal1,
  orientationVal2,
 
}: ScrollHideProps) => {


  React.useEffect(() => {
    gsap.to(element, {
      scrollTrigger: {
        trigger: 'body',
        start: '30px',

        onUpdate: (self) => {
          gsap.to(element, {
            [orientation]:
              self.direction === 1 ? orientationVal1 : orientationVal2,
            duration: 1,
          });
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [element, orientation, orientationVal1, orientationVal2]);
};

export default ScrollHideElement;
