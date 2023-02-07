import Size from '@/core/Size';
import { media } from '@/styles/theme';
import React from 'react';
import styled from 'styled-components';

interface Props {
  title: string;
  desc: string;
  date?: string;
}

export default function DetailList({ title, desc, date }: Props) {
  return (
    <Detail>
      <li>{title}</li>
      <li>{desc}</li>
      <li>{date}</li>
    </Detail>
  );
}

const Detail = styled.ul`
  position: relative;
  ${Size.font.regular}
  padding-left: 50px;

  & li::before {
    display: block;
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    transform: translate(-50%, -50%);
    width: 10px;
    height: 10px;
    border-radius: 50%;
    border: 1px solid ${props => props.theme.colors.orange};
    background-color: ${props => props.theme.colors.orange};
    background-clip: content-box;

    ${media.mobile} {
      display: none;
    }
  }

  &::after {
    display: block;
    content: '';
    position: absolute;
    top: 10px;
    left: 0;
    width: 1px;
    height: 55px;
    background-color: ${props => props.theme.colors.orange};

    ${media.mobile} {
      display: none;
    }
  }

  & li:nth-child(1) {
    font-size: 16px;
    font-weight: 600;
    color: ${props => props.theme.colors.MainGrey};
    margin-bottom: 5px;

    ${media.mobile} {
      margin-bottom: 3px;
    }
  }

  & li:nth-child(2) {
    font-size: 14px;
    font-weight: 600;
    color: ${props => props.theme.colors.LightGrey};
    margin-bottom: 10px;

    ${media.mobile} {
      font-size: 12px;
    }
  }

  & li:nth-child(3) {
    font-size: 12px;
    font-weight: 500;
    color: ${props => props.theme.colors.orange};
  }

  ${media.mobile} {
    font-size: 16px;
    padding-left: 0;
  }
`;
