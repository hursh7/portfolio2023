import React from 'react';
import styled from 'styled-components';
import Path from '@/core/Path';
import { MainBg } from 'assets/images';
import Size from '@/core/Size';
import { media } from '@/styles/theme';

interface Props {
  useScrollFadeIn: (
    direction: string,
    duration: number,
    delay: number
  ) => object;
}

export default function Main({ useScrollFadeIn }: Props) {
  const animatedItem = {
    0: useScrollFadeIn('down', 1, 0),
    1: useScrollFadeIn('down', 1, 0.1),
  };

  const handleClickLink = () => {
    window.open(Path.pdf);
  };

  return (
    <Container>
      <TextBox {...animatedItem[0]}>
        <Title>
          <Name>Hi, i am Junhyung Park</Name>
          <Position>FrontEnd Developer</Position>
        </Title>
        <Introduce>
          안녕하세요. 2년차 퍼블리셔 및 주니어 프론트엔드 개발자 박준형입니다.
          <br />
          웹접근성과 웹표준을 준수하여 퍼블리싱하고, <br />
          JavaScript(ES6+), TypeScript와 React를 통해 개발합니다.
        </Introduce>
        <Button onClick={handleClickLink}>SEE MY RESUME</Button>
      </TextBox>
      <div {...animatedItem[1]}>
        <StyledMainBg />
      </div>
    </Container>
  );
}

const Container = styled.section`
  position: relative;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: ${Size.gap.MainSection} 0;

  ${media.pc} {
    padding: calc(${Size.gap.MainSection} / 2) 0;
    flex-direction: column-reverse;
    text-align: center;
  }

  ${media.mobile} {
    padding: calc(sectionTopBottom / 4) 0;
  }
`;

const Title = styled.div``;

const TextBox = styled.div`
  width: ${Size.content.MainDiv};

  ${media.mobile} {
    width: calc(${Size.content.MainDiv} / 2);
  }
`;

const Name = styled.div`
  ${Size.font.regular}
  color: ${props => props.theme.colors.orange};
  letter-spacing: -1px;

  ${media.mobile} {
    ${Size.font.small}
  }
`;

const Position = styled.h1`
  font-size: 100px;
  font-weight: 400;
  color: ${props => props.theme.colors.MainGrey};
  letter-spacing: -5px;
  line-height: 90px;
  margin: 0 0 30px -10px;

  ${media.mobile} {
    font-size: 30px;
    letter-spacing: -3px;
    line-height: 30px;
    margin-bottom: 10px;
  }
`;

const Introduce = styled.p`
  font-size: 18px;
  line-height: 1.5;
  color: ${props => props.theme.colors.LightGrey};
  margin-bottom: 30px;

  ${media.mobile} {
    ${Size.font.small}
    line-height: 1.5;
  }
`;

const Button = styled.button`
  user-select: none;
  ${Size.font.regular}
  background-color: ${props => props.theme.colors.orange};
  border-radius: 5px;
  padding: 12px 15px;
  color: ${props => props.theme.colors.white};

  &:hover {
    cursor: pointer;
    background-color: #f0805e;
  }

  ${media.mobile} {
    ${Size.font.small}
  }
`;

const StyledMainBg = styled(MainBg)`
  width: ${Size.content.MainDiv};
  height: ${Size.content.MainDiv};

  ${media.mobile} {
    width: calc(${Size.content.MainDiv} / 2);
    height: calc(${Size.content.MainDiv} / 2);
  }
`;
