import React, { forwardRef, ReactNode } from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';
import PROJECT_DATA from '@/core/ProjectData';
import { DATABASE_ID, TOKEN } from '@/config';
import ProjectCard from '@/components/Home/Project/ProjectCard';
import { GetStaticProps } from 'next';
import { Notion } from '@/types/notion';

interface IProps {
  useScrollFadeIn: (
    direction: string,
    duration: number,
    delay: number
  ) => object;
  projects: Array<Notion>;
}

// eslint-disable-next-line react/display-name
const Project = forwardRef(
  ({ useScrollFadeIn, projects }: IProps, ref: any) => {
    const animatedItem = {
      0: useScrollFadeIn('right', 1, 0),
      1: useScrollFadeIn('left', 1, 0.1),
      2: useScrollFadeIn('right', 1, 0.2),
    };

    return (
      <Container ref={ref}>
        <Index>Projects</Index>
        <CardContainer>
          {/* {projects.map((project, idx) => (
            <ProjectCard
              key={idx}
              image={project.img.files[0]?.file.url}
              number={project.number.number}
              title={project.title.rich_text[0]?.plain_text}
              description={project.description.rich_text[0]?.plain_text}
              tech_list={project.tag.multi_select}
              link={project.github.url}
              path={project.page.url}
              idx={idx}
              animatedItem={animatedItem}
            />
          ))} */}
          {PROJECT_DATA.map((project, idx) => (
            <ProjectCard
              key={project.title}
              image={project.image}
              number={project.number}
              title={project.title}
              description={project.description}
              tech_list={project.tech_list}
              link={project.link}
              path={project.path}
              animatedItem={animatedItem}
              idx={idx}
            />
          ))}
        </CardContainer>
      </Container>
    );
  }
);

const Container = styled.section`
  padding: ${Size.gap.MainSection} 100px;

  ${media.tablet} {
    padding: ${Size.gap.MainSection} 50px;
  }

  ${media.mobile} {
    padding: calc(${Size.gap.MainSection} / 2) 20px;
  }
`;

const Index = styled.h2`
  ${Size.font.title};
  font-weight: 500;
  color: ${props => props.theme.colors.MainGrey};
  text-align: center;
  margin-bottom: 50px;

  ${media.mobile} {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const CardContainer = styled.section`
  display: flex;
  flex-direction: column;
`;

export default Project;
