import React from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { UseBaseballContext } from '../../context/UseBaseballContext';
import { backgroundIntensity } from 'three/webgpu';

const Projects = () => {
  const { closeCanvas } = UseBaseballContext();

  useGSAP(() => {
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
  }, [closeCanvas]);

  return (
    <div className='projects absolute w-screen z-50 top-[0] left-[-100%] translate-x-[-50%] bg-[#b7b9bd] hidden justify-between opacity-0 px-[7.2rem]'>
      <div className=' bg-red-500 border-[1px] border-solid border-black w-[300px] h-[250px]'></div>
      <div className='bg-green-500 border-[1px] border-solid border-black  w-[300px] h-[250px]'></div>
      <div className='bg-blue-500 border-[1px] border-solid border-black  w-[300px] h-[250px]'></div>
    </div>
  );
};

export default Projects;
