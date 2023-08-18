import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import styled from 'styled-components';

import './global.css';

import me from '../images/me.jpeg';
import pdf from '../images/icons/pdf.svg';

const MainContainer = styled.main`
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

const IndexPage: React.FC<PageProps> = () => {
  const getWorkExperience = () => {
    const currentYear = new Date().getFullYear();
    return currentYear - 2016;
  }

  return (
    <MainContainer>
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
    </MainContainer>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Ygor Fonseca</title>
