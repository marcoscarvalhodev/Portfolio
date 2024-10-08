import React from 'react';

export interface BaseballContextInterface {
  projectsInView: boolean;
  setProjectsInView: React.Dispatch<React.SetStateAction<boolean>>;
  closeCanvas: boolean;
  setCloseCanvas: React.Dispatch<React.SetStateAction<boolean>>;
}
