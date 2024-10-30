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

const Projects = () => {
  const { closeCanvas } = UseBaseballContext();
  const { videoRefs, backgroundRefs } = UseVideoProjectsContext();

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
      videoRefs.current.map((video, index) => {
        const isTextOnRight = index % 2 === 0;

        const siblings = Array.from(
          backgroundRefs.current[index]!.parentNode!.children
        ).filter((sibling) => sibling !== backgroundRefs.current[index]);

        return ScrollTrigger.create({
          trigger: video,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            video?.play();
            const tl = gsap.timeline();
            tl.to(
              backgroundRefs.current[index],
              {
                xPercent: isTextOnRight ? 0 : 0,
                x: isTextOnRight ? -65 : -72,
                duration: 1,
              },
              0
            ).to(
              siblings,
              {
                color: '#fcfeff',
                duration: 1.5,
              },
              0
            );
          },
          onEnterBack: () => {
            video?.play();
            const tl = gsap.timeline();
            tl.to(
              backgroundRefs.current[index],
              {
                xPercent: isTextOnRight ? 0 : 0,
                x: isTextOnRight ? -65 : -72,
                duration: 1,
              },
              0
            ).to(
              siblings,
              {
                color: '#fcfeff',
                duration: 1.5,
              },
              0
            );
          },
          onLeave: () => {
            video?.pause();
            const tl = gsap.timeline();

            tl.to(
              backgroundRefs.current[index],
              {
                xPercent: isTextOnRight ? 100 : -100,
                x: isTextOnRight ? 0 : -72,
                duration: 1,
              },
              0
            ).to(
              siblings,
              {
                color: '#0a1524',
                duration: 1.5,
              },
              0
            );
          },
          onLeaveBack: () => {
            video?.pause();

            const tl = gsap.timeline();

            tl.to(
              backgroundRefs.current[index],
              {
                xPercent: isTextOnRight ? 100 : -100,
                x: isTextOnRight ? 0 : -72,
                duration: 1,
              },
              0
            ).to(
              siblings,
              {
                color: '#0a1524',
                duration: 1.5,
              },
              0
            );
          },
        });
      });
    });

    return () => ctx.revert();
  }, [videoRefs, backgroundRefs]);

  return (
    <div
      className={`${styles.flexWrapper} w-screen z-50 relative px-[7.2rem] flex-col mt-[7.2rem]`}
    >
      <h1 className='text-[#0a1524] sm:text-title-font-30 md:text-title-font-20 lg:text-title-font-10 absolute -top-[20rem] left-0 z-50'>
        Projects
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
