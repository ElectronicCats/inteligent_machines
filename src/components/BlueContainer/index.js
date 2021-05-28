import React from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';
import bluback from '../../assets/main-bg.svg';
import { Container } from '../UI/Content';

export const BlueBackground = styled.div`
  width: 100%;
  min-height: 600px;
  background-size: cover;
  background-repeat: no-repeat;
  background-image: url(${bluback});
`;
export const BlueContainer = ({ children }) => {
  return (
    <BlueBackground>
      <Container>{children}</Container>
    </BlueBackground>
  );
};

BlueContainer.propTypes = {
  children: element,
};
