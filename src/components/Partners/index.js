import React from 'react';
import styled from 'styled-components';

import { CardGrids } from '../UI/Cards';
import { Container } from '../UI/Content';
import EC_logo from '../../assets/logos/logo-EC.svg';
import KY_logo from '../../assets/logos/logo-kybernus.svg';
import AR_logo from '../../assets/logos/logo-edu-arduino.svg';

export const PartnerLogo = styled.img`
  width: 250px;
`;
export const Partners = () => {
  return (
    <Container>
      <h4 style={{ fontWeight: 'bold', textAlign: 'center' }}>Con Apoyo de:</h4>
      <CardGrids align='end' cardSize='200px'>
        <a
          href='https://electroniccats.com/'
          target='_blank'
          rel='author noreferrer'
        >
          <PartnerLogo src={EC_logo} alt='Electronic cats' />
        </a>
        <a
          href='https://centroricardobsalinaspliego.org/kybernus/'
          target='_blank'
          rel='external noreferrer'
        >
          <PartnerLogo src={KY_logo} alt='Kybernus' />
        </a>
        <a
          href='https://www.arduino.cc/'
          target='_blank'
          rel='external noreferrer'
        >
          <PartnerLogo src={AR_logo} alt='Arduino education' />
        </a>
      </CardGrids>
    </Container>
  );
};
