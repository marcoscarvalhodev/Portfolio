import React from 'react';
import { addProjectsProps } from '../context/VideoProjectsContext';

export interface BaseballContextInterface {
  projectsInView: boolean;
  setProjectsInView: React.Dispatch<React.SetStateAction<boolean>>;
  closeCanvas: boolean;
  setCloseCanvas: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface VideoProjectsContextInterface {
  videoRefs: React.MutableRefObject<(HTMLVideoElement | null)[]>;
  backgroundRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  numberBackgroundRefs: React.MutableRefObject<(HTMLSpanElement | null)[]>;
  mobileBackgroundRefs: React.MutableRefObject<(HTMLDivElement | null)[]>;
  addProjectsRef: ({
    refVideo,
    refBackground,
    refNumberBackground,
    refMobileBackground,
  }: addProjectsProps) => void;
}

export interface MenuMobileInterface {
  menuButtonOn: boolean;
  setMenuButtonOn: React.Dispatch<React.SetStateAction<boolean>>;
}
