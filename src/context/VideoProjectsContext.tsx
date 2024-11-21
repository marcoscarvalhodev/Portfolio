import React, { createContext } from 'react';
import { VideoProjectsContextInterface } from '../interfaces/ContextInterfaces';

export interface addProjectsProps {
  refVideo: HTMLVideoElement | null;
  refBackground: HTMLSpanElement | null;
  refNumberBackground: HTMLSpanElement | null;
  refMobileBackground: HTMLDivElement | null;
}

export const CreateVideoProjectsContext =
  createContext<VideoProjectsContextInterface | null>(null);

export const VideoProjectsProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const videoRefs = React.useRef<(HTMLVideoElement | null)[]>([]);
  const backgroundRefs = React.useRef<(HTMLSpanElement | null)[]>([]);
  const numberBackgroundRefs = React.useRef<(HTMLSpanElement | null)[]>([]);
  const mobileBackgroundRefs = React.useRef<(HTMLDivElement | null)[]>([]);

  const addProjectsRef = ({
    refVideo,
    refBackground,
    refNumberBackground,
    refMobileBackground,
  }: addProjectsProps) => {
    if (
      refVideo &&
      refBackground &&
      refNumberBackground &&
      refMobileBackground &&
      !videoRefs.current.includes(refVideo) &&
      !backgroundRefs.current.includes(refBackground) &&
      !numberBackgroundRefs.current.includes(refNumberBackground) &&
      !mobileBackgroundRefs.current.includes(refMobileBackground)
    ) {
      videoRefs.current.push(refVideo);
      backgroundRefs.current.push(refBackground);
      numberBackgroundRefs.current.push(refNumberBackground);
      mobileBackgroundRefs.current.push(refMobileBackground);
    }
  };

  return (
    <CreateVideoProjectsContext.Provider
      value={{
        videoRefs,
        addProjectsRef,
        backgroundRefs,
        numberBackgroundRefs,
        mobileBackgroundRefs
      }}
    >
      {children}
    </CreateVideoProjectsContext.Provider>
  );
};
