import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {
  UseBaseballContext,
  UseVideoProjectsContext,
} from '../../context/UseContext';
import ProjectsContainer from './ProjectsContainer';
import { ContentProjects } from '../../Contents';
import styles from './Projects.module.css';
import { timerLocal } from 'three/webgpu';

interface customTriggerProps {
  video: HTMLVideoElement | null;
  index: number;
  indexCheck: boolean;
  siblings: Element[];
  parentNumber: HTMLElement | null;
}

const Projects = () => {
  const { closeCanvas } = UseBaseballContext();
  const { videoRefs, backgroundRefs, numberBackgroundRefs } =
    UseVideoProjectsContext();

  const completedAnimation = React.useRef({ element1: false });

  /*useGSAP(() => {
    if (closeCanvas) {
      gsap.to('.projects', {
        left: '50%',
        ease: 'elastic',
        duration: 1,
        opacity: 1,
        display: 'flex',
        background: 'transparent',
      });
    }
  }, [closeCanvas]);*/

  React.useEffect(() => {
    function Enter({
      video,
      index,
      indexCheck,
      siblings,
      parentNumber,
    }: customTriggerProps) {
      video?.play();
      const tl = gsap.timeline();

      tl.to(
        backgroundRefs.current[index],
        {
          xPercent: indexCheck ? 0 : 0,
          x: indexCheck ? -65 : -72,
          duration: 1,

          onUpdate: (self) => {},
          onStart: () => {
            gsap.to(siblings, {
              color: '#fcfeff',
            });
          },
        },
        0
      ).to(numberBackgroundRefs.current[index], {
        right: '0%',
        left: '0%',
        duration: 1,
        onStart: () => {
          gsap.to(parentNumber, {
            color: '#fcfeff',
            duration: 1,
          });
        },
      });
    }

    function Leave({
      video,
      index,
      indexCheck,
      parentNumber,
      siblings,
    }: customTriggerProps) {
      video?.pause();
      const tl = gsap.timeline();

      gsap.to(numberBackgroundRefs.current[index], {
        right: indexCheck ? '0%' : '100%',
        left: indexCheck ? '100%' : '0%',
        duration: 1,
        onStart: () => {
          gsap.to(parentNumber, {
            color: '#0a1524',
          });
        },

        onComplete: () => {
          gsap.to(backgroundRefs.current[index], {
            xPercent: indexCheck ? 100 : -100,
            x: indexCheck ? 0 : -72,
            duration: 1,
            onStart: () => {
              gsap.to(siblings, {
                color: '#0a1524',
                duration: 1,
              });
            },
          });
        },
      });
    }

    const ctx = gsap.context(() => {
      videoRefs.current.forEach((video, index) => {
        const indexCheck = index % 2 === 0;

        const parentNumber = numberBackgroundRefs.current[index]!.parentElement;

        const siblings = Array.from(
          backgroundRefs.current[index]!.parentNode!.children
        ).filter((sibling) => sibling !== backgroundRefs.current[index]);

        return ScrollTrigger.create({
          trigger: video,
          start: 'top center',
          end: 'bottom center',
          markers: true,

          onEnter: () => {
            Enter({ video, index, indexCheck, siblings, parentNumber });
          },
          onEnterBack: () => {
            Enter({ video, index, indexCheck, siblings, parentNumber });
          },
          onLeave: () => {
            Leave({ video, index, indexCheck, siblings, parentNumber });
          },
          onLeaveBack: () => {
            Leave({ video, index, indexCheck, siblings, parentNumber });
          },
        });
      });
    });

    return () => ctx.revert();
  }, [videoRefs, backgroundRefs, numberBackgroundRefs]);

  return (
    <div
      className={`${styles.flexWrapper} w-screen z-50 relative px-[7.2rem] flex-col mt-[7.2rem]`}
    >
      <h1 className='text-[#0a1524] sm:text-title-font-30 md:text-title-font-20 lg:text-title-font-10 pb-[4rem]'>
        Works
      </h1>

      <div className='flex flex-col'>
        {ContentProjects.map((item, index) => {
          return <ProjectsContainer {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
