import React from 'react';
import { element } from 'prop-types';
import styled from 'styled-components';
import { Container, BackgroundContainer } from '../UI/Content';

export const GradientBackground = styled(BackgroundContainer)`
  color: #fff;
  background: rgb(1, 124, 186);
  background: linear-gradient(var(--gradient));
`;
export const GradientContainer = ({ children }) => {
  return (
    <GradientBackground>
      <Container>{children}</Container>
    </GradientBackground>
  );
};

GradientContainer.propTypes = {
  children: element,
};
