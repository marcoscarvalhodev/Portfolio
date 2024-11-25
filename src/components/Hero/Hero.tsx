import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

import { TailwindColors } from '../../helper/TailwindTheme';
import ScreenSizes from '../../hooks/screenSizes';

const Hero = () => {
  const welcomeRef = React.useRef<HTMLHeadingElement | null>(null);
  const welcomeBg = React.useRef<HTMLSpanElement | null>(null);
  const { smallScreen } = ScreenSizes();

  const { black_10, blue_10, white_10 } = TailwindColors;

  useGSAP(() => {
    const changeTextColor = ({
      color_1,
      color_2,
    }: {
      color_1: string;
      color_2: string;
    }) => {
      const introductionAll = document.querySelectorAll('.introduction');
      introductionAll.forEach((item) => {
        gsap.to(item, {
          color: color_1,
          duration: 1.5,
        });
      });

      gsap.to('.introduction-1', {
        color: color_2,
        duration: 1.5,
      });
    };

    gsap.to(welcomeBg.current, {
      xPercent: 100,
      duration: 1,
      background: blue_10,

      scrollTrigger: {
        trigger: welcomeBg.current,
        start: `top ${smallScreen ? '=+80px' : '=+100px'}`,
        end: `bottom ${smallScreen ? '=+110px' : '=+200px'}`,
        toggleActions: 'play reverse play reverse',
        markers: true,
        onEnter: () => {
          changeTextColor({
            color_1: white_10,
            color_2: white_10,
          });
        },
        onEnterBack: () => {
          changeTextColor({
            color_1: white_10,
            color_2: white_10,
          });
        },

        onLeave: () => {
          changeTextColor({
            color_1: blue_10,
            color_2: black_10,
          });
        },

        onLeaveBack: () => {
          changeTextColor({
            color_1: blue_10,
            color_2: black_10,
          });
        },
      },
    });
  });

  return (
    <div
      className={`absolute translate-y-[-50%] top-[50%] h-max sm:w-screen md:w-full xsm:p-sp-70 sm:p-sp-50 lg:p-sp-20`}
    >
      <h1 ref={welcomeRef} className={`xsm:flex xsm:flex-col text-f-30`}>
        <span className='subtitle introduction text-blue_10  font-bold'>
          I'm{' '}
        </span>
        <span
          className={`subtitle introduction text-blue_10 font-bold`}
        >
          MARCOS CARVALHO
        </span>
      </h1>
      <p
        className={`introduction-1 text-black_10 text-f-30 md:w-[50rem] `}
      >
        software engineer with strong focus in development of dynamic 3D
        experiences.
      </p>
      <span
        ref={welcomeBg}
        className={`absolute w-screen h-[100%] bg-blue_10 top-0 z-[-1] opacity-[1] translate-x-[-100%] left-0`}
      ></span>
    </div>
  );
};

export default Hero;
