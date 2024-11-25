import React from 'react';
import styles from './NavBarMobile.module.css';
import MenuMobile from './MenuMobile';
import { ContentNav } from '../../Contents';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollHideElement from '../../hooks/scrollHideElement';
import { UseMenuMobileContext } from '../../context/UseContext';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const NavBarMobile = () => {
  const { menuButtonOn, setMenuButtonOn } = UseMenuMobileContext();
  const [menuButtonWhite, setMenuButtonWhite] = React.useState(false);

  ScrollHideElement({
    element: '.want-project',
    orientation: 'xPercent',
    orientationVal1: -100,
    orientationVal2: 0,
  });

  React.useEffect(() => {
    if (!menuButtonOn) {
      setMenuButtonWhite(false);
    }
  }, [menuButtonOn]);

  React.useEffect(() => {
    const ctx = gsap.context(() => {
      const triggers = document.querySelectorAll('.blue-background');
      triggers.forEach((trigger) => {
        ScrollTrigger.create({
          trigger: trigger,

          start: 'top +=50px',
          end: 'bottom +=50px',
          onEnter: () => {
            setMenuButtonWhite(true);
          },
          onEnterBack: () => {
            setMenuButtonWhite(true);
          },
          onLeave: () => {
            setMenuButtonWhite(false);
          },
          onLeaveBack: () => {
            setMenuButtonWhite(false);
          },
        });
      });
    });

    return () => ctx.revert();
  }, [menuButtonOn]);

  useGSAP(() => {
    const tl = gsap.timeline();
    if (menuButtonOn) {
      tl.to(
        '.want-project',
        {
          xPercent: -100,
        },
        0.7
      );
    } else {
      tl.to('.want-project', {
        xPercent: 0,
      });
    }
  }, [menuButtonOn]);

  return (
    <header className='top-0 fixed flex items-center flex-row-reverse justify-between z-[999] w-screen'>
      <nav
        id='button-menu-1'
        className='flex justify-end px-[2rem] py-[2rem] relative z-[1000]'
      >
        <span
          className={`menu-button ${styles.menuButton} ${
            menuButtonOn ? styles.menuButtonOn : styles.menuButtonOff
          } ${menuButtonWhite ? styles.menuButtonWhite : ''} `}
        >
          <span
            id='button-menu'
            onClick={() => setMenuButtonOn(!menuButtonOn)}
            className='absolute -translate-x-[50%]  left-[50%] -translate-y-[50%] -top-[0.7rem] w-[calc(100%+1.5rem)] h-[4.2rem] cursor-pointer z-[999]'
          ></span>
        </span>
      </nav>

      <MenuMobile />
      <div
        className={`want-project ${styles.diagonalBg} bg-yellow_10 rounded-[3rem] h-max w-max overflow-hidden ml-[-2rem] `}
      >
        <a
          href=''
          className='text-f-50 text-blue_10 hover:bg-blue_10 hover:text-[#edf1f7de] transition-all duration-[1s] text-center block p-[1rem] px-sp-50 xsm:text-f-60'
        >
          {ContentNav.nav_2}
        </a>
      </div>
    </header>
  );
};

export default NavBarMobile;
