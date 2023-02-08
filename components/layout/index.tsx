import React, { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Main from './Main';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
}

const Container = styled.div`
  position: relative;
  overflow: hidden;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  max-width: 1920px;
`;
