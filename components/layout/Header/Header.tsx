import Icons from '@/components/shared/Icons';
import { ICON_LINK } from '@/core/Icondata';
import { media } from '@/styles/theme';
import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import TriggerBtn from './TriggerBtn';

const Menus = [
  { title: 'About' },
  { title: 'Skills' },
  { title: 'Project' },
  { title: 'Contact' },
];

export default function Header() {
  const [toggleBtn, setToggleBtn] = useState(false);

  const onToggle = () => {
    setToggleBtn(toggleBtn => !toggleBtn);
  };

  const menuRef = useRef<any>();

  const handleClickOutSide = (e: { target: any }) => {
    console.log(menuRef.current.contains(e.target));
    if (toggleBtn && !menuRef.current.contains(e.target)) {
      setToggleBtn(false);
    }
  };

  useEffect(() => {
    if (toggleBtn) document.addEventListener('mousedown', handleClickOutSide);
    return () => {
      document.removeEventListener('mousedown', handleClickOutSide);
    };
  });

  return (
    <GNB>
      <Wrapper ref={menuRef}>
        <Logo>Jun .</Logo>
        <MenuConatainer toggleBtn={toggleBtn}>
          {Menus.map(menu => (
            <li key={menu.title}>{menu.title}</li>
          ))}
          <ExternalLink>
            {ICON_LINK.map(icon => {
              return (
                <Icons
                  key={icon.title}
                  icon={icon.icon_name}
                  title={icon.title}
                  link={icon.link}
                />
              );
            })}
          </ExternalLink>
        </MenuConatainer>
        <TriggerBtn toggleBtn={toggleBtn} onButtonClick={onToggle} />
      </Wrapper>
      <Shadow toggleBtn={toggleBtn} />
    </GNB>
  );
}

const GNB = styled.header`
  position: fixed;
  width: 100%;
  max-width: 1920px;
  top: 0px;
  height: 80px;
  background: rgba(255, 255, 255, 0.7);
  z-index: 10;
`;

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 100px;

  ${media.tablet} {
    padding: 0 30px;
  }
`;

const Logo = styled.div`
  user-select: none;
  font-size: 35px;
  font-weight: 400;
  letter-spacing: -4px;
  color: main;
  color: ${props => props.theme.colors.main};

  &:hover {
    cursor: pointer;
  }
`;

const MenuConatainer = styled.ul<{ toggleBtn: boolean }>`
  display: flex;
  z-index: 10;

  & li {
    padding: 0 25px;
    font-size: 16px;
    font-weight: 500;
    color: ${props => props.theme.colors.black};
    transition: all 0.2s ease-in;

    ${media.tablet} {
      padding: 20px 0;
      font-size: 25px;
    }
  }

  & li:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.main};
  }

  ${media.tablet} {
    position: absolute;
    flex-direction: column;
    width: 100%;
    height: 100vh;
    top: 80px;
    left: ${({ toggleBtn }) => (toggleBtn ? `0px` : `900px`)};
    transition: all 1s;
    margin-left: 100px;
    padding: 50px 0 0 50px;
    background-color: ${props => props.theme.colors.white};
  }
`;

const ExternalLink = styled.div`
  display: none;
  font-size: 32px;
  color: ${props => props.theme.colors.LightGrey};
  margin-top: 20px;
  gap: 20px;

  ${media.tablet} {
    display: flex;
  }
`;

const Shadow = styled.div<{ toggleBtn: boolean }>`
  display: none;
  position: absolute;
  top: 8rem;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1;

  ${media.tablet} {
    display: ${({ toggleBtn }) => (toggleBtn ? `block` : `none`)};
  }
`;
