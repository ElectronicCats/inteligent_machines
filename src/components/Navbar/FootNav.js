import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import { routes } from '../../pages/routes';
import { Container } from '../UI/Content';
import { CenterDiv } from '../../styles/GlobalStyles';

export const StyledFooterLink = styled(NavLink)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 10px 5px;
  margin: 0 5px;

  &.${({ activeClassName }) => activeClassName} {
    color: var(--color-blue);
  }
  color: var(--main-fnt-color);
  font-weight: 100;
  font-size: 1.2rem;
`;
export const FootNav = () => {
  return (
    <Container>
      <CenterDiv direction='row'>
        {routes
          // ignoring the default path & home
          .filter(
            (route) =>
              route.path !== '/' && route.path !== '*' && route.path !== 'demo'
          )
          .map((route) => (
            <StyledFooterLink
              key={route.path}
              to={route.path}
              exact
              activeClassName='current'
            >
              {route.name}
            </StyledFooterLink>
          ))}
      </CenterDiv>
    </Container>
  );
};
