import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/logo_desk.svg';
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
      <Link to='/'>
        <HeaderLogo src={logo} alt='Logo' />
      </Link>
      <HeaderLinks>
        {routes
          // ignoring the default path & home
          .filter(
            (route) =>
              route.path === '/curso' ||
              route.path === '/talleristas' ||
              route.path === '/mapa-curicular'
          )
          .map((route) => (
            <StyledLink
              data-link='nav-link'
              key={route.path}
              to={route.path}
              exact
              activeClassName='current'
            >
              {route.name}
            </StyledLink>
          ))}
        <IconLink
          href='https://www.facebook.com/electroniccats'
          target='_black'
        >
          <IconFaceBgColor />
        </IconLink>
        <IconLink
          href='https://www.youtube.com/channel/UCA9pODMFvrLEAB9vYWiLebg'
          target='_black'
        >
          <IconYoutubeBgColor />
        </IconLink>
      </HeaderLinks>
      <div ref={node} style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Menu open={open} setOpen={setOpen} />
        <Burger open={open} setOpen={setOpen} />
      </div>
    </HeaderContainer>
  );
};
