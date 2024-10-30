import React from 'react';
import Supreme from '../../assets/projects_videos/supreme_bank.mp4';
import { UseVideoProjectsContext } from '../../context/UseContext';
import styles from './Projects.module.css';

interface ProjectsContainer {
  title: string;
  id: string;
  text: string;
  video: string;
  link: string;
}

const ProjectsContainer = ({
  title,
  id,
  text,
  video,
  link,
}: ProjectsContainer) => {
  const refVideo = React.useRef<HTMLVideoElement | null>(null);
  const refBackground = React.useRef<HTMLSpanElement | null>(null);
  const { addProjectsRef } = UseVideoProjectsContext();

  React.useEffect(() => {
    if (refVideo.current) {
      addProjectsRef({
        refVideo: refVideo.current,
        refBackground: refBackground.current,
      });
    }
  }, [addProjectsRef]);

  return (
    <div
      className={`${styles.flexAlternate} mb-[7.2rem] w-[100%] flex relative`}
    >
      <div className={`${styles.videoAlternate} flex-[1]`}>
        <video ref={refVideo} className='' muted loop>
          <source src={Supreme} type='video/mp4' />
        </video>

        <h1
          className={`${styles.numberAlternate} absolute z-50 bottom-0 text-title-font-20`}
        >
          {id}
        </h1>
      </div>

      <div className={`${styles.flexText} flex flex-col flex-[1] relative `}>
        <div className={`${styles.textContent} `}>
          <span
            ref={refBackground}
            className={`${styles.textBackground} textBackground block absolute w-[calc(100%+12.2rem)] h-[100%] z-[-1] `}
          ></span>
          <div className='p-[2rem]'>
            <h1 className='text-title-font-20'>{title}</h1>
            <p className='text-title-font-30'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
