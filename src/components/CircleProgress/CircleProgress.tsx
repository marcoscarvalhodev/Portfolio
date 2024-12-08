import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { TailwindColors } from '../../helper/TailwindTheme';
import ProgressArrow from '../../assets/progress_circle/progress-arrow.svg?react';
import ScrollSpy from '../../hooks/scrollSpy';
import { ContentNav } from '../../Contents';
gsap.registerPlugin(ScrollTrigger);

const CircleProgress = () => {
  const refCircle = React.useRef<SVGCircleElement | null>(null);
  const { blue_10, white_10, yellow_10 } = TailwindColors;

  const refWhiteProgress = React.useRef(false);

  const { handleClick } = ScrollSpy();
  const { nav_1 } = ContentNav;

  useGSAP(() => {
    const triggers = document.querySelectorAll('.progress-white');
    triggers.forEach((trigger) => {
      gsap.to('.progressCircle', {
        stroke: white_10,
        duration: 1,
        scrollTrigger: {
          trigger: trigger,
          start: 'top bottom-=50px',
          end: 'bottom bottom-=50px',
          toggleActions: 'play reverse play reverse',
          onEnter: () => {
            refWhiteProgress.current = true;
          },
          onEnterBack: () => {
            refWhiteProgress.current = true;
          },
          onLeave: () => {
            refWhiteProgress.current = false;
          },
          onLeaveBack: () => {
            refWhiteProgress.current = false;
          },
        },
      });
    });
  });

  useGSAP(() => {
    const progressCircle = refCircle.current;
    const radius = progressCircle?.r.baseVal.value;
    const circumference = 2 * Math.PI * radius!;

    progressCircle!.style.strokeDasharray = circumference.toString();
    progressCircle!.style.strokeDashoffset = circumference.toString();

    gsap.to('.mainCircle', {
      opacity: 1,
      pointerEvents: 'all',
      scrollTrigger: {
        trigger: 'body',
        start: '30px',
        toggleActions: 'play reverse play reverse',
      },
    });

    gsap.to(progressCircle, {
      strokeDashoffset: 0,

      ease: 'none',
      scrollTrigger: {
        trigger: 'body',
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    });

    document.querySelector('.mainCircle')?.addEventListener('mouseover', () => {
      gsap.to('.progressCircle', {
        stroke: yellow_10,
        duration: 1,
      });
    });

    document
      .querySelector('.mainCircle')
      ?.addEventListener('mouseleave', () => {
        gsap.to('.progressCircle', {
          stroke: refWhiteProgress.current ? white_10 : blue_10,
          duration: 1,
        });
      });
  });

  return (
    <div
      onClick={() => handleClick(nav_1[0].navSection)}
      className='cursor-pointer mainCircle fixed bottom-5 right-5 w-sp-20 h-sp-20 z-[1001] opacity-[0] pointer-events-none'
    >
      <svg className='w-full h-full' viewBox='0 0 100 100'>
        <circle cx='50' cy='50' r='45' fill='transparent' stroke-width='1' />
        <circle
          className=' progressCircle'
          ref={refCircle}
          cx='50'
          cy='50'
          r='45'
          fill='transparent'
          stroke={blue_10}
          stroke-width='10'
          stroke-dasharray='286'
          stroke-dashoffset='286'
        />
      </svg>

      <ProgressArrow className='progressCircle stroke-blue_10 w-sp-40 h-sp-40 absolute -translate-x-[50%] -translate-y-[50%] top-[50%] left-[50%] overflow-visible' />
    </div>
  );
};

export default CircleProgress;
