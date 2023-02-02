import About from '@/components/Home/About/About';
import Main from '@/components/Home/Main/Main';
import Nav from '@/components/layout/Nav/Nav';
import Head from 'next/head';
import styled from 'styled-components';

export default function Home() {
  return (
    <Container>
      <Head>
        <title>Portfolio 2023</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Main />
      <About />
    </Container>
  );
}

const Container = styled.div``;