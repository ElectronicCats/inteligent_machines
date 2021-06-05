import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

import {
  MainLayout,
  WrapperContent,
  WrapperNav,
  WrapperFootNav,
  WrapperFoot,
} from '../../styles/Layout';

import { Navbar } from '../Navbar';
import { Partners } from '../Partners';
import { FootNav } from '../Navbar/FootNav';

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

export const AppLayout = ({ children }) => {
  return (
    <MainLayout>
      <>
        <WrapperNav>
          <Navbar />
        </WrapperNav>
        <WrapperContent>{children}</WrapperContent>
        <WrapperFootNav>
          <FootNav />
        </WrapperFootNav>
        <WrapperFoot>
          <Partners />
        </WrapperFoot>
      </>
    </MainLayout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
