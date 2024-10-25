import React from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const NavBar = () => {
  React.useEffect(() => {
    gsap.to('.header', {
      scrollTrigger: {
        trigger: 'body',
        start: '100px',

        onUpdate: (self) => {
          if (self.direction === 1) {
            console.log('Scrolling down');
            gsap.to('.header', { y: -150, duration: 1 });
          } else {
            console.log('Scrolling up');
            gsap.to('.header', { y: 0, duration: 1 });
          }
        },
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <header className='header fixed top-0 z-[999] left-[50%] -translate-x-[50%]'>
      <nav className='flex gap-[2rem]'>
        <a
          href=''
          className='text-[3.2rem] text-[#072a27] hover:text-[#24B3A8] transition-all duration-[0.5s]'
        >
          Home
        </a>
        <a
          href='#projects'
          className='text-[3.2rem] text-[#072a27] hover:text-[#24B3A8] transition-all duration-[0.5s]'
        >
          Projects
        </a>
        <a
          href=''
          className='text-[3.2rem] text-[#072a27] hover:text-[#24B3A8] transition-all duration-[0.5s]'
        >
          Technologies
        </a>
        <a
          href=''
          className='text-[3.2rem] text-[#072a27] hover:text-[#24B3A8] transition-all duration-[0.5s]'
        >
          Contact
        </a>
      </nav>
    </header>
  );
};

export default NavBar;
