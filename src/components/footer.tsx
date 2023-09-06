import React from 'react';
import { type PageProps } from 'gatsby';
import styled from 'styled-components';

import '../pages/global.css';

import Github from '../components/github';
import Linkedin from '../components/linkedin';

const Content = styled.header`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  background-color: var(--color-background);
  z-index: 1;
  
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

const Footer: React.FC<PageProps> = () => {
  return (
    <Content>
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
    </Content>
  )
};

export default Footer;
