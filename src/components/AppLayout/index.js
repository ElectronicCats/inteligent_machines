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

export const AppLayout = ({ children }) => {
  return (
    <MainLayout>
      <>
        <WrapperNav>
          <Navbar />
        </WrapperNav>
        <WrapperContent>{children}</WrapperContent>
        <WrapperFootNav>
          <nav>Nav footer</nav>
        </WrapperFootNav>
        <WrapperFoot>
          <p>My Foother</p>
        </WrapperFoot>
      </>
    </MainLayout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
