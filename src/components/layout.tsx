// Libs
import React from 'react';
import styled from 'styled-components';

// Components
import Header from './header';

// Reset
import '../pages/global.css';

// Styles
const Container = styled.div`
  position: relative;
  width: 100%;
`;

const Layout = ({
  children,
}) => {
  return (
    <Container>
      <Header />
      <main>{children}</main>
    </Container>
  )
};

export default Layout;