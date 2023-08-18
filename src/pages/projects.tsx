import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components';

const MainContainer = styled.main`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
`;

const Title = styled.h1`
  margin: 0;
  margin: 2rem 0 0.75rem;
  color: #F11A7B;
  text-align: center;
  font: 700 2.5rem 'Montserrat', sans-serif;
`;

const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
  list-style: none;
`;

const Project = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const ProjectTitle = styled.h3`
  color: #505050;
  font: 700 1rem 'Montserrat', sans-serif;
`;

const IndexPage: React.FC<PageProps> = () => {
  return (
    <MainContainer>
      <Title>
        See my skills in action!
      </Title>
      <ProjectsList>
        <Project>
          <ProjectTitle>Whiteboard</ProjectTitle>
        </Project>
      </ProjectsList>
    </MainContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Projects - Ygor Fonseca</title>
