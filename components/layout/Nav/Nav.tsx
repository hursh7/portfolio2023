import React from 'react';
import Icons from '@/components/shared/Icons';
import { ICON_LINK } from '@/core/Icondata';
import styled from 'styled-components';
import { media } from '@/styles/theme';

export default function Nav() {
  return (
    <NavContainer>
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
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5px;
  font-size: 24px;
  color: ${props => props.theme.colors.MainGrey};
  position: fixed;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 2.5%;
  z-index: 10;

  ${media.tablet} {
    display: none;
  }
`;
