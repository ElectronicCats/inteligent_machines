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
import { CardGrids } from '../UI/Cards';
import { Container } from '../UI/Content';
import EC_logo from '../../assets/logos/logo-EC.svg';
import KY_logo from '../../assets/logos/logo-kybernus.svg';
import AR_logo from '../../assets/logos/logo-edu-arduino.svg';

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
          <Container>
            <CardGrids align='end'>
              <img src={EC_logo} alt='Electronic cats' />
              <img src={KY_logo} alt='Kybernus' />
              <img src={AR_logo} alt='Arduino education' />
            </CardGrids>
          </Container>
        </WrapperFoot>
      </>
    </MainLayout>
  );
};

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};
