import React from 'react';

import { CardGrids } from '../UI/Cards';
import { Container } from '../UI/Content';
import EC_logo from '../../assets/logos/logo-EC.svg';
import KY_logo from '../../assets/logos/logo-kybernus.svg';
import AR_logo from '../../assets/logos/logo-edu-arduino.svg';

export const Partners = () => {
  return (
    <Container>
      <h4 style={{ fontWeight: 'bold', textAlign: 'center' }}>Con Apoyo de:</h4>
      <CardGrids align='end'>
        <img src={EC_logo} alt='Electronic cats' />
        <img src={KY_logo} alt='Kybernus' />
        <img src={AR_logo} alt='Arduino education' />
      </CardGrids>
    </Container>
  );
};
