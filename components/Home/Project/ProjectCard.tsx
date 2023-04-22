import React from 'react';
import Size from '@/core/Size';
import { media } from '@/styles/theme';
import styled from 'styled-components';
import Image, { StaticImageData } from 'next/image';
import { ICON_PJOJECT } from '@/core/Icondata';
type TechList = {
  id?: string;
  name: string;
  color?: string;
};
interface Props {
  image: string;
  imageName?: string;
  number: number;
  title: string;
  description: string;
  tech_list: TechList[];
  link: string;
  path: string;
  idx: number;
  animatedItem: any;
}

export default function ProjectCard({
  image,
  imageName,
  number,
  title,
  description,
  tech_list,
  link,
  path,
  idx,
  animatedItem,
}: Props) {
  const handleClickLink = (target: string) => {
    target === link ? window.open(link) : window.open(path);
  };

  const imageUrl = `/images/${imageName}`;

  return (
    <Container {...animatedItem[idx]}>
      <ImageWrapper>
        <StyledImage src={imageUrl} alt={title} fill quality={100} />
      </ImageWrapper>
      <Text>
        <Number>{`0${number}`}</Number>
        <Title>{title}</Title>
        <Description>{description}</Description>
        <TechBox>
          {tech_list.map(list => (
            <Tech key={list.name}>{`# ${list.name}`}</Tech>
          ))}
        </TechBox>
        <LinkBox>
          <ExternalLink onClick={() => handleClickLink(link)}>
            {ICON_PJOJECT.project.github}
            <Path>Github</Path>
          </ExternalLink>
          <ExternalLink onClick={() => handleClickLink(path)}>
            {ICON_PJOJECT.project.path}
            <Path>Page</Path>
          </ExternalLink>
        </LinkBox>
      </Text>
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

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  flex: 1 1 60%;

  ${media.pc} {
    flex: 1 1 55%;
  }

  ${media.tablet} {
    flex: 1 1 55%;
  }

  ${media.mobile} {
    flex: 1 1 50%;
  }
`;

const StyledImage = styled(Image)`
  object-fit: cover;
`;

const Text = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
  flex: 1 1 40%;
  padding: 0 50px;

  ${media.pc} {
    flex: 1 1 45%;
  }

  ${media.tablet} {
    flex: 1 1 45%;
    padding: 50px;
    justify-content: center;
  }

  ${media.mobile} {
    flex: 1 1 50%;
    padding: 30px 20px;
  }
`;

const Number = styled.div`
  font-size: 30px;
  margin-bottom: 100px;

  ${media.tablet} {
    font-size: 25px;
    margin-bottom: 10px;
  }

  ${media.mobile} {
    ${Size.font.regular};
    margin-bottom: 5px;
  }
`;

const Title = styled.h3`
  font-weight: 400;
  font-size: 30px;
  margin-bottom: 10px;

  ${media.mobile} {
    ${Size.font.medium};
    margin-bottom: 20px;
  }
`;

const Description = styled.p`
  ${Size.font.regular}
  margin-bottom: 10px;

  ${media.mobile} {
    font-size: 13px;
    margin-bottom: 5px;
  }
`;
const TechBox = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 5px;
  font-size: 12px;

  ${media.mobile} {
    ${Size.font.small};
  }
`;

const Tech = styled.div`
  background-color: ${props => props.theme.colors.main};
  border-radius: 10px;
  padding: 5px 10px;
  color: white;
`;

const LinkBox = styled.div`
  display: flex;
`;

const ExternalLink = styled.div`
  display: flex;
  align-items: center;
  background-color: ${props => props.theme.colors.MainGrey};
  border-radius: 2px;
  padding: 10px 15px;
  margin: 20px 10px 0 0;
  font-size: 20px;
  color: #fff;

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }

  ${media.mobile} {
    padding: 10px 15px;
  }
`;

const Path = styled.p`
  position: relative;
  ${Size.font.small}
  font-weight: 300;
  margin-left: 6px;
`;
