import React from 'react';
import styled, { keyframes } from 'styled-components';

import me from '../images/me.jpeg';

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

const About = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: calc(100vh - 8rem);
`;

const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
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
  height: 180px;
  margin-right: 3rem;
  box-shadow: 10px 10px 0 var(--color-highlight);

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
  background: var(--color-marker);
  animation: ${TitleAnimation} 0.6s 1 alternate ease-in;
  z-index: -1;
`;

const Title = styled.h1`
  margin: 0;
  margin-bottom: 0.75rem;
  color: var(--color-text);
  font: 700 2.5rem 'Nunito', sans-serif;
  z-index: 0;

  @media (max-width: 1023px) {
    text-align: center;
    font-size: 2rem;
  }

  @media (max-width: 480px) {
    font-size: 1.5rem;
  }
`;

const Paragraph = styled.p`
  width: 70%;
  margin: 4rem auto 0;
  color: var(--color-text);
  text-align: center;
  font: 400 1.25rem 'Roboto', sans-serif;
  line-height: 1.5;

  @media (max-width: 1023px) {
    font-size: 1rem;
  }
`;

const PreviousJob = styled.span`
  display: block;
  margin-top: 3rem;
  font-size: 1rem;

  @media (max-width: 1023px) {
    font-size: .85rem;
  }
`;

const PreviousCompany = styled.a`
  display: inline-block;
  margin-left: 0.25rem;

  &:hover {
    border-bottom: 2px solid var(--color-highlight);
  }
`;

const IndexPage = () => {
  return (
    <>
      <SEO
        lang='en'
        title='Ygor Fonseca - About'
        ogTitle='Ygor Fonseca - About'
        description='Front-end Engineer transforming ideas into impactful digital experiences.'
        canonicalLink='https://www.ygorfonseca.com/'
      />
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
            {/* US - &#127482;&#127480; */}
            Spent several years shipping corporate products for the educational and healthcare industries using Javascript, React and React Native.
            <br />
            
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
      </About>
    </>
  )
}

IndexPage.Layout = Layout;
export default IndexPage;
