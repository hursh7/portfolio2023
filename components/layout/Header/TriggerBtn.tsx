import React, { useState } from 'react';
import styled from 'styled-components';
import { media } from '@/styles/theme';

interface Props {
  toggleBtn: boolean;
  onButtonClick: () => void;
}

export default function TriggerBtn({ toggleBtn, onButtonClick }: Props) {
  return (
    <DropdownBox onClick={onButtonClick}>
      <DropdownBtn toggleBtn={toggleBtn}>
        <span></span>
        <span></span>
        <span></span>
      </DropdownBtn>
    </DropdownBox>
  );
}

const DropdownBox = styled.div`
  display: none;
  position: relative;
  width: 20px;
  height: 14px;

  ${media.tablet} {
    display: block;
  }

  &:hover {
    cursor: pointer;
  }
`;

const DropdownBtn = styled.div<{ toggleBtn: boolean }>`
  & span {
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${props => props.theme.colors.MainGrey};
    border-radius: 5px;
    transition: all 0.4s;
  }

  & span:nth-of-type(1) {
    top: 0;
    ${({ toggleBtn }) =>
      toggleBtn === true && `transform: translateY(6px) rotate(-45deg)`};
  }

  & span:nth-of-type(2) {
    top: 6px;
    ${({ toggleBtn }) => toggleBtn === true && `opacity: 0`};
  }

  & span:nth-of-type(3) {
    bottom: 0;
    ${({ toggleBtn }) =>
      toggleBtn === true && `transform: translateY(-6px) rotate(45deg)`};
  }
`;
