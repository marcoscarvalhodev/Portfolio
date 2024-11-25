import React, { FormEventHandler } from 'react';
import Input from '../../helper/Input';
import styles from './ContactForm.module.css';
import useForm from '../../hooks/useForm';
import { FetchAxios } from '../../helper/FetchAxios';

import { GoCheckCircle } from 'react-icons/go';

const ContactForm = () => {
  const email = useForm({ type: 'email' });
  const name = useForm({ type: 'name' });
  const message = useForm({ type: 'message' });
  const [loading, setLoading] = React.useState(false);
  const [emailSent, setEmailSent] = React.useState(false);
  const [error, setError] = React.useState(false);

  const handleSubmit: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault();

    email.validate();
    name.validate();
    message.validate();

    if (email.validate() && name.validate() && message.validate()) {
      FetchAxios({
        name: name.value,
        body: message.value,
        receptor: email.value,
        setLoading,
        setEmailSent,
        setError,
      });
    }
  };

  return (
    <div className='relative'>
      <div
        className={`transition-all duration-[0.7s] ${
          emailSent
            ? 'opacity-100 pointer-events-auto'
            : 'opacity-0 pointer-events-none'
        } flex items-center gap-sp-70 justify-center h-[100%] flex-col absolute`}
      >
        <div className='flex items-center gap-sp-70 justify-center'>
          <p className='text-[#1fa51f] text-f-30'>Email sent successfully</p>
          <GoCheckCircle className='w-[4rem] h-[4rem] fill-[#1fa51f]' />
        </div>
        <p className='text-blue_10 normalText'>
          You will be contacted as soon as possible.
        </p>
      </div>

      <form
        className={`transition-all duration-[1s] ${
          emailSent
            ? 'opacity-0 pointer-events-none'
            : 'opacity-100 pointer-events-auto '
        }`}
        action=''
        onSubmit={handleSubmit}
      >
        <ul className='flex flex-col gap-[3rem] w-[80%]'>
          <Input placeholder='Name' name='Name' {...name} />
          <Input placeholder='Email' name='Email' {...email} />
          <li>
            <textarea
              onBlur={message.onBlur}
              onChange={message.onChange}
              value={message.value}
              placeholder='Message'
              className={`${styles.messageArea} text-blue_10 normalText w-[100%] outline-none border-solid border-[2px] border-blue_10 rounded-[1rem] p-[1rem] overflow-y-auto h-[20rem] resize-none placeholder-blue_10 bg-white_10`}
            />
            <p className='normalText text-red_10 mt-[1rem]'>
              {message.error}
            </p>
          </li>
        </ul>
        {loading ? (
          <button
            disabled
            type='submit'
            className=' opacity-[0.8] normalText px-[2rem] py-[0.5rem] rounded-[4rem] bg-blue_10 text-white_10 transition-all duration-[0.7s] mt-[3rem]'
          >
            Sending...
          </button>
        ) : (
          <div className='flex items-center mt-sp-50 gap-sp-60'>
            <button
              type='submit'
              className='text-f-40 px-[2rem] py-[0.5rem] bg-yellow_10 rounded-[4rem] text-blue_10 hover:bg-blue_10 hover:text-white_10 transition-all duration-[0.7s]'
            >
              Send
            </button>

            {error ? (
              <p className='normalText text-red_10'>
                Email couldn't be sent, please try again.
              </p>
            ) : (
              <></>
            )}
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
