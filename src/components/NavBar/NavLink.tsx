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
        activeLink === id ? 'bg-blue_10 text-[#edf1f7de]' : ''
      } text-[1.8rem] text-black_10 hover:bg-blue_10 hover:text-[#edf1f7de]  transition-all duration-[1s] p-[2rem]`}
    >
      {children}
    </a>
  );
};

export default NavLink;
