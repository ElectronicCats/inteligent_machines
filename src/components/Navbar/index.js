import React from 'react';

import { routes } from '../../pages/routes';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLinks,
  StyledLink,
} from '../UI/Header';

export const Navbar = () => {
  return (
    <HeaderContainer>
      <HeaderLogo
        src='https://avatars.githubusercontent.com/u/5388080?v=4'
        alt='Logo'
      />
      <HeaderLinks>
        {routes
          // ignoring the default path & home
          .filter((route) => route.path !== '*' && route.path !== '/')
          .map((route) => (
            <StyledLink data-link='nav-link' key={route.path} to={route.path}>
              {route.name}
            </StyledLink>
          ))}
        <a href='link' target='_black'>
          FaceBoock
        </a>
        <a href='link' target='_black'>
          Youtube
        </a>
      </HeaderLinks>
    </HeaderContainer>
  );
};
