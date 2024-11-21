import React, { createContext } from 'react';
import { MenuMobileInterface } from '../interfaces/ContextInterfaces';

export const CreateMenuMobileContext =
  createContext<MenuMobileInterface | null>(null);

export const MenuMobileProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [menuButtonOn, setMenuButtonOn] = React.useState(false);

  return (
    <CreateMenuMobileContext.Provider value={{ menuButtonOn, setMenuButtonOn }}>
      {children}
    </CreateMenuMobileContext.Provider>
  );
};
