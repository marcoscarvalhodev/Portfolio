import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { UseVideoProjectsContext } from '../../context/UseContext';
import ProjectsContainer from './ProjectsContainer';
import { ContentProjects } from '../../Contents';
import styles from './Projects.module.css';
import ScreenSizes from '../../hooks/screenSizes';

import { TailwindColors } from '../../helper/TailwindTheme';

const Projects = () => {
  const {
    videoRefs,
    backgroundRefs,
    numberBackgroundRefs,
    mobileBackgroundRefs,
  } = UseVideoProjectsContext();
  const { largeScreen } = ScreenSizes();

  const { blue_10, white_10, black_10 } = TailwindColors;

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
          background: blue_10,
          onStart: () => {
            gsap.to(parentNumber, {
              color: white_10,
              duration: 1,
            });
          },
          paused: true,
        });

        const secondAnimationBg = () => {
          gsap.to(numberBackgroundRefs.current[index], {
            background: 'transparent',
            duration: 0,
          });
        };

        gsap.to(backgroundRefs.current[index], {
          xPercent: indexCheck ? 0 : 0,
          x: indexCheck ? -65 : -72,
          duration: 1,
          scrollTrigger: {
            trigger: largeScreen
              ? mobileBackgroundRefs.current[index]
              : backgroundRefs.current[index],
            start: 'top center',
            end: 'bottom center',
            toggleActions: 'play reverse play reverse',

            onEnter: () => {
              video?.play();
              gsap.to(siblings, {
                color: white_10,
                duration: 2,
              });
            },
            onEnterBack: () => {
              video?.play();
              gsap.to(siblings, {
                color: '#f2f5f7',
                duration: 2,
              });
            },
            onLeave: () => {
              secondAnimation.pause(0);
              secondAnimationBg();
              video?.pause();
              gsap.to(siblings, {
                color: black_10,
                duration: 2,
              });

              gsap.to(parentNumber, {
                color: black_10,
                duration: 2,
              });
            },
            onLeaveBack: () => {
              
              secondAnimation.pause(0);
              secondAnimationBg();
              video?.pause();
              gsap.to(siblings, {
                color: black_10,
                duration: 2,
              });

              gsap.to(parentNumber, {
                color: black_10,
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
  }, [
    videoRefs,
    backgroundRefs,
    numberBackgroundRefs,
    largeScreen,
    mobileBackgroundRefs,
    blue_10,
    black_10,
    white_10
  ]);

  return (
    <div
      className={`${styles.flexWrapper} w-screen lg:px-sp-20 sm:px-sp-50 flex-col`}
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
