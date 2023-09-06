import React, { useEffect, useState } from 'react';
import { Link, type PageProps } from 'gatsby';
import styled from 'styled-components';

import '../pages/global.css';

import logo from '../images/logo.png';

import Cookie from '../components/cookie';
import Cupcake from '../components/cupcake';
import Vampire from '../components/vampire';

interface ThemeButtonProps {
  color: string;
}

interface Theme {
  id: number;
  name: string;
  color: string;
}

const Content = styled.header`
  position: sticky;
  top: 0;
  width: 100%;
  height: 4rem;
  padding: 0 2rem;
  background-color: var(--color-background);
  box-shadow: 0 2px 4px var(--color-shadow);
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

const MenuLink = styled(Link)`
  margin: 0 0.5rem;
  color: var(--color-text);
  font: 700 1.125rem 'Nunito', sans-serif;

  &.active {
    color: var(--color-highlight);
    text-decoration: 'underline';
  }
`;

const ThemesContainer = styled.div`
  position: relative;
`;

const ThemesButton = styled.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font: 400 1.125rem 'Nunito', sans-serif;
  color: var(--color-text);
  cursor: pointer;
`;

const ThemesList = styled.ul`
  position: absolute;
  top: 3.5rem;
  left: 0;
  margin: 0;
  padding: 0 1rem;
  list-style: none;
  box-shadow: 0 0px 4px var(--color-shadow);
  transform: translateX(-80%);
  background: var(--color-background);
`;

const ThemeItem = styled.li`
  display: flex;
  margin: 0.75rem 0;
`;

const ThemeButton = styled.button<ThemeButtonProps>`
  display: flex;
  align-items: center;
  background-color: transparent;
  border: none;
  font: 400 1rem 'Nunito', sans-serif;
  color: var(--color-text);
  text-transform: capitalize;
  cursor: pointer;

  >span {
    display: block;
    width: 1.75rem;
    height: 1.75rem;
    margin-right: .5rem;
    border: none;
    outline: none;
    cursor: pointer;
    border-radius: 50%;
    background: ${props => props.color};
  }
`;

const THEMES = [
  {
    id: 1,
    name: 'default',
    color: '#F11A7B'
  },
  {
    id: 2,
    name: 'blueish',
    color: '#4682A9'
  },
  // {
  //   id: 3,
  //   name: 'candy',
  //   color: '#AB72C0'
  // },
  {
    id: 4,
    name: 'dark',
    color: '#202040'
  }
]

const Header: React.FC<PageProps> = () => {
  const [isTheme, setTheme] = useState(false);
  const [selectedTheme, setSelectedTheme] = useState(THEMES[0]);

  const handleThemeChange = (theme: Theme) => {
    document.body.className = '';
    document.body.classList.add(theme.name);

    setSelectedTheme(theme);
    setTheme(false);
  };

  const handleTheme = () => {
    setTheme(!isTheme);
  }

  const renderIcon = (name: string) => {
    switch (name) {
      case 'default':
        return (
          <Cookie
            color={selectedTheme.name === name ? 'var(--color-highlight)' : 'var(--color-text)'}
          />
        )
      case 'blueish':
        return (
          <Cupcake
            color={selectedTheme.name === name ? 'var(--color-highlight)' : 'var(--color-text)'}
          />
        )
      case 'dark':
        return (
          <Vampire
            color={selectedTheme.name === name ? 'var(--color-highlight)' : 'var(--color-text)'}
          />
        )
      default:
        return (
          <Cookie
            color={selectedTheme.name === name ? 'var(--color-highlight)' : 'var(--color-text)'}
          />
        )
    }
  }

  return (
    <Content>
      <HeaderWapper>
        <Link
          to='/'
          style={{ height: '70%', textDecoration: 'none', color: 'inherit' }}
        >
          <Logo src={logo} />
        </Link>
        <Nav>
          <MenuLink
            to='/'
            activeClassName='active'
          >
            About
          </MenuLink>
          <MenuLink
            to='/projects/'
            activeClassName='active'
          >
            Projects
          </MenuLink>
        </Nav>
        <ThemesContainer>
          <ThemesButton onClick={handleTheme}>
            {renderIcon(selectedTheme.name)}
          </ThemesButton>
          {isTheme && (
            <ThemesList>
              {THEMES.map((theme: Theme) => (
                <ThemeItem>
                  {renderIcon(theme.name)}
                  <ThemeButton
                    color={theme.color}
                    onClick={() => handleThemeChange(theme)}
                  >
                    {theme.name}
                  </ThemeButton>
                </ThemeItem>
              ))}
            </ThemesList>)}
        </ThemesContainer>
      </HeaderWapper>
    </Content>
  )
};

export default Header;
