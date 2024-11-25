import React from 'react';
import { ContentContact } from '../../Contents';
import ContactForm from './ContactForm';


const Contact = () => {
  return (
    <div className='w-screen z-50 relative  flex-col'>
      <ul className='w-full flex sm:flex-col-reverse lg:flex-row'>
        <li className='blue-background bg-blue_10 flex-1 p-sp-20 flex flex-col gap-sp-50'>
          <p className='text-white_10 normalText'>
            Feel free to reach out if you'd like to discuss potential
            partnerships, or how my services could support your team or project
            needs.
          </p>

          <p className='text-white_10 normalText'>My professional profiles:</p>

          <ul className='flex gap-sp-50'>
            {ContentContact.info.links.map(({ icon, link }, index) => {
              return (
                <li key={index}>
                  <a href={link} target='_blank' className='w-max inline-block'>
                    {React.cloneElement(icon, {
                      className:
                        'w-sp-40 h-sp-40 fill-white_10 stroke-white_10 hover:fill-yellow_10 hover:stroke-yellow_10 transition-all duration-[0.7s]',
                    })}
                  </a>
                </li>
              );
            })}
          </ul>
        </li>

        <li className='bg-white_10 flex-1 p-sp-20'>
          <ContactForm />
        </li>
      </ul>
    </div>
  );
};

export default Contact;
