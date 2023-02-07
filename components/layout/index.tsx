import React, { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Main from './Main';

interface LayoutProps {
  children?: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Container>
      {/* <Header onReset={handleTop} ref={focusRef} /> */}
      <Main>{children}</Main>
      {/* <Footer /> */}
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
