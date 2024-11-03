import React, { createContext } from 'react';
import { VideoProjectsContextInterface } from '../interfaces/ContextInterfaces';

export interface addProjectsProps {
  refVideo: HTMLVideoElement | null;
  refBackground: HTMLSpanElement | null;
  refNumberBackground: HTMLSpanElement | null;
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

  const addProjectsRef = ({
    refVideo,
    refBackground,
    refNumberBackground,
  }: addProjectsProps) => {
    if (
      refVideo &&
      refBackground &&
      refNumberBackground &&
      !videoRefs.current.includes(refVideo) &&
      !backgroundRefs.current.includes(refBackground) &&
      !numberBackgroundRefs.current.includes(refNumberBackground)
    ) {
      videoRefs.current.push(refVideo);
      backgroundRefs.current.push(refBackground);
      numberBackgroundRefs.current.push(refNumberBackground);
    }
  };

  return (
    <CreateVideoProjectsContext.Provider
      value={{ videoRefs, addProjectsRef, backgroundRefs, numberBackgroundRefs }}
    >
      {children}
    </CreateVideoProjectsContext.Provider>
  );
};
