import React, { forwardRef } from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';
import PROJECT_DATA from '@/core/ProjectData';
import ProjectCard from './ProjectCard';

interface Props {
  test?: any;
}

// eslint-disable-next-line react/display-name
const Project = forwardRef(({ test }: Props, ref: any) => {
  return (
    <Container ref={ref}>
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
            path={project.path}
          />
        ))}
      </CardContainer>
    </Container>
  );
});

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
