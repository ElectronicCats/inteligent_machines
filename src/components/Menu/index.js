import React from 'react';
import { StyledMenu } from '../UI/Header';
import { bool } from 'prop-types';
import { routes } from '../../pages/routes';
import { StyledLink } from '../UI/Header';
export const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
      {routes
        // ignoring the default path & home
        .filter(
          (route) =>
            route.path !== '/' && route.path !== '*' && route.path !== '/demo'
        )
        .map((route) => (
          <StyledLink
            key={route.path}
            data-link='nav-link'
            to={route.path}
            exact
            activeClassName='current'
          >
            {route.name}
          </StyledLink>
        ))}
    </StyledMenu>
  );
};
Menu.propTypes = {
  open: bool.isRequired,
};
