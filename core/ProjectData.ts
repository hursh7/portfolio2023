import Path from '@/core/Path';
import { ICON_ABOUT } from '@/core/Icondata';

const PROJECT_DATA = [
  {
    image: 'test',
    number: 1,
    title: 'cardMaker',
    description:
      '사용자의 정보를 실시간으로 업데이트 할 수 있는 반응형 명함 어플리케이션입니다. React와 React Router로 개발하였습니다. Firebase의 Auth API를 통해 소셜 미디어 로그인 기능을 구현하고, Real Time Database를 이용해 데이터를 실시간으로 연동하였습니다.',
    tech_list: [
      '#React',
      '#React-Router-Dom',
      '#PostCSS',
      '#Firebase',
      '#Cloudinary',
    ],
    link: Path.cardMaker,
    page: Path.cardMakerPage,
  },
  {
    image: 'test',
    number: 3,
    title: 'Portfolio',
    description:
      'React로 개발한 개인 포트폴리오 사이트입니다. 정보를 최대한 간결하게 전달하고자, 원 페이지로 제작하였습니다. 2년간 퍼블리셔로 근무했던 경력과 개발자로 성장하고자 공부하고 진행한 프로젝트를 기재했습니다. 외부 링크를 통해 개인 github와 노션 페이지, 그리고 이력서를 확인하실 수 있습니다.',
    tech_list: ['#TypeScript', '#React', '#Next.js', '#Styled-components'],
    link: Path.cardMaker,
    page: Path.cardMakerPage,
  },
];

export default PROJECT_DATA;
