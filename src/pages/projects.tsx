import React from 'react';
import type { PageProps } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { StaticImage } from 'gatsby-plugin-image';

import Layout from '../components/layout';
import SEO from '../components/seo';

const TitleAnimation = keyframes`
  0% {
    width: 0
  }
  100% {
    width: 100%;
  }
`;

const ProjectsSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  max-width: 886px;
  width: 70%;
  margin: 0 auto;
  padding: 2rem 0;

  @media (max-width: 1023px) {
    width: 80%;
  }
`;

const TitleGroup = styled.hgroup`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectTitle = styled.h2`
  position: relative;
  display: block;
  margin-bottom: 0;
  color: #000;
  font: 700 2.5rem 'Nunito', sans-serif;

  @media (max-width: 1023px) {
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Highliter = styled.span`
  position: absolute;
  top: -1px;
  left: -5%;
  width: 110%;
  height: 120%;
  margin-left: -3px;
  margin-right: -3px;
  background: #ffd500;
  transform: rotate(-2deg);
  border-radius: 20% 25% 20% 24%;
  animation: ${TitleAnimation} 0.6s 1 alternate ease-in;
  z-index: -1;
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 7rem auto 0;
`;

const ProjectInfo = styled.div`
  width: 100%;

  @media (max-width: 1023px) {
    width: 100%;
  }
`;

const ProjectName = styled.a`
  display: inline-block;
  margin: 2rem 0 1.25rem;
  color: #F11A7B;
  cursor: pointer;
  font: 700 1.5rem 'Nunito', sans-serif;

  @media (max-width: 1023px) {
    font-size: 1.25rem;
  }
`;

const ProjectDescription = styled.p`
  width: 70%;
  margin: 0;
  color: #505050;
  font: 400 1.15rem 'Roboto', sans-serif;
  line-height: 1.5;

  span {
    display: inline-block;
    margin: 0 3px;
    color: #F11A7B;
    font-style: italic;
  }

  @media (max-width: 1023px) {
    width: 100%;
    font-size: 1rem;
  }
`;

const ProjectLink = styled.a`
  display: inline-block;
  margin: 1rem 0;
  color: #505050;
  font: 400 1rem 'Roboto', sans-serif;
  font-style: italic;
  cursor: pointer;
  
  span {
    text-decoration: underline;
    color: #F11A7B;
  }
`;

const ProjectsPage: React.FC<PageProps> = () => {
  return (
    <Layout>
      <SEO
        lang='en'
        title='Ygor Fonseca - Projects'
        ogTitle='Ygor Fonseca - Projects'
        description='Front-end Engineer transforming ideas into impactful digital experiences.'
        canonicalLink='https://www.ygorfonseca.com/projects/'
      />
      <ProjectsSection id='projects'>
        <TitleGroup>
          <ProjectTitle>
            Cool things I've built!
            <Highliter />
          </ProjectTitle>
        </TitleGroup>
        <ProjectItem>
          <StaticImage
            src='../images/board.png'
            alt='Canvas Whiteboard'
            placeholder='blurred'
            style={{
              display: 'inline-block',
              width: '100%',
              border: '2px solid #ffd500',
              borderRadius: '5px'
            }}
          />
          <ProjectInfo>
            <ProjectName>Stycker</ProjectName>
            <ProjectDescription>
              Fancy whiteboard where performance meets simplicity, beautifully built using top tier technologies like
              <span>React</span>, <span>Mobx</span>, <span>Typescript</span>, <span>Canvas</span> and a little bit of math. &#128151;
            </ProjectDescription>
            <ProjectLink target='_blank' href='https://stycker.netlify.app/'>&#128279; <span>Try now</span></ProjectLink>
          </ProjectInfo>
        </ProjectItem>
      </ProjectsSection>
    </Layout>
  )
}

export default ProjectsPage
