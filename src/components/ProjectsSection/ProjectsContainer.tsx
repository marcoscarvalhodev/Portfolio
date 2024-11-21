import React from 'react';
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
  const refNumberBackground = React.useRef<HTMLSpanElement | null>(null);
  const refMobileBackground = React.useRef<HTMLDivElement | null>(null);

  const { addProjectsRef } = UseVideoProjectsContext();

  React.useEffect(() => {
    if (
      refVideo.current &&
      refBackground.current &&
      refNumberBackground.current &&
      refMobileBackground
    ) {
      addProjectsRef({
        refVideo: refVideo.current,
        refBackground: refBackground.current,
        refNumberBackground: refNumberBackground.current,
        refMobileBackground: refMobileBackground.current
      });
    }
  }, [addProjectsRef]);

  return (
    <div
      ref={refMobileBackground}
      className={`${styles.flexAlternate} flex mb-[7.2rem] w-[100%] sm:flex-col-reverse md:flex relative `}
    >
      <div className={`${styles.videoAlternate} flex-[1] relative h-[100%]`}>
        <video ref={refVideo} className='' muted loop src={video} />

        <h2
          className={`${styles.numberAlternate} text-black_10 absolute z-50 bottom-0 text-f-20 py-[0.5rem] px-[1.5rem] `}
        >
          <span
            ref={refNumberBackground}
            className={`${styles.numberBackground} bg-blue_10 block absolute bottom-0 top-0 left-0 right-0 z-[-1]`}
          ></span>
          {id}
        </h2>

        <a
          href={link}
          target='_blank'
          className=' scale-90 hover:scale-100 text-black_10 hover:text-[#fcfeff] hover:bg-blue_10 transition-all duration-[0.6s] text-f-40 absolute -translate-x-[50%] -translate-y-[50%] left-[50%] top-[50%] bg-[#c59c06] rounded-[50%] py-[4rem] px-[3.2rem] '
        >
          View
        </a>
      </div>

      <div className={`${styles.flexText} flex flex-col flex-[1] relative`}>
        <div className={`${styles.textContent} `}>
          <span
            ref={refBackground}
            className={`${styles.textBackground} textBackground absolute w-[calc(100%+12.2rem)] top-0 left-0 bottom-[0px] z-[-1] `}
          ></span>
          <div className='sm:pb-sp-70 lg:p-sp-60'>
            <h1 className='text-f-20 md:text-f-50 lg:text-f-20'>{title}</h1>
            <p className='text-f-30 md:text-f-50 lg:text-f-40'>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectsContainer;
