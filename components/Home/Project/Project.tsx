import React from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';
import PROJECT_DATA from '@/core/ProjectData';
import ProjectCard from './ProjectCard';

export default function Project() {
  return (
    <Container>
      <Index>Projects</Index>
      <CardContainer>
        {PROJECT_DATA.map(project => (
          <ProjectCard
            key={project.title}
            image={project.image}
            number={project.number}
            title={project.title}
            description={project.description}
            tech_list={project.tech_list}
            link={project.link}
            page={project.page}
          />
        ))}
      </CardContainer>
    </Container>
  );
}

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
