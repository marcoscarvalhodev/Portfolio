import React, { Children, useRef } from 'react';
import { ContentSkills } from '../../Contents';
import CactusSVG from '../../assets/skills/cactus.svg?react';
import { initSkills, reducerSkills } from '../../helper/SkillsReducer';
import { SkillsTypes } from '../../helper/SkillsReducer';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);
import SkillsAnimations from './SkillsAnimations';
import ScreenSizes from '../../hooks/screenSizes';
const Skills = () => {
  const { metaphorTextFromRight, initialTextFromRight, allSkillsFromRight } =
    SkillsAnimations();

  const { largeScreen } = ScreenSizes();

  const cactusRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLUListElement | null>(null);
  const allSkillsRef = React.useRef<HTMLLIElement | null>(null);

  const blinkTextRef = React.useRef<null | HTMLParagraphElement>(null);
  const dotRef = useRef<null | HTMLSpanElement>(null);

  const [allActive, setAllActive] = React.useState(false);

  const [stateCactus, dispatchCactus] = React.useReducer(
    reducerSkills,
    initSkills
  );

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const handleMouseMove = (event: MouseEvent) => {
        gsap.to(dotRef.current, {
          x: event.clientX - 5,
          y: event.clientY - 5,
          duration: 0.2,
          ease: 'power2.out',
          opacity: 1,
        });
      };

      function activateDot() {
        document.addEventListener('mousemove', handleMouseMove);
        document.body.style.cursor = 'none';
      }

      function disableDot() {
        // Remove mousemove listener on leave
        document.removeEventListener('mousemove', handleMouseMove);
        gsap.to(dotRef.current, {
          duration: 0.2,
          ease: 'power2.out',
          opacity: 0,
        });
        document.body.style.cursor = 'default';
      }

      cactusRef.current?.addEventListener('mouseenter', activateDot);
      cactusRef.current?.addEventListener('mouseleave', disableDot);

      // Cleanup on unmount
      return () => {
        cactusRef.current?.removeEventListener('mouseenter', activateDot);
        cactusRef.current?.removeEventListener('mouseleave', disableDot);
        document.removeEventListener('mousemove', handleMouseMove);
        ctx.revert();
      };
    });
  }, []);

  useGSAP(() => {
    const textFromRight = [
      {
        activeText: '#cactus-text',
        activeItem: stateCactus.cactusState,
      },
      {
        activeText: '#spikes-text',
        activeItem: stateCactus.spikeState,
      },
      {
        activeText: '#soil-text',
        activeItem: stateCactus.soilState,
      },
    ];

    textFromRight.forEach(({ activeItem, activeText }) => {
      metaphorTextFromRight({ activeItem, activeText });
    });

    allSkillsFromRight({ allActive, allSkillsRef: allSkillsRef.current });
    initialTextFromRight({ allActive, ContentSkills, stateCactus });
  }, [stateCactus, allActive]);

  useGSAP(() => {
    gsap.to(blinkTextRef.current, {
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      opacity: 0.5,
      ease: 'none',
    });
  });

  React.useEffect(() => {
    if (largeScreen) {
      setAllActive(true);
    }
  }, [largeScreen]);

  React.useEffect(() => {
    const activeEl = cactusRef.current;

    const handleMouseOver = (event: MouseEvent) => {
      if (event.target instanceof SVGPathElement) {
        if (['cactus-back'].includes(event.target.id)) {
          dispatchCactus({ type: SkillsTypes.cactus_type, payload: true });
          dispatchCactus({ type: SkillsTypes.spike_type, payload: false });
          dispatchCactus({ type: SkillsTypes.soil_type, payload: false });
        } else if (['soil'].includes(event.target.id)) {
          dispatchCactus({ type: SkillsTypes.cactus_type, payload: false });
          dispatchCactus({ type: SkillsTypes.spike_type, payload: false });
          dispatchCactus({ type: SkillsTypes.soil_type, payload: true });
        } else if (['spike'].includes(event.target.id)) {
          dispatchCactus({ type: SkillsTypes.cactus_type, payload: false });
          dispatchCactus({ type: SkillsTypes.spike_type, payload: true });
          dispatchCactus({ type: SkillsTypes.soil_type, payload: false });
        } else {
          dispatchCactus({ type: SkillsTypes.cactus_type, payload: false });
          dispatchCactus({ type: SkillsTypes.spike_type, payload: false });
          dispatchCactus({ type: SkillsTypes.soil_type, payload: false });
        }
      }
    };

    if (!allActive) {
      activeEl?.addEventListener('mouseover', handleMouseOver);
    }

    return () => {
      activeEl?.removeEventListener('mouseover', handleMouseOver);
    };
  }, [allActive]);

  return (
    <div className={` relative w-screen z-[998]`}>
      <div className={`w-screen flex justify-start items-start`}>
        <div
          className='sm:hidden lg:flex flex-1 w-[50%] h-[100%] py-sp-20'
          ref={cactusRef}
        >
          <span className='absolute left-0 top-0 bottom-0 right-[50%] z-[-1] bg-white_10'></span>
          <CactusSVG
            className={`w-[100%] h-max ${
              stateCactus.cactusState && 'cactus-active'
            } ${stateCactus.soilState && 'soil-active'} ${
              stateCactus.spikeState && 'spike-active'
            } ${allActive && 'all-skills-active'}`}
          />
        </div>

        <ul
          ref={textRef}
          className='progress-white blue-background lg:w-[50%] sm:w-full absolute right-0 bottom-0 top-0 z-[-1] py-sp-20 bg-blue_10'
        >
          {ContentSkills.contents.map(({ title, content, id, skills }) => {
            return (
              <li
                id={id}
                key={id}
                className='hidden flex-col gap-sp-50 px-sp-20 absolute translate-x-[100%]'
              >
                <h1 className='text-white_10 subtitle'>{title}</h1>
                <p className='text-white_10 text-f-40'>{content}</p>

                <ul className='flex flex-wrap gap-sp-50'>
                  {skills.map((item, index) => {
                    return React.cloneElement(item, {
                      key: index,
                      className: `fill-white w-sp-40 h-sp-40`,
                    });
                  })}
                </ul>
              </li>
            );
          })}
        </ul>

        <ul
          id='parent-main-text'
          className='sm:hidden lg:block w-[50%] absolute right-0 bottom-0 top-0  z-[0] py-sp-20 '
        >
          <li
            id={ContentSkills.mainText.id}
            className='flex flex-col gap-sp-50 px-sp-20'
          >
            <h1 className='text-white_10 subtitle'>
              {ContentSkills.mainText.title}
            </h1>
            <p className='text-white_10 normalText'>
              {ContentSkills.mainText.content_1}
            </p>
            <p ref={blinkTextRef} className='text-white_10 normalText'>
              {ContentSkills.mainText.content_2}
            </p>
            <button
              onClick={() => setAllActive(true)}
              className='text-white_10 text-f-40 border-[2px] border-soild border-white_10 w-max px-sp-60 py-[0.5rem] rounded-[3rem] transition-all duration-[0.7s] hover:bg-white_10 hover:text-blue_10'
            >
              {ContentSkills.mainText.button}
            </button>
          </li>
        </ul>

        <ul id='parent-all-skills' className=' flex-1 lg:py-sp-20 sm:py-sp-50'>
          <li
            ref={allSkillsRef}
            className='flex flex-col gap-sp-50 lg:px-sp-20 sm:px-sp-50 translate-x-[calc(100%+10rem)]'
          >
            <h1 className='text-white_10 subtitle'>
              {ContentSkills.allSkills.title}
            </h1>
            <p className='text-white_10 normalText'>
              {ContentSkills.allSkills.content_1}
            </p>
            <p className='text-white_10 normalText'>
              {ContentSkills.allSkills.content_2}
            </p>

            <ul className='flex flex-wrap gap-sp-50 '>
              {ContentSkills.allSkills.skills.map((item, index) => {
                return React.cloneElement(item, {
                  key: index,
                  className: `fill-white w-sp-40 h-sp-40`,
                });
              })}
            </ul>

            <button
              onClick={() => setAllActive(false)}
              className='sm:hidden lg:block bg-yellow_10 text-black_10 text-f-40 border-[2px] border-soild border-yellow_10 w-max px-sp-60 py-[0.5rem] rounded-[3rem] transition-all duration-[0.7s] hover:bg-white_10 hover:text-blue_10 hover:border-white_10'
            >
              {ContentSkills.allSkills.button}
            </button>
          </li>
        </ul>

        <span
          ref={dotRef}
          className='fixed top-[0] left-[0] w-sp-80 h-sp-80 bg-blue_10 rounded-[50%] pointer-events-none z-[1000] opacity-0'
        ></span>
      </div>
    </div>
  );
};

export default Skills;
