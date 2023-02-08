import React, { ReactNode } from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';

interface Props {
  title: string;
  color: string;
  icon_name: ReactNode;
  idx: number;
  animatedItem: any;
}

export default function TechItem({
  title,
  color,
  icon_name,
  idx,
  animatedItem,
}: Props) {
  return (
    <Item color={color} {...animatedItem[idx]}>
      <div className={'icon'}>{icon_name}</div>
      <Name>{title}</Name>
    </Item>
  );
}

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
