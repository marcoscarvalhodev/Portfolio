import React from 'react';
export type SectionID = 'section1' | 'section2' | 'section3' | 'section4';
import ScrollTrigger from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function ScrollSpy() {
  const [activeSection, setActiveSection] = React.useState('');

  useGSAP(() => {
    const sections = document.querySelectorAll('.top-sec');

    sections.forEach((section, index) => {
      if (section instanceof HTMLElement) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => {
            setActiveSection(section.id);
          },
          onEnterBack: () => {
            setActiveSection(section.id);
          },
        });
      }
    });
  });

  // Scroll handler for nav clicks
  const handleClick = (id: SectionID) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: `#${id}`,
      onComplete: () => setActiveSection(id),
    });
  };

  return {
    activeSection,
    handleClick,
  };
}

export default ScrollSpy;
