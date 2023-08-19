import React from 'react';
import { Link, type PageProps } from 'gatsby';
import styled from 'styled-components';

import '../pages/global.css';

import logo from '../images/logo.png';

import Github from '../components/github';
import Linkedin from '../components/linkedin';

const Content = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  background-color: #fff;
  box-shadow: 0 2px 4px #00000022;
  z-index: 1;
  
  @media (max-width: 1023px) {
    padding: 0 1.5rem;
  }
`;

const HeaderWapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
`;

const Logo = styled.img`
  display: inline-block;
  height: 100%;
`;

const Nav = styled.nav`
  margin-right: 2rem;
`;

const NavLink = styled.span`
  margin: 0 .5rem;
  color: #505050;
  font: 400 1.125rem 'Nunito', sans-serif;
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

const Header: React.FC<PageProps> = () => (
  <Content>
    <HeaderWapper>
      <Link
        to='/'
        style={{ height: '70%', textDecoration: 'none', color: 'inherit' }}
      >
        <Logo src={logo} />
      </Link>
      <Nav>
        <NavLink>
          <Link
            to='/'
            style={{ textDecoration: 'none', color: 'inherit' }}
            activeStyle={{ color: '#F11A7B', textDecoration: 'underline' }}
          >
            Home
          </Link>
        </NavLink>
        <NavLink>
          <Link
            to='/projects/'
            style={{ textDecoration: 'none', color: 'inherit' }}
            activeStyle={{ color: '#F11A7B', textDecoration: 'underline' }}
          >
            Projects
          </Link>
        </NavLink>
      </Nav>
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
    </HeaderWapper>
  </Content>
);

export default Header;
