import { ICON_TECH } from '@/core/Icondata';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';

export default function Tech() {
  return (
    <Container>
      <Index>Skills & Tools</Index>
      <Wrapper>
        {ICON_TECH.map(tech => (
          <Item key={tech.title} color={tech.color}>
            <div>{tech.icon_name}</div>
            <Name>{tech.title}</Name>
          </Item>
        ))}
      </Wrapper>
    </Container>
  );
}

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
`;

const Name = styled.p`
  font-size: 13px;
  font-weight: 500;
  margin-top: 15px;
  color: ${props => props.theme.colors.MainGrey};
`;
