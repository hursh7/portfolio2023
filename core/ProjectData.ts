import Path from '@/core/Path';
import { ICON_ABOUT } from '@/core/Icondata';

const PROJECT_DATA = [
  {
    number: 1,
    title: 'Portfolio 2023',
    description:
      'TypeScript와 Next.js로 개발한 개인 포트폴리오 사이트입니다. 약 2년 간 퍼블리셔 및 프론트엔드 개발자로 근무했던 경력과 개인적으로 성장하고자 공부하고 진행한 프로젝트를 기재했습니다. 외부 링크를 통해 개인 github와 노션 페이지, 그리고 이력서를 확인하실 수 있습니다. 기존에 React로 개발한 프로젝트를 다시 Next.js로 개발하며 동작 원리와 SSR에 대해 학습하였으며, Notion API를 활용하여 Notion을 실시간 DB로 사용해서 데이터를 수신하고 이를 바탕으로 화면을 구현하는 경험을 했습니다.',
    tech_list: [
      { name: 'TypeScript' },
      { name: 'Next.js' },
      { name: 'Styled-components' },
      { name: 'Notion-API' },
    ],
    link: Path.portfolio,
    path: Path.portfolioPage,
  },
  {
    number: 2,
    title: 'cardMaker',
    description:
      '사용자의 정보를 실시간으로 업데이트 할 수 있는 반응형 명함 어플리케이션입니다. React와 React Router로 개발하였습니다. Firebase의 Auth API를 통해 소셜 미디어 로그인 기능을 구현하고, Real Time Database를 이용해 데이터를 실시간으로 연동하였습니다.',
    tech_list: [
      { name: 'React' },
      { name: 'PostCss' },
      { name: 'Firebase' },
      { name: 'Cloudinary' },
    ],
    link: Path.cardMaker,
    path: Path.cardMakerPage,
  },
  {
    number: 3,
    title: 'Yuntube(CloneCoding)',
    description:
      '유튜브 클론코딩입니다. React로 개발 하였고, netlify로 배포 하였습니다. 포스트맨 툴을 사용해 유튜브 APIs 데이터를 받아와서 인기 동영상 목록 보여주기, 검색 기능 등을 구현 하였습니다.',
    tech_list: [
      { name: 'React' },
      { name: 'React-Router-Dom' },
      { name: 'PostCSS' },
    ],
    link: Path.youtube,
    path: Path.youtubePage,
  },
];

export default PROJECT_DATA;
