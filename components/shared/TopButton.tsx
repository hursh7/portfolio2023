import { TOP_BUTTON } from '@/core/Icondata';
import { media } from '@/styles/theme';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

export default function TopButton() {
  const [scrollY, setScrollY] = useState(0);
  const [btnStatus, setBtnStatus] = useState(false);

  const handleFollow = () => {
    setScrollY(window.scrollY);
    if (scrollY > 100) {
      setBtnStatus(true);
    } else {
      setBtnStatus(false);
    }
  };

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    setScrollY(0);
    setBtnStatus(false);
  };

  useEffect(() => {
    const watch = () => {
      window.addEventListener('scroll', handleFollow);
    };
    watch();
    return () => {
      window.removeEventListener('scroll', handleFollow);
    };
  });

  return (
    <>
      {btnStatus && <Button onClick={handleTop}>{TOP_BUTTON.icon_name}</Button>}
    </>
  );
}

const Button = styled.button`
  position: fixed;
  /* opacity: 0; */
  bottom: 20px;
  right: 20px;
  color: ${props => props.theme.colors.LightGrey};
  font-size: 45px;
  transition: 0.2s all ease-in;
  z-index: 1;

  &:hover {
    transition: 0.2s all ease-in;
    cursor: pointer;
    color: ${props => props.theme.colors.main};
  }

  ${media.mobile} {
    font-size: 35px;
  }
`;
