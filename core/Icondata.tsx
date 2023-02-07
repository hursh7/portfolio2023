import { AiFillGithub } from 'react-icons/ai';
import { RxNotionLogo } from 'react-icons/rx';
import { RiFileUserFill } from 'react-icons/ri';
import { FaLaptopCode, FaReact } from 'react-icons/fa';
import { TbChartArrowsVertical } from 'react-icons/tb';
import { DiHtml5, DiCss3Full, DiGit } from 'react-icons/di';
import { FiFigma } from 'react-icons/fi';
import { TfiLink } from 'react-icons/tfi';
import { FaArrowAltCircleUp } from 'react-icons/fa';
import { VscGithubAlt, VscLink } from 'react-icons/vsc';
import {
  SiJavascript,
  SiTypescript,
  SiNextdotjs,
  SiPostman,
  SiFirebase,
} from 'react-icons/si';

import Path from './Path';

export const TOP_BUTTON = {
  icon_name: <FaArrowAltCircleUp />,
};

export const ICON_LINK = [
  { title: 'Github', icon_name: <AiFillGithub />, link: Path.github },
  { title: 'Notion', icon_name: <RxNotionLogo />, link: Path.notion },
  { title: 'Resume', icon_name: <RiFileUserFill />, link: Path.pdf },
];

export const ICON_TECH = [
  { title: 'Html5', icon_name: <DiHtml5 />, color: '#f16529' },
  { title: 'Css3', icon_name: <DiCss3Full />, color: '#2196f3' },
  { title: 'JavaScript', icon_name: <SiJavascript />, color: '#FFDF00' },
  { title: 'TypeScript', icon_name: <SiTypescript />, color: '#3178C6' },
  { title: 'React', icon_name: <FaReact />, color: '#61DAFB' },
  { title: 'Next.js', icon_name: <SiNextdotjs />, color: '#444444' },
  { title: 'Postman', icon_name: <SiPostman />, color: '#FF6C37' },
  { title: 'Firebase', icon_name: <SiFirebase />, color: '#FFCA28' },
  { title: 'Git & Github', icon_name: <DiGit />, color: '#f16529' },
  { title: 'Figma', icon_name: <FiFigma />, color: '#F24E1E' },
];

export const ICON_ABOUT = {
  about: {
    career: <TbChartArrowsVertical />,
    experience: <FaLaptopCode />,
  },
};

export const ICON_PJOJECT = {
  project: {
    github: <VscGithubAlt />,
    path: <TfiLink />,
  },
};
