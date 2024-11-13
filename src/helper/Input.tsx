import React from 'react';
import { IconType } from 'react-icons';

interface InputProps {
  onChange: () => void;
  name: string;
  icon: React.JSX.Element;
  placeholder: string;
}

const Input = ({ onChange, name, icon, placeholder }: InputProps) => {
  return (
    <li className='w-full'>
      <label htmlFor={name} className='flex items-center gap-[1rem]' />
        
       
      <input
      placeholder={placeholder}
        id={name}
        name={name}
        className='placeholder-blue_10 text-blue_10 text-f-40 border-solid border-[2px] border-blue_10 outline-none rounded-[3rem] px-[2rem] w-full'
      />
    </li>
  );
};

export default Input;
