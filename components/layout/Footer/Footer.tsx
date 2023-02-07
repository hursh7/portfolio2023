import React, { forwardRef } from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';
import { ICON_LINK } from '@/core/Icondata';
import Icons from '@/components/shared/Icons';
import ContactForm from '@/components/ContactForm/ContactForm';

interface Props {
  test?: any;
}

// eslint-disable-next-line react/display-name
const Footer = forwardRef(({ test }: Props, ref: any) => {
  return (
    <Container ref={ref}>
      <Index>Contact</Index>
      <ContactForm />
      <Text>
        <li>
          본 사이트는 상업적 목적이 아닌 개인 포트폴리오 사이트로
          제작되었습니다.
        </li>
        <li>사용된 일부 이미지 및 폰트 등은 별도의 출처가 있음을 밝힙니다.</li>
      </Text>
      <Wrapper>
        <Copyright>&copy; 2023 Junhyung Park. All rights reserved.</Copyright>
        <Link>
          {ICON_LINK.map(icon => {
            return (
              <Icons
                key={icon.title}
                icon={icon.icon_name}
                title={icon.title}
                link={icon.link}
                isFooter={true}
              />
            );
          })}
        </Link>
      </Wrapper>
    </Container>
  );
});

const Container = styled.footer`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0 20px;
  font-size: 14px;
  font-weight: 300;
  color: #fff;
  background: #222;
`;

const Index = styled.h2`
  ${Size.font.title};
  font-weight: 500;
  color: #fff;
  text-align: center;
  margin-bottom: 50px;

  ${media.mobile} {
    padding: 50px 20px;
  }
`;

const Text = styled.ul`
  font-weight: 300;
  text-align: center;
  line-height: 1.5;
  margin-bottom: 15px;

  ${media.mobile} {
    font-size: 10px;
    margin-bottom: 25px;
  }
`;

const Wrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.096);
  padding-top: 15px;
  width: 80%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;

  ${media.mobile} {
    padding-top: 25px;
    width: 100%;
    flex-direction: column;
  }
`;

const Copyright = styled.p`
  font-size: 12px;
  color: ${props => props.theme.colors.LightGrey};

  ${media.mobile} {
    font-size: 10px;
    margin-bottom: 10px;
  }
`;

const Link = styled.div`
  display: flex;
  font-size: 22px;

  & div {
    color: ${props => props.theme.colors.LightGrey};
    margin-right: 10px;
    transition: all 0.5s;
  }

  & div:hover {
    opacity: 0.5;
  }

  ${media.mobile} {
    font-size: 18px;
  }
`;

export default Footer;
