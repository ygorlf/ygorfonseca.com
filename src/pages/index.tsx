import * as React from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import styled, { keyframes } from 'styled-components';

import './global.css';

import me from '../images/me.jpeg';
import board from '../images/board.png';
import pdf from '../images/icons/pdf.svg';


import Arrow from '../components/arrow';
import Github from '../components/github';
import Linkedin from '../components/linkedin';

const About = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  max-width: 1110px;
  margin: 0 auto;
`;

const Intro = styled.div`
  display: flex;
  flex-direction: column;
`;

const Me = styled.img`
  display: inline-block;
  width: auto;
  height: 200px;
  margin-right: 3rem;
  box-shadow: 10px 10px 0 #F11A7B;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.75rem;
  color: #505050;
  font: 700 2.5rem 'Montserrat', sans-serif;
`;

const Paragraph = styled.p`
  max-width: 350px;
  color: #505050;
  font: 400 1.1rem 'Montserrat', sans-serif;
  line-height: 1.5;
`;

const PreviousJob = styled.span`
  display: block;
  margin-top: 0.75rem;
`;

const PreviousCompany = styled.a`
  display: inline-block;
  margin-left: 0.25rem;

  &:hover {
    border-bottom: 2px solid #F11A7B;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  margin-top: 2.5rem;
  padding: 0;
  list-style: none;
`;

const SocialLink = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
`;

const Documents = styled.div`
  display: flex;
  margin-top: 6rem;
`;

const DocumentLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 3rem;
  margin: 0 0.5rem;
  padding: 1rem;
  border: 2px solid transparent;
  cursor: pointer;
  color: #fff;
  font: 400 0.9rem 'Montserrat', sans-serif;
  transition: all .2s ease-in;
  background: #F11A7B;

  &::before {
    content: '';
    display: inline-block;
    width: 24px;
    height: 24px;
    margin-right: 0.25rem;
    background: url(${pdf}) no-repeat center;
    background-size: contain;
  }

  &:hover {
    color: #505050;
    border: 2px solid #F11A7B;
    box-shadow: 3px 3px 0 #F11A7B;
    background: #fff;
  }
`;

const Animation = keyframes`
  0% {
    transform: translate(-50%, 0);
  }
  100% {
    transform: translate(-50%, 0.4em);
  }
`;

const NextSection = styled.a`
  position: absolute;
  bottom: 5%;
  left: 50%;
  width: 30px;
  height: 30px;
  border: none;
  cursor: pointer;
  transform: translateX(-50%);
  background: none;

  animation: ${Animation} 0.6s infinite alternate ease-in-out;

  svg {
    filter: drop-shadow(2px 2px 2px #F11A7B);
  }
`;

const ProjectsSection = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
`;

const ProjectTitle = styled.h2`
  position: relative;
  display: inline-block;
  margin-bottom: 0;
  color: #000;
  font: 700 2.5rem 'Montserrat', sans-serif;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: -1px;
    width: 100%;
    height: 120%;
    margin-left: -3px;
    margin-right: -3px;
    background: #ffd500;
    transform: rotate(-2deg);
    border-radius: 20% 25% 20% 24%;
    padding: 10px 3px 3px 10px;
    z-index: -1;
  }
`;

const Slogan = styled.h2`
  position: relative;
  text-align: center;
  color: #000;
  font: 700 1.5rem 'Montserrat', sans-serif;

  &::before {
    content: '';
    display: block;
    position: absolute;
    top: -1px;
    left: 50%;
    width: 70%;
    height: 125%;
    margin-left: -3px;
    margin-right: -3px;
    background: #F11A7B;
    transform: rotate(-2deg);
    border-radius: 20% 25% 20% 24%;
    padding: 10px 3px 3px 10px;
    transform: translateX(-50%);
    z-index: -1;
  }
`;

const ProjectItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ProjectImage = styled.img`
  height: 275px;
  border-radius: 5px;
  border: 3px solid #6528F7;
`;

const ProjectName = styled.a`
  margin: 1rem 0 0.25rem;
  color: #000;
  cursor: pointer;
  font: 700 1.5rem 'Montserrat', sans-serif;
`;

const TagsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

const Tag = styled.li`
  margin: 0 0.5rem;
  padding: 0.5rem;
  color: #fff;
  font: 400 0.95rem 'Montserrat', sans-serif;
  border-radius: 1rem;
  background: #6528F7;
`;

const IndexPage: React.FC<PageProps> = () => {
  const getWorkExperience = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - 2016;
  }

  return (
    <main>
      <About>
        <InnerContainer>
          <Me src={me} />
          <Intro>
            <Title>
              Ygor Fonseca
            </Title>
            <Paragraph>
              Front-End Specialist delivering digital products for {getWorkExperience()} years. React and coffee lover.
              <br />
              <PreviousJob>
                Former Co-Founder at
                <PreviousCompany
                  href="https://www.1sti.com.br/"
                  target='_blank'
                >
                  1STi
                </PreviousCompany>
              </PreviousJob>
            </Paragraph>
          </Intro>
        </InnerContainer>
        <SocialLinks>
          <SocialLink
            href='https://github.com/ygorlf/'
            target='_blank'
          >
            <Github />
          </SocialLink>
          <SocialLink
            href='https://www.linkedin.com/in/ygorlf/'
            target='_blank'
          >
            <Linkedin />
          </SocialLink>
        </SocialLinks>
        <Documents>
          <DocumentLink
            href='/resume.pdf'
            download="Ygor_Fonseca_Resume.pdf"
          >
            Resume
          </DocumentLink>
          <DocumentLink
            href='/cover-letter.pdf'
            download="Ygor_Fonseca_Letter.pdf"
          >
            Cover Letter
          </DocumentLink>
        </Documents>

        <NextSection href='#projects'>
          <Arrow fill='#F11A7B' />
        </NextSection>
      </About>
      <ProjectsSection id='projects'>
        <hgroup>
          <ProjectTitle>
            Cool things I've built!
          </ProjectTitle>
          <Slogan>
            See my skills in action!
          </Slogan>
        </hgroup>

        <ProjectItem>
          <ProjectImage src={board} />
          <ProjectName>React Board</ProjectName>
          <TagsList>
            <Tag>React</Tag>
            <Tag>Canvas</Tag>
            <Tag>MobX</Tag>
          </TagsList>
        </ProjectItem>

        <span></span>
      </ProjectsSection>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ygor Fonseca</title>
