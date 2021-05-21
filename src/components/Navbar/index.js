import React, { useState, useRef } from 'react';

import { routes } from '../../pages/routes';
import {
  HeaderContainer,
  HeaderLogo,
  HeaderLinks,
  StyledLink,
  IconLink,
} from '../UI/Header';
import { IconFaceBgColor, IconYoutubeBgColor } from '../UI/Icons';

import { useOnClickOutside } from '../../hooks/useOutSideClick';
import { Menu } from '../Menu';
import { Burger } from '../Burger';

export const Navbar = () => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));
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
        <IconLink href='link' target='_black'>
          <IconFaceBgColor />
        </IconLink>
        <IconLink href='link' target='_black'>
          <IconYoutubeBgColor />
        </IconLink>
        <div ref={node}>
          <Burger open={open} setOpen={setOpen} />
          <Menu open={open} setOpen={setOpen} />
        </div>
      </HeaderLinks>
    </HeaderContainer>
  );
};
