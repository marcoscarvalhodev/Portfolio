import Video1 from '@/assets/projects_videos/supreme_bank.mp4';
import { SiTypescript } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiCsharp } from 'react-icons/si';
import { FaReact } from 'react-icons/fa';
import { RiNextjsFill } from 'react-icons/ri';
import { SiCss3 } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiStyledcomponents } from 'react-icons/si';
import R3FIcon from './assets/skills/icons/R3F_icon.svg?react';
import GSAPIcon from '@/assets/skills/icons/gsap_icon.svg?react';
import { SiThreedotjs } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiJest } from 'react-icons/si';
import { SiVitest } from 'react-icons/si';
import { SiDotnet } from 'react-icons/si';

import { SiLinkedin } from 'react-icons/si';
import { SiGithub } from 'react-icons/si';
import { GrMailOption } from 'react-icons/gr';

import { SiWhatsapp } from 'react-icons/si';
import { SectionID } from './hooks/scrollSpy';

export const ContentProjects = [
  {
    id: '01',
    title: 'Supreme Bank',
    text: 'Modern banking platform featuring a distinctive design.',
    link: 'https://supreme-bank.vercel.app/',
    video: Video1,
  },
  {
    id: '02',
    title: 'Supreme Bank',
    text: 'Modern banking platform featuring a distinctive design.',
    link: 'https://supreme-bank.vercel.app/',
    video: Video1,
  },
  {
    id: '03',
    title: 'Supreme Bank',
    text: 'Modern banking platform featuring a distinctive design.',
    link: 'https://supreme-bank.vercel.app/',
    video: Video1,
  },
  {
    id: '04',
    title: 'Supreme Bank',
    text: 'Modern banking platform featuring a distinctive design.',
    link: 'https://supreme-bank.vercel.app/',
    video: Video1,
  },
  {
    id: '05',
    title: 'Supreme Bank',
    text: 'Modern banking platform featuring a distinctive design.',
    link: 'https://supreme-bank.vercel.app/',
    video: Video1,
  },
];

export const ContentSkills = {
  contents: [
    {
      id: 'soil-text',
      title: 'Creative developer',
      skills: [<SiJavascript />, <SiCsharp />, <SiCss3 />, <SiHtml5 />],
      content:
        'For almost every source of life, soil is one of the main foundations; without it, nothing else would be the same:',
    },
    {
      id: 'spikes-text',
      title: 'User-centered',
      skills: [<SiTypescript />, <SiJest />, <SiVitest />],
      content:
        'The spikes of a cactus may seem just a little detail of it, but they play important roles, giving it more protection and longevity:',
    },

    {
      id: 'cactus-text',
      title: '3D development',
      skills: [
        <FaReact />,
        <RiNextjsFill />,
        <SiDotnet />,
        <SiTailwindcss />,
        <SiStyledcomponents />,
        <SiThreedotjs />,
        <R3FIcon />,
        <GSAPIcon />,
      ],
      content:
        'What stands out most to you is often the most important part of something, yet it’s usually one piece of a larger whole that relies on its presence:',
    },
  ],

  mainText: {
    id: 'main-text',
    title: 'Frontend engineer',
    content_1:
      "I enjoy coming up with creative solutions that really make a difference for users and clients' needs.",
    button: 'Skills',
    content_2:
      'Move your cursor over the illustration on the left for an interactive experience, or simply click the button below to explore all of my tech skills:',
  },

  allSkills: {
    id: 'main-text',
    title: 'Frontend engineer',
    content_1:
      "I enjoy coming up with creative solutions that really make a difference for users and clients' needs.",
    button: 'Return',
    skills: [
      <SiTypescript />,
      <SiJavascript />,
      <SiCsharp />,
      <SiDotnet />,
      <FaReact />,
      <RiNextjsFill />,
      <SiCss3 />,
      <SiTailwindcss />,
      <SiStyledcomponents />,
      <SiThreedotjs />,
      <R3FIcon />,
      <GSAPIcon />,
      <SiHtml5 />,
      <SiJest />,
      <SiVitest />,
    ],
    content_2: 'These are all my tech skills up to the present moment:',
    content_3:
      'You can click on the button below to return to the previous screen.',
  },
};

export const ContentContact = {
  info: {
    links: [
      {
        icon: <SiLinkedin />,
        link: 'https://www.linkedin.com/in/marcoscarvalhodev/',
      },
      { icon: <SiGithub />, link: 'https://github.com/marcoscarvalhodev' },
      { icon: <GrMailOption />, link: 'mailto:marcoscarvalhodev99@gmail.com' },
      { icon: <SiWhatsapp />, link: 'https://wa.me//5511962260368' },
    ],
  },
};

interface ContentNavProps {
  nav_1: {
    navItem: string;
    navSection: SectionID;
    id: number;
  }[];
  nav_2: string;
}

export const ContentNav: ContentNavProps = {
  nav_1: [
    { navItem: 'Home', navSection: 'section1', id: 1 },
    { navItem: 'Works', navSection: 'section2', id: 2 },
    { navItem: 'Skills', navSection: 'section3', id: 3 },
    { navItem: 'Contact', navSection: 'section4', id: 4 },
  ],
  nav_2: 'Want a more dimensional project?',
};
