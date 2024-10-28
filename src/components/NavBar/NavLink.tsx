import React from 'react';

interface NavLinkProps {
  id: string;
  activeLink: string;
  onClick?: (id: string) => void;
  children: React.ReactNode;
}

const NavLink = ({ id, activeLink = "section_1", onClick, children }: NavLinkProps) => {
  return (
    <a
      href={`#${id}`}

      className={`menu-item ${
        activeLink === id ? 'bg-[#033980de] text-[#edf1f7de]' : ''
      } text-[1.8rem] text-[#091729] hover:bg-[#033980de] hover:text-[#edf1f7de]  transition-all duration-[1s] p-[2rem]`}
    >
      {children}
    </a>
  );
};

export default NavLink;
