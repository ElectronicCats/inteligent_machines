import React from 'react';
import PropTypes from 'prop-types';

import {
  MainLayout,
  WrapperContent,
  WrapperNav,
  WrapperFootNav,
  WrapperFoot,
} from '../../styles/Layout';

import { Navbar } from '../Navbar';
import { Partners } from '../Partners';

export const AppLayout = ({ children }) => {
  return (
    <MainLayout>
      <>
        <WrapperNav>
          <Navbar />
        </WrapperNav>
        <WrapperContent>{children}</WrapperContent>
        <WrapperFootNav>
          <nav></nav>
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
