import Footer from '@/components/layout/Footer/Footer';
import Header from '@/components/layout/Header/Header';
import Nav from '@/components/layout/Nav/Nav';
import TopButton from '@/components/shared/TopButton';
import { DATABASE_ID, TOKEN } from '@/config';
import { useScrollFadeIn } from '@/hook';
import Head from 'next/head';
import { useRef, useEffect } from 'react';
import styled from 'styled-components';

import { GetStaticProps } from 'next';
import { Notion } from '@/types/notion';
import Main from '@/components/Home/Main/Main';
import About from '@/components/Home/About/About';
import Tech from '@/components/Home/Tech/Tech';
import Project from '@/components/Home/Project/Project';

interface IProps {
  projects: any;
}

export default function Home({ projects }: IProps) {
  const IndexRef = useRef<any>();
  const focusRef = useRef<any>();

  const project_data = projects?.results.map(
    (project: { properties: any }) => project?.properties
  );

  console.log('projects', projects);
  console.log('project_data', project_data);

  const handleTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    let nodes: any[] = [];

    (async () => {
      const IndexClickEvent = (node: any, i: number) => {
        nodes.push(node);

        node.addEventListener('click', () => {
          focusRef.current &&
            focusRef.current.children[i].scrollIntoView({
              behavior: 'smooth',
              block: 'start',
            });
        });
      };

      if (IndexRef.current) {
        [...IndexRef.current.children].map((node, i) =>
          IndexClickEvent(node, i)
        );
      }
      return nodes.map((node, i) =>
        node.removeEventListener('click', IndexClickEvent(node, i))
      );
    })();
  }, []);

  return (
    <Container>
      <Head>
        <title>Portfolio 2023</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Nav />
      <Header ref={IndexRef} onReset={handleTop} />
      <Main useScrollFadeIn={useScrollFadeIn} />
      <div ref={focusRef}>
        <About useScrollFadeIn={useScrollFadeIn} />
        <Tech useScrollFadeIn={useScrollFadeIn} />
        <Project
          useScrollFadeIn={useScrollFadeIn}
          projects={project_data}
        ></Project>
        <Footer useScrollFadeIn={useScrollFadeIn} />
      </div>
      <TopButton />
    </Container>
  );
}

// 빌드 타임에 호출
export const getStaticProps: GetStaticProps = async () => {
  const options = {
    muteHttpExceptions: true,
    method: 'POST',
    headers: {
      'Notion-Version': '2022-02-22',
      Authorization: `Bearer ${TOKEN}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      sorts: [{ property: 'number', direction: 'ascending' }],
      page_size: 100,
    }),
  };

  const res = await fetch(
    `https://api.notion.com/v1/databases/${DATABASE_ID}/query`,
    options
  );

  const projects = await res.json();

  // const projects = project_list?.results.map(
  //   (project: { properties: any }) => project.properties
  // );

  return {
    props: { projects },
    revalidate: 1,
  };
};

const Container = styled.div``;
