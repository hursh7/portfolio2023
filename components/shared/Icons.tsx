import React from 'react';
import styled from 'styled-components';

interface Props {
  icon: any;
  title: string;
  link?: string;
}

export default function Icons({ icon, title, link }: Props) {
  const handleClickLink = () => {
    if (link) {
      window.open(link);
    }
  };

  return <Icon onClick={handleClickLink}>{icon}</Icon>;
}

const Icon = styled.div`
  &:hover {
    cursor: pointer;
    color: ${props => props.theme.colors.main};
  }
`;
