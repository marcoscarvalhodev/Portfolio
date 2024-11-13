import React from 'react';
import Input from '../../helper/Input';
import { LuUser2 } from 'react-icons/lu';
import { LuMail } from 'react-icons/lu';
import styles from './ContactForm.module.css';

const ContactForm = () => {
  return (
    <form action=''>
      <ul className='flex flex-col gap-[3rem] w-[80%]'>
        <Input
          placeholder='Name'
          name='Name'
          icon={<LuUser2 />}
          onChange={() => {}}
        />
        <Input
          placeholder='Email'
          name='Email'
          icon={<LuMail />}
          onChange={() => {}}
        />
        <li>
          <textarea
            placeholder='Message'
            className={`${styles.messageArea} text-blue_10 text-f-40 w-[100%] outline-none border-solid border-[2px] border-blue_10 rounded-[1rem] p-[1rem] overflow-y-auto h-[20rem] resize-none placeholder-blue_10`}
          />
        </li>
      </ul>

      <button className='text-f-40 px-[2rem] py-[0.5rem] bg-yellow_10 rounded-[4rem] text-blue_10 hover:bg-blue_10 hover:text-white_10 transition-all duration-[0.7s] mt-[3rem]'>Send</button>
    </form>
  );
};

export default ContactForm;
