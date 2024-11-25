import React from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ContentNav } from '../../Contents';
import ScrollSpy from '../../hooks/scrollSpy';
import { UseMenuMobileContext } from '../../context/UseContext';

const MenuMobile = () => {
  const { menuButtonOn, setMenuButtonOn } = UseMenuMobileContext();

  const tl = gsap.timeline();

  React.useEffect(() => {
    if (menuButtonOn) {
      document.body.addEventListener('click', (e) => {
        if (e.target instanceof HTMLElement) {
          if (
            e.target.id !== 'mobile-menu' &&
            e.target.id !== 'button-menu' &&
            e.target.id !== 'button-menu-1'
          ) {
            setMenuButtonOn(false);
          }
        }
      });
    }
  }, [menuButtonOn, setMenuButtonOn]);

  useGSAP(() => {
    tl.to(
      '.mobile-menu',
      {
        xPercent: menuButtonOn ? -100 : 100,
        duration: 1,
        ease: menuButtonOn ? 'circ' : 'none',
      },
      menuButtonOn ? 0 : 0.4
    );
  }, [menuButtonOn]);

  const { activeSection, handleClick } = ScrollSpy();

  return (
    <>
      <ul
        id='mobile-menu'
        className='mobile-menu bg-blue_10 flex flex-col justify-center h-[100dvh] absolute z-[999] top-0 right-0 xsm:px-sp-50 sm:px-sp-30 translate-x-[100%] overflow-visible items-center'
      >
        {ContentNav.nav_1.map(({ navItem, navSection, id }) => {
          return (
            <li key={id}>
              <a
                onClick={() => {
                  setMenuButtonOn(false);
                  handleClick(navSection);
                }}
                className={`${
                  activeSection === navSection
                    ? 'text-yellow_10'
                    : 'text-white_10'
                } cursor-pointer text-white_10 xsm:text-f-20 sm:text-f-10 hover:text-yellow_10 transition-all duration-[0.7s]`}
              >
                {navItem}
              </a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MenuMobile;
