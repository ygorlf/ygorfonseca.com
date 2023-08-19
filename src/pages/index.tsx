import React, { useEffect, useRef } from 'react';
import type { HeadFC, PageProps } from 'gatsby';
import styled, { keyframes } from 'styled-components';
import { Helmet } from 'react-helmet';

import './global.css';

import me from '../images/me.jpeg';
import board from '../images/board.png';
import pdf from '../images/icons/pdf.svg';


import Arrow from '../components/arrow';
import Github from '../components/github';
import Linkedin from '../components/linkedin';

const TitleAnimation = keyframes`
  0% {
    width: 0
  }
  100% {
    width: 100%;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: end;
  align-items: center;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;

  @media (max-width: 1023px) {
    padding: 0 1.5rem;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  align-items: center;
  padding: 0;
  list-style: none;
`;

const SocialLink = styled.a`
  display: inline-block;
  margin: 0 0.5rem;
`;

const Main = styled.main`
  width: 100%;
  padding-bottom: 3rem;
`;

const About = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 4rem);
`;

const InnerContainer = styled.div`
  max-width: 1110px;
  margin: 0 auto;
  padding: 0 1.5rem;
`;

const Intro = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 1023px) {
    flex-direction: column;
    justify-content: center;
  }
`;

const Me = styled.img`
  display: inline-block;
  width: auto;
  height: 200px;
  margin-right: 3rem;
  box-shadow: 10px 10px 0 #F11A7B;

  @media (max-width: 1023px) {
    margin-right: 0;
    margin-bottom: 4rem;
  }
`;

const Marker = styled.span`
  position: relative;
`;

const MarkerHighlight = styled.marker`
  display: inline-block;
  position: absolute;
  top: -1px;
  left: -2.5%;
  width: 105%;
  height: 100%;;
  border-radius: 20% 25% 20% 24%;
  transform: rotate(-1.5deg);
  background: #FFBFBF;
  animation: ${TitleAnimation} 0.6s 1 alternate ease-in;
  z-index: -1;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.75rem;
  color: #505050;
  font: 700 2.5rem 'Nunito', sans-serif;

  @media (max-width: 1023px) {
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  width: 100%;
  margin: 4rem auto 0;
  color: #505050;
  text-align: center;
  font: 400 1.25rem 'Roboto', sans-serif;
  line-height: 1.5;

  @media (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const PreviousJob = styled.span`
  display: block;
  margin-top: 0.75rem;
  font-size: 1rem;

  @media (max-width: 1023px) {
    font-size: .85rem;
  }
`;

const PreviousCompany = styled.a`
  display: inline-block;
  margin-left: 0.25rem;

  &:hover {
    border-bottom: 2px solid #F11A7B;
  }
`;

const Documents = styled.div`
  display: flex;
  margin-top: 5vh;
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
  font: 400 0.9rem 'Roboto', sans-serif;
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

  @media (max-width: 1023px) {
    display: none;
  }
`;

const ProjectsSection = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  padding: 2rem 0;
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
  display: none;
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
  width: 80%;
  margin: 7rem auto 0;
`;

const ProjectImage = styled.img`
  display: inline-block;
  height: 50vh;
  border-radius: 5px;
  border: 2px solid #ffd500;

  @media (max-width: 1023px) {
    width: 100%;
    height: auto;
  }
`;

const ProjectInfo = styled.div`
  width: 75%;

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

const IndexPage: React.FC<PageProps> = () => {
  const projectTitleRef = useRef<HTMLHeadingElement>(null);
  const highliterRef = useRef<HTMLSpanElement>(null);

  const getWorkExperience = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - 2016;
  }

  const setupObserver = () => {
    if (window) {
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const intersecting = entry.isIntersecting;

          if (intersecting) {
            setTimeout(() => {
              if (highliterRef.current) {
                highliterRef.current.style.display = 'block';
              }
            }, 300);
          }
        })
      }, { threshold: 1 });

      observer.observe(projectTitleRef.current);
    }
  }

  useEffect(() => {
    if (projectTitleRef.current) {
      setupObserver();
    }
  }, []);

  return (
    <>
      <Header>
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
      </Header>
      <Main>
        <Helmet>
          <meta lang='en-us' />
          <meta charSet='utf-8' />

          <title>Ygor Fonseca - Front End Engineer</title>
          <meta name="title" content="Ygor Fonseca - Front End Engineer" />
          <meta name="description" content="Front-end Engineer transforming ideas into impactful digital experiences." />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap" rel="stylesheet" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&family=Roboto:wght@400;700&display=swap" rel="stylesheet" />
        </Helmet>
        <About>
          <InnerContainer>
            <Intro>
              <Me src={me} />
              <Title>
                Front-end Engineer <br /> transforming ideas into <br /> <Marker>impactful digital experiences<MarkerHighlight />.</Marker>
              </Title>
            </Intro>
            <Paragraph>
              {/* BR - &#127463;&#127479;*/}
              {/* US - &#127482;&#127480; */ }
              Hi, my name is Ygor! A brazilian developer writing poetry with pixels.
              <br />
              <PreviousJob>
                Former Co-Founder at
                <PreviousCompany
                  href="https://www.1sti.com.br/"
                  target='_blank'
                >
                  1STi
                </PreviousCompany>.
              </PreviousJob>
            </Paragraph>
          </InnerContainer>
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
          <TitleGroup>
            <ProjectTitle
              ref={projectTitleRef}
            >
              Cool things I've built!
              <Highliter ref={highliterRef} />
            </ProjectTitle>
          </TitleGroup>

          <ProjectItem>
            <ProjectImage src={board} />
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
      </Main>
    </>
  )
}

export default IndexPage
