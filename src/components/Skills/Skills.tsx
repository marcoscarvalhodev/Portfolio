import React, { Children } from 'react';
import { ContentSkills } from '../../Contents';
import SkillsStrip from './SkillsStrip';
import CactusSVG from '../../assets/skills/cactus.svg?react';
import styles from './Skills.module.css';
import { initSkills, reducerSkills } from '../../helper/SkillsReducer';
import { SkillsTypes } from '../../helper/SkillsReducer';

import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const titleRef = React.useRef<null | HTMLHeadingElement>(null);
  const cactusRef = React.useRef<HTMLDivElement | null>(null);
  const textRef = React.useRef<HTMLUListElement | null>(null);

  const blinkTextRef = React.useRef<null | HTMLParagraphElement>(null);

  const [allActive, setAllActive] = React.useState(false);

  const [stateCactus, dispatchCactus] = React.useReducer(
    reducerSkills,
    initSkills
  );

  useGSAP(() => {
    const textArr = textRef.current!.children;
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
      const tl = gsap.timeline();
      if (activeItem) {
        tl.to(activeText, {
          xPercent: -100,
          duration: 1,
          opacity: 1
        });
      } else {
        tl.to(activeText, {
          xPercent: 100,
          duration: 1,
          opacity: 0
        });
      }
    });

    if (
      stateCactus.cactusState ||
      stateCactus.soilState ||
      stateCactus.spikeState
    ) {
      gsap.to(`#${ContentSkills.mainText.id}`, {
        xPercent: 100,
        x: 100,
        duration: 1,
        
      });
    } else {
      gsap.to(`#${ContentSkills.mainText.id}`, {
        xPercent: 0,
        duration: 1,
        x: 0
      });
    }
  }, [stateCactus]);

  useGSAP(() => {
    gsap.to(blinkTextRef.current, {
      duration: 0.8,
      repeat: -1,
      yoyo: true,
      opacity: 0.5,
      ease: 'none',
      
    })
  })

  React.useEffect(() => {
    cactusRef.current?.addEventListener('mouseover', (event) => {
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
    });
  });

  return (
    <section className={`px-[7.2rem] absolute -top-[160px]`}>
      <h1
        ref={titleRef}
        className='text-[#0a1524] sm:text-f-30 md:text-f-20 lg:text-f-10 pb-[4rem]'
      >
        Skills
      </h1>

      <div
        className={`${styles.backgroundAll} z-[999] bg-[transparent] absolute left-[0] w-screen  flex justify-start items-start`}
      >
        <div className=' flex-1 w-[50%] bg-white_10 py-[7.2rem]' ref={cactusRef}>
          <CactusSVG
            className={`w-[100%] h-max ${
              stateCactus.cactusState && 'cactus-active'
            } ${stateCactus.soilState && 'soil-active'} ${
              stateCactus.spikeState && 'spike-active'
            }`}
          />
        </div>

        <ul ref={textRef} className='flex-1 py-[7.2rem]'>
          {ContentSkills.contents.map(({ title, content, id }) => {
            return (
              <li
                id={id}
                key={id}
                className='flex flex-col gap-[3rem] px-[7.2rem] absolute translate-x-[100%]'
              >
                <h1 className='text-white_10 text-f-25'>{title}</h1>
                <p className='text-white_10 text-f-40'>{content}</p>
              </li>
            );
          })}
        </ul>

        <ul className='w-[50%] absolute right-0 bottom-0 top-0 bg-blue_10 z-[-1] py-[7.2rem] '>
          <li
            id={ContentSkills.mainText.id}
            className='flex flex-col gap-[3rem] px-[7.2rem]'
          >
            <h1 className='text-white_10 text-f-25'>{ContentSkills.mainText.title}</h1>
            <p className='text-white_10 text-f-40'>{ContentSkills.mainText.content_1}</p>
            <p ref={blinkTextRef} className='text-white_10 text-f-40'>{ContentSkills.mainText.content_2}</p>
            <button className='text-white_10 text-f-40'>
              {ContentSkills.mainText.button}
            </button>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
