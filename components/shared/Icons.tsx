import React from 'react';
import styled from 'styled-components';

interface Props {
  icon: any;
  title: string;
  link?: string;
  isFooter?: boolean;
}

export default function Icons({ icon, title, link, isFooter }: Props) {
  const handleClickLink = () => {
    if (link) {
      window.open(link);
    }
  };

  return (
    <Icon onClick={handleClickLink} isFooter={isFooter}>
      {icon}
    </Icon>
  );
}

const Icon = styled.div<{ isFooter: any }>`
  transition: all 0.5s;

  &:hover {
    cursor: pointer;
    color: ${({ isFooter }) => (isFooter ? `#AEA9BA` : `#7562E0`)};
  }
`;
