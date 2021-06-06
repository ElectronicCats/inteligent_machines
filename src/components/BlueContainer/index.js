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

export const TopBackground = styled(BackgroundContainer)`
  background: linear-gradient(to top left, white 50%, transparent 50%),
    linear-gradient(to top right, white 50%, transparent 50%),
    linear-gradient(90deg, #0071b5 0%, #00ff95 100%);
`;
export const TopContainer = ({ children }) => {
  return (
    <TopBackground>
      <Container>{children}</Container>
    </TopBackground>
  );
};

TopContainer.propTypes = {
  children: element,
};
