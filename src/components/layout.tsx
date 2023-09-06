// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import Header from './header';

// Reset
import '../pages/global.css';
import Footer from './footer';

// Styles
const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  background: var(--color-background);
  overflow: hidden;
`;

const Layout = ({
  children,
}) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
      <Footer />
    </Container>
  )
};

export default Layout;