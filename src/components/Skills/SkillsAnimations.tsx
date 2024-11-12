import React from 'react';
import gsap from 'gsap';
import { initSkillsInt } from '../../helper/SkillsReducer';
import { ContentSkills } from '../../Contents';

interface mainTextProps {
  stateCactus: initSkillsInt;
  allActive: boolean;
  ContentSkills: typeof ContentSkills;
}

const SkillsAnimations = () => {
  function metaphorTextFromRight({
    activeItem,
    activeText,
  }: {
    activeItem: boolean;
    activeText: string;
  }) {
    const tl = gsap.timeline();

    if (activeItem) {
      tl.to(activeText, {
        xPercent: -100,
        duration: 1,
        display: 'flex',
      });
    } else {
      tl.to(activeText, {
        xPercent: 100,
        duration: 1,
        display: 'none',
      });
    }
  }

  function initialTextFromRight({
    stateCactus,
    allActive,
    ContentSkills,
  }: mainTextProps) {
    if (
      stateCactus.cactusState ||
      stateCactus.soilState ||
      stateCactus.spikeState ||
      allActive
    ) {
      gsap.to(`#${ContentSkills.mainText.id}`, {
        xPercent: 100,
        x: 100,
        duration: 1,
        display: 'none',
      });
    } else {
      gsap.to(`#${ContentSkills.mainText.id}`, {
        xPercent: 0,
        duration: 1,
        x: 0,
        display: 'flex',
      });
    }
  }

  function allSkillsFromRight({
    allActive,
    allSkillsRef,
  }: {
    allActive: boolean;
    allSkillsRef: HTMLLIElement | null;
  }) {
    if (allActive) {
      gsap.to(allSkillsRef, {
        xPercent: 0,
        duration: 1,
        x: 0,
        display: 'flex',
      });
    } else {
      gsap.to(allSkillsRef, {
        xPercent: 100,
        x: 100,
        duration: 1,
        
      });
    }
  }

  return {
    metaphorTextFromRight,
    initialTextFromRight,
    allSkillsFromRight,
  };
};

export default SkillsAnimations;
