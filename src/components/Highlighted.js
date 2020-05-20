import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const Span = styled.span`
  position: relative;
  font-weight: bold;
  text-transform: uppercase;
  z-index: 1;
  color: ${(props) => props.theme.colors.light};

  &::before {
    content: '';
    z-index: -1;
    position: absolute;
    left: -8%;
    top: 1.5%;
    height: 110%;
    width: 120%;
    background-color: ${(props) => props.theme.colors.highlight};
    border-radius: 10px;
   
  }
`;

const Highlighted = ({ children }) => {
  return <Span>{children}</Span>;
};

Highlighted.propTypes = {
  children: PropTypes.string.isRequired,
};

export default Highlighted;
