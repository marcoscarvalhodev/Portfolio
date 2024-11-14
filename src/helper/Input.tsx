import React from 'react';
import { IconType } from 'react-icons';
import { ChangeEventHandler } from 'react';

interface InputProps {
  onChange: ChangeEventHandler<HTMLInputElement>;
  name: string;
  placeholder: string;
  value?: string;
  onBlur?: React.FocusEventHandler<HTMLInputElement>;
  error?: string | null;
}

const Input = ({ onChange, name, placeholder, value, onBlur, error }: InputProps) => {
  return (
    <li className='w-full'>
      <label htmlFor={name} className='flex items-center gap-[1rem]' />

      <input
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        autoComplete='on'
        id={name}
        name={name}
        className='placeholder-blue_10 text-blue_10 text-f-40 border-solid border-[2px] border-blue_10 outline-none rounded-[3rem] px-[2rem] w-full bg-white_10'
      />
      <p className='text-f-40 text-[#e02727] mt-[1rem]'>{error}</p>
    </li>
  );
};

export default Input;
