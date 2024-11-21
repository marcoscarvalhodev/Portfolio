import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  
  const welcomeRef = React.useRef<HTMLHeadingElement | null>(null);

  return (
    <div
      className={`${styles.welcomeWrapper} absolute top-[50%] -translate-y-[50%] z-50 sm:w-[50rem] md:w-[80rem] sm:p-sp-50 lg:p-sp-20`}
    >
      <h1
        ref={welcomeRef}
        className={`${styles.welcomeText} welcome-text text-f-30 `}
      >
        Welcome to my portfolio. I'm Marcos Carvalho, a software engineer with
        strong focus in development of dynamic 3D experiences.
      </h1>
      <span
        className={`${styles.welcomeBg} welcome-bg absolute w-[calc(100%+9.6rem)] h-[100%] bg-[#fcfeff] top-0 left-[-9.6rem] z-[-1] opacity-[1]`}
      ></span>
    </div>
  );
};

export default Hero;
