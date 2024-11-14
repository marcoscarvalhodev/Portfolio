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
import { cubeTexture, timerLocal } from 'three/webgpu';

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
    const ctx = gsap.context(() => {
      videoRefs.current.forEach((video, index) => {
        const indexCheck = index % 2 === 0;

        const parentNumber = numberBackgroundRefs.current[index]!.parentElement;

        const siblings = Array.from(
          backgroundRefs.current[index]!.parentNode!.children
        ).filter((sibling) => sibling !== backgroundRefs.current[index]);

        const secondAnimation = gsap.to(numberBackgroundRefs.current[index], {
          right: '0%',
          left: '0%',
          duration: 1,
          onStart: () => {
            gsap.to(parentNumber, {
              color: '#fcfeff',
              duration: 1,
            });
          },
          paused: true,
        });

        gsap.to(backgroundRefs.current[index], {
          xPercent: indexCheck ? 0 : 0,
          x: indexCheck ? -65 : -72,
          duration: 1,
          scrollTrigger: {
            trigger: backgroundRefs.current[index],
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',
            markers: true,

            onEnter: () => {
              video?.play();
              gsap.to(siblings, {
                color: '#fcfeff',
                duration: 2,
              });
            },
            onEnterBack: () => {
              video?.play();
              gsap.to(siblings, {
                color: '#fcfeff',
                duration: 2,
              });
            },
            onLeave: () => {
              secondAnimation.pause(0);
              video?.pause();
              gsap.to(siblings, {
                color: '#0a1524',
                duration: 2,
              });

              gsap.to(parentNumber, {
                color: '#0a1524',
                duration: 2,
              });
            },
            onLeaveBack: () => {
              secondAnimation.pause(0);
              video?.pause();
              gsap.to(siblings, {
                color: '#0a1524',
                duration: 2,
              });

              gsap.to(parentNumber, {
                color: '#0a1524',
                duration: 2,
              });
            },
          },

          onComplete: () => {
            secondAnimation.restart(true);
          },
        });
      });
    });

    return () => ctx.revert();
  }, [videoRefs, backgroundRefs, numberBackgroundRefs]);

  return (
    <div
      className={`${styles.flexWrapper} w-screen px-[7.2rem] flex-col`}
    >
      

      <div className='flex flex-col'>
        {ContentProjects.map((item, index) => {
          return <ProjectsContainer {...item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Projects;
