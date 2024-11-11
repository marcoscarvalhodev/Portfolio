import React from 'react';
import { ContentSkills } from '../../Contents';

const SkillsStrip = () => {
  return (
    <ul className='flex gap-[2rem] bg-[#033980] flex-wrap px-[7.2rem] py-[2rem] '>
      {ContentSkills.skills.map((item) => {
        return (
          <li className=''>
            <p className='cursor-pointer transition-all duration-[0.7s] hover:text-[#033980] hover:bg-[#fcfeff] text-[#fcfeff] text-f-50 border-solid border-[2px] border-[#fcfeff] px-[2rem] py-[1rem] rounded-[3rem] '>{item}</p>
          </li>
        );
      })}
    </ul>
  );
};

export default SkillsStrip;
