import React, { createContext } from 'react';
import { VideoProjectsContextInterface } from '../interfaces/ContextInterfaces';

export interface addProjectsProps {
  refVideo: HTMLVideoElement | null;
  refBackground: HTMLSpanElement | null;
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

  const addProjectsRef = ({ refVideo, refBackground }: addProjectsProps) => {
    if (
      refVideo &&
      refBackground &&
      !videoRefs.current.includes(refVideo) &&
      !backgroundRefs.current.includes(refBackground)
    ) {
      videoRefs.current.push(refVideo);
      backgroundRefs.current.push(refBackground);
    }
  };

  return (
    <CreateVideoProjectsContext.Provider value={{ videoRefs, addProjectsRef, backgroundRefs }}>
      {children}
    </CreateVideoProjectsContext.Provider>
  );
};
