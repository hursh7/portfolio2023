import { ICON_TECH } from '@/core/Icondata';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import TechItem from './TechItem';

interface Props {
  useScrollFadeIn: (
    direction: string,
    duration: number,
    delay: number
  ) => object;
}

// eslint-disable-next-line react/display-name
const Tech = forwardRef(({ useScrollFadeIn }: Props, ref: any) => {
  const animatedItem = {
    0: useScrollFadeIn('up', 1, 0.1),
    1: useScrollFadeIn('up', 1, 0.2),
    2: useScrollFadeIn('up', 1, 0.3),
    3: useScrollFadeIn('up', 1, 0.4),
    4: useScrollFadeIn('up', 1, 0.5),
    5: useScrollFadeIn('down', 1, 0.1),
    6: useScrollFadeIn('down', 1, 0.2),
    7: useScrollFadeIn('down', 1, 0.3),
    8: useScrollFadeIn('down', 1, 0.4),
    9: useScrollFadeIn('down', 1, 0.5),
  };

  return (
    <Container ref={ref}>
      <Index>Skills & Tools</Index>
      <Wrapper>
        {ICON_TECH.map((tech, idx) => (
          <TechItem
            key={tech.title}
            title={tech.title}
            color={tech.color}
            icon_name={tech.icon_name}
            idx={idx}
            animatedItem={animatedItem}
          />
        ))}
      </Wrapper>
    </Container>
  );
});

const Container = styled.section`
  padding: ${Size.gap.MainSection} 100px;

  ${media.tablet} {
    padding: calc(${Size.gap.MainSection} / 2) 100px;
  }

  ${media.mobile} {
    padding: calc(${Size.gap.MainSection} / 2) 0px;
  }
`;

const Index = styled.h2`
  ${Size.font.title};
  font-weight: 500;
  color: ${props => props.theme.colors.MainGrey};
  text-align: center;
  margin-bottom: 50px;

  ${media.mobile} {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const Item = styled.div<{ color: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 20px 20px 20px 0;
  width: 200px;
  height: 180px;
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  font-size: 90px;
  color: ${({ color }) => color};

  &:hover .icon {
    font-size: 100px;
    transition: 0.1s all ease-in;
  }
`;

const Name = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-top: 15px;
  color: ${props => props.theme.colors.MainGrey};
`;

export default Tech;
