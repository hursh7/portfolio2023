import { AiFillGithub } from 'react-icons/ai';
import { RxNotionLogo } from 'react-icons/rx';
import { RiFileUserFill } from 'react-icons/ri';
import { FaLaptopCode } from 'react-icons/fa';
import { TbBriefcase, TbChartArrowsVertical } from 'react-icons/tb';

import Path from './Path';

export const ICONSDATA_LIST = [
  { title: 'Github', icon_name: <AiFillGithub />, link: Path.github },
  { title: 'Notion', icon_name: <RxNotionLogo />, link: Path.notion },
  { title: 'Resume', icon_name: <RiFileUserFill />, link: Path.pdf },
];

export const ICON = {
  about: {
    career: <TbChartArrowsVertical />,
    experience: <FaLaptopCode />,
  },
};
