import React from 'react';
import styles from './NavBar.module.css';
import Logo from '../../assets/logo.svg?react';
import ScrollSpy from '../../hooks/scrollSpy';
import { ContentNav } from '../../Contents';
import ScrollHideElement from '../../hooks/scrollHideElement';


const NavBar = () => {
  const smoothRef = React.useRef<HTMLDivElement | null>(null);
  
  ScrollHideElement({
    element: '.header',
    orientation: 'y',
    orientationVal1: -200,
    orientationVal2: 0,
  });

  const { handleClick, activeSection } = ScrollSpy();

  return (
    <header className='header fixed top-0 z-[1000] w-screen'>
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
            {ContentNav.nav_1.map(({ id, navItem, navSection }) => {
              return (
                <a
                  key={id}
                  onClick={() => handleClick(navSection)}
                  className={`${
                    activeSection === navSection
                      ? 'bg-blue_10 text-[#edf1f7de] '
                      : 'text-blue_10'
                  } cursor-pointer  text-[1.8rem]  hover:bg-blue_10 hover:text-[#edf1f7de] transition-all duration-[1s] p-[2rem]`}
                >
                  {navItem}
                </a>
              );
            })}
          </div>
          <div
            className={`${styles.diagonalBg} bg-yellow_10 m-[2rem] rounded-[3rem] overflow-hidden`}
          >
            <a
              href=''
              className='text-[1.8rem] text-blue_10 hover:bg-blue_10 hover:text-[#edf1f7de] transition-all duration-[1s] text-center block p-[1rem]'
            >
              {ContentNav.nav_2}
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
