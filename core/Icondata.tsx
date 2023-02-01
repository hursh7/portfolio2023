import { AiFillGithub } from 'react-icons/ai';
import { RxNotionLogo } from 'react-icons/rx';
import { FaIdBadge } from 'react-icons/fa';
import Path from './Path';

const ICONSDATA_LIST = [
  { title: 'Github', icon_name: <AiFillGithub />, link: Path.github },
  { title: 'Notion', icon_name: <RxNotionLogo />, link: Path.notion },
  { title: 'Resume', icon_name: <FaIdBadge />, link: Path.pdf },
];

export default ICONSDATA_LIST;
