import React, { FormEventHandler } from 'react';
import Input from '../../helper/Input';
import styles from './ContactForm.module.css';
import useForm from '../../hooks/useForm';

const ContactForm = () => {
  const email = useForm({ type: 'email' });
  const name = useForm({ type: 'name' });
  const message = useForm({ type: 'message' });

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    email.validate();
    name.validate();
    message.validate();
  };

  return (
    <form action='' onSubmit={handleSubmit}>
      <ul className='flex flex-col gap-[3rem] w-[80%]'>
        <Input placeholder='Name' name='Name' {...name} />
        <Input placeholder='Email' name='Email' {...email} />
        <li>
          <textarea
            {...message}
            placeholder='Message'
            className={`${styles.messageArea} text-blue_10 text-f-40 w-[100%] outline-none border-solid border-[2px] border-blue_10 rounded-[1rem] p-[1rem] overflow-y-auto h-[20rem] resize-none placeholder-blue_10 bg-white_10`}
          />
          <p className='text-f-40 text-[#e02727] mt-[1rem]'>{message.error}</p>
        </li>
      </ul>

      <button
        type='submit'
        className='text-f-40 px-[2rem] py-[0.5rem] bg-yellow_10 rounded-[4rem] text-blue_10 hover:bg-blue_10 hover:text-white_10 transition-all duration-[0.7s] mt-[3rem]'
      >
        Send
      </button>
    </form>
  );
};

export default ContactForm;
