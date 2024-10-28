import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import styles from './NavBar.module.css';
import Logo from '../../assets/logo.svg?react';
import ScrollSpy from '../../hooks/scrollSpy';

const NavBar = () => {
  const smoothRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    gsap.to('.header', {
      scrollTrigger: {
        trigger: 'body',
        start: '30px',

        onUpdate: (self) => {
          if (self.direction === 1) {
            gsap.to('.header', { y: -200, duration: 1 });
          } else {
            gsap.to('.header', { y: 0, duration: 1 });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const { handleClick, activeSection } = ScrollSpy();

  return (
    <header className='header fixed top-0 z-[999] w-screen'>
      <nav
        className={`${styles.navBar} absolute right-0 flex rounded-b-[3rem] w-max mr-[4rem]`}
      >
        <div className='self-center p-[2rem] pr-0'>
          <Logo className='w-[6rem] h-[6rem]' />
        </div>

        <div>
          <div
            ref={smoothRef}
            className={`${styles.diagonalBg} bg-[#999da171] py-[1rem] m-[2rem] rounded-[3rem] overflow-hidden`}
          >
            <a
              onClick={() => handleClick('section1')}
              className={`${
                activeSection === 'section1'
                  ? 'bg-[#033980de] text-[#edf1f7de] '
                  : ''
              } cursor-pointer text-[1.8rem] text-[#091729] hover:bg-[#033980de] hover:text-[#edf1f7de] transition-all duration-[1s] p-[2rem]`}
            >
              Home
            </a>

            <a
              onClick={() => handleClick('section2')}
              className={`${
                activeSection === 'section2' ? 'bg-[#033980de] text-[#edf1f7de]' : ''
              } cursor-pointer text-[1.8rem] text-[#091729] hover:bg-[#033980de] hover:text-[#edf1f7de] transition-all duration-[1s] p-[2rem]`}
            >
              Projects
            </a>

            <a className='text-[1.8rem] text-[#091729] hover:bg-[#033980de] hover:text-[#edf1f7de] transition-all duration-[1s] p-[2rem]'>
              Skills
            </a>
            <a
              href=''
              className='text-[1.8rem] text-[#091729] hover:bg-[#033980de] hover:text-[#edf1f7de] transition-all duration-[1s] p-[2rem]'
            >
              Contact
            </a>
          </div>
          <div
            className={`${styles.diagonalBg} bg-[#c59c06e3] m-[2rem] rounded-[3rem] overflow-hidden`}
          >
            <a
              href=''
              className='text-[1.8rem] text-[#091729] hover:bg-[#033980de] hover:text-[#edf1f7de] transition-all duration-[1s] text-center block p-[1rem]'
            >
              Want a more dimensional project?
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
