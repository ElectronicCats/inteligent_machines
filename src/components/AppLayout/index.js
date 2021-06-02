import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import {
  MainLayout,
  WrapperContent,
  WrapperNav,
  WrapperFootNav,
  WrapperFoot,
} from '../../styles/Layout';

import { Navbar } from '../Navbar';
import { Partners } from '../Partners';
import { routes } from '../../pages/routes';

export const AppLayout = ({ children }) => {
  return (
    <MainLayout>
      <>
        <WrapperNav>
          <Navbar />
        </WrapperNav>
        <WrapperContent>{children}</WrapperContent>
        <WrapperFootNav>
          <nav>
            {routes
              // ignoring the default path & home
              .filter(
                (route) =>
                  route.path !== '/' &&
                  route.path !== '*' &&
                  route.path !== 'demo'
              )
              .map((route) => (
                <Link
                  key={route.path}
                  to={route.path}
                  exact
                  activeClassName='current'
                >
                  {route.name}
                </Link>
              ))}
          </nav>
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
