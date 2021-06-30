import React from 'react';
import { AppLayout } from '../../components/AppLayout';
import { CrossBarContainer } from '../../components/GradientContainer';
import { CenterDiv } from '../../styles/GlobalStyles';
import thanks_laptop from '../../assets/thanks/thanks_laptop.svg';

export const Thanks = () => {
  return (
    <AppLayout>
      <CrossBarContainer>
        <CenterDiv>
          <img
            src={thanks_laptop}
            alt='thanks laptop'
            style={{ width: '600px' }}
          />
        </CenterDiv>
      </CrossBarContainer>
    </AppLayout>
  );
};
