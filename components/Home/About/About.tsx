import Size from '@/core/Size';
import { media } from '@/styles/theme';
import React, { forwardRef } from 'react';
import styled from 'styled-components';
import { AboutBg } from 'assets/images';
import ABOUT_DATA from '@/core/AboutData';
import DetailList from './DetailList';

interface Props {
  useScrollFadeIn: (
    direction: string,
    duration: number,
    delay: number
  ) => object;
}

// eslint-disable-next-line react/display-name
const About = forwardRef(({ useScrollFadeIn }: Props, ref: any) => {
  const animatedItem = {
    0: useScrollFadeIn('right', 1, 0),
    1: useScrollFadeIn('left', 1, 0.1),
  };

  return (
    <Container ref={ref}>
      <Index>About Me</Index>
      <Wrapper>
        <Profile {...animatedItem[0]}>
          <StyledAboutBg />
        </Profile>
        <History {...animatedItem[1]}>
          {ABOUT_DATA.map(about => {
            return (
              <Content key={about.label}>
                <Title>
                  {about.icon}
                  <span>{about.label}</span>
                </Title>
                <DetailWrapper>
                  {about.data.map(data => (
                    <DetailList
                      key={data.title}
                      title={data.title}
                      desc={data.desc}
                      date={data.date}
                    />
                  ))}
                </DetailWrapper>
              </Content>
            );
          })}
        </History>
      </Wrapper>
    </Container>
  );
});

const Container = styled.section`
  padding: ${Size.gap.MainSection} 0;

  ${media.tablet} {
    padding: calc(${Size.gap.MainSection} / 2) 0;
  }

  ${media.mobile} {
    padding: calc(${Size.gap.MainSection} / 2) 50px;
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
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1 1 40%;

  ${media.pc} {
    margin-bottom: 50px;
  }
`;

const History = styled.div`
  /* padding: 0 150px; */
  display: flex;
  flex: 1 1 60%;
  flex-wrap: wrap;
  justify-content: space-evenly;

  ${media.mobile} {
    flex: 1 1 100%;
    gap: 40px;
  }
`;

const Content = styled.div`
  /* margin-bottom: 50px; */
`;

const Title = styled.h3`
  position: relative;
  display: flex;
  align-items: center;
  font-size: 33px;
  font-weight: 400;
  margin-bottom: 40px;
  color: ${props => props.theme.colors.MainGrey};

  & span {
    font-size: 28px;
    margin-left: 15px;

    ${media.mobile} {
      font-size: 20px;
      margin-left: 5px;
    }
  }

  ${media.mobile} {
    font-size: 25px;
    margin-bottom: 20px;
  }
`;

const DetailWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

const StyledAboutBg = styled(AboutBg)`
  width: 450px;
  height: 450px;

  ${media.mobile} {
    width: calc(450px / 1.5);
    height: calc(450px / 1.5);
  }
`;

export default About;
