import React, {
  ForwardedRef,
  forwardRef,
  ReactNode,
  useEffect,
  useState,
} from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';
import { DATABASE_ID, TOKEN } from '@/config';
import ProjectCard from '@/components/Home/Project/ProjectCard';
import { Notion } from '@/types/notion';
import { StaticImageData } from 'next/image';

interface IProps {
  useScrollFadeIn: (
    direction: string,
    duration: number,
    delay: number
  ) => object;
  projects: Notion;
}

type TechList = {
  id?: string;
  name: string;
  color?: string;
};
interface ConvertProjectData {
  image: string;
  imageName?: string;
  number: number;
  title: string;
  description: string;
  tech_list: TechList[] | any;
  link: string;
  path: string;
}

// eslint-disable-next-line react/display-name
const Project = forwardRef(
  (
    { useScrollFadeIn, projects }: IProps,
    ref: ForwardedRef<HTMLDivElement>
  ) => {
    const animatedItem = {
      0: useScrollFadeIn('right', 1, 0),
      1: useScrollFadeIn('left', 1, 0.1),
      2: useScrollFadeIn('right', 1, 0.2),
    };

    let convertProject: ConvertProjectData[] = [];

    projects.results.map(project => {
      convertProject.push({
        image: project.properties.img.files[0]?.file.url,
        imageName: project.properties.img.files[0].name,
        number: project.properties.number.number,
        title: project.properties.title.rich_text[0]?.plain_text,
        description: project.properties.description.rich_text[0]?.plain_text,
        tech_list: project.properties.tag.multi_select,
        link: project.properties.github.url,
        path: project.properties.page.url,
      });
    });

    return (
      <Container ref={ref}>
        <Index>Projects</Index>
        {convertProject.length > 0 && (
          <CardContainer>
            {convertProject.map((project, idx) => {
              return (
                <ProjectCard
                  key={project.title}
                  image={project.image}
                  imageName={project.imageName}
                  number={project.number}
                  title={project.title}
                  description={project.description}
                  tech_list={project.tech_list}
                  link={project.link}
                  path={project.path}
                  idx={idx}
                  animatedItem={animatedItem}
                />
              );
            })}
          </CardContainer>
        )}
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
