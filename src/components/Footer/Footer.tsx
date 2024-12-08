import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className='progress-white bg-blue_10 w-screen relative z-[999] flex items-center py-sp-70 flex-col'>
      <p className='normalText text-white_10'>developed by Marcos Carvalho.</p>
      <p className='normalText text-white_10'>
      © {currentYear} All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
