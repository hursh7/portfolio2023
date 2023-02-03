import React from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';

interface Props {
  image: any;
  number: number;
  title: string;
  description: string;
  tech_list: any;
  link: any;
  page: any;
}

export default function ProjectCard({
  image,
  number,
  title,
  description,
  tech_list,
  link,
  page,
}: Props) {
  return (
    <Container>
      {image}
      {number}
    </Container>
  );
}

const Container = styled.section`
  display: flex;
  align-items: center;
  width: 100%;
  height: 550px;
  background-color: rgb(241, 241, 241);
  border: 1px solid #e4e4e4;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 50px;

  ${media.tablet} {
    flex-direction: column;
    height: 900px;
  }

  ${media.mobile} {
    height: 650px;
  }
`;
