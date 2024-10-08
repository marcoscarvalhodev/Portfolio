import React, { createContext } from 'react';
import { BaseballContextInterface } from '../interfaces/ContextInterfaces';

export const CreateBaseballContext = createContext<BaseballContextInterface | null>(
  null
);

export const BaseballContextProvider = ({
  children,
}: {
  children: React.JSX.Element;
}) => {
  const [projectsInView, setProjectsInView] = React.useState(false);

  return (
    <CreateBaseballContext.Provider
      value={{ projectsInView, setProjectsInView }}
    >
      {children}
    </CreateBaseballContext.Provider>
  );
};
