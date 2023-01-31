import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface LayoutProps {
  children?: ReactNode;
}

export default function Main({ children }: LayoutProps) {
  return <StyledMain>{children}</StyledMain>;
}

const StyledMain = styled.main`
  padding-top: 80px;
  width: 100%;
  height: 100%;
`;
