import React from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';
import bluback from '../../assets/main-bg.svg';
import { BackgroundContainer, Container } from '../UI/Content';

export const BlueBackground = styled(BackgroundContainer)`
  color: #fff;
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
