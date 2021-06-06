import React from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';
import { Container, BackgroundContainer } from '../UI/Content';

export const GradientBackground = styled(BackgroundContainer)`
  color: #fff;
  background: rgb(1, 124, 186);
  background: linear-gradient(var(--gradient));
`;
export const GradientBackgroundCircle = styled(BackgroundContainer)`
  color: #fff;
  background: rgb(0, 224, 171);
  background: linear-gradient(
    25deg,
    rgba(0, 224, 171, 0.9332107843137255) 0%,
    rgba(1, 124, 186, 0.5746673669467788) 32%,
    rgba(255, 255, 255, 0.773546918767507) 55%
  );
`;
export const GradientContainer = ({ children }) => {
  return (
    <GradientBackground>
      <Container>{children}</Container>
    </GradientBackground>
  );
};
export const GradientContainerCircle = ({ children }) => {
  return (
    <GradientBackgroundCircle>
      <Container>{children}</Container>
    </GradientBackgroundCircle>
  );
};
export const GradientBackgroundRound = styled(GradientBackground)`
  border-bottom-right-radius: 150px;
  border-bottom-left-radius: 150px;
`;
export const GradientContainerRound = ({ children }) => {
  return (
    <GradientBackgroundRound>
      <Container>{children}</Container>
    </GradientBackgroundRound>
  );
};

export const TopBackground = styled(BackgroundContainer)`
  background: linear-gradient(to top left, white 30%, transparent 30%),
    linear-gradient(to top right, white 20%, transparent 10%),
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

GradientContainer.propTypes = {
  children: element,
};

GradientContainerCircle.propTypes = {
  children: element,
};

GradientContainerRound.propTypes = {
  children: element,
};
