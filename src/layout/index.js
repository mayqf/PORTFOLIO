import React from 'react';
import PropTypes from 'prop-types';
import Div100vh from 'react-div-100vh';
import styled, { ThemeProvider } from 'styled-components';
import useDarkMode from '../utils/use-dark-mode';
import Header from './header';
import Footer from './footer';
import { darkTheme, lightTheme } from '../config/themes';

const Wrapper = styled.div`
  position: relative;
  background-color: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.secondary};

  transition: 0.2s ease-in-out;

  .main-footer-container {
    background-color: ${(props) => props.theme.colors.darker};
    padding: 0 1em;
    font-size: 1em;
  }

  @media (max-width: ${(props) => props.theme.breakpoints.sm}px) {
    font-size: 0.85rem;
    .main-footer-container {
      padding: 0 0.5em;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.md}px) {
    display: flex;

    .header-container {
      position: relative;
      width: 35%;
    }

    .main-footer-container {
      padding: 0 2em;
      width: 65%;
    }
  }

  @media (min-width: ${(props) => props.theme.breakpoints.xl}px) {
    font-size: 1.5rem;
  }
`;

const LoadingScreen = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 999;
  background: ${(props) => props.theme.colors.primary};

  @keyframes fade-out {
    0% {
      opacity: 1;
    }
    100% {
      opacity: 0;
      visibility: hidden;
    }
  }

  animation: fade-out 0.1s ease-out 0.25s both;
`;

const Layout = ({ children }) => {
  const darkMode = useDarkMode();

  return (
    <ThemeProvider theme={darkMode.value ? darkTheme : lightTheme}>
      <Wrapper>
        <LoadingScreen />
        <Div100vh className="header-container">
          <Header />
        </Div100vh>
        <div className="main-footer-container">
          <main>{children}</main>
          <Footer />
        </div>
      </Wrapper>
    </ThemeProvider>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
