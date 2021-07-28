import React from 'react';

import thanks_laptop from '../../assets/thanks/thanks_laptop.svg';
import logo_arduino from '../../assets/thanks/logo_arduino.svg';
import logo_hacedores from '../../assets/thanks/logo_hacedores.svg';
import logo_ilce from '../../assets/thanks/logo_ilce.svg';
import logo_kybernus from '../../assets/logos/logo-kybernus.svg';
import { AppLayout } from '../../components/AppLayout';
import { CrossBarContainer } from '../../components/GradientContainer';
import { CenterDiv } from '../../styles/GlobalStyles';
import { Container, ContainerTitle } from '../../components/UI/Content';
import { ThanksCard } from '../../components/ClassCard/ThanksCard';
import { CardGrids } from '../../components/UI/Cards';

export const Thanks = () => {
  return (
    <AppLayout>
      <CrossBarContainer>
        <CenterDiv>
          <img
            src={thanks_laptop}
            alt='thanks laptop'
            style={{ width: '100%', minWidth: '340px', maxWidth: '640px' }}
          />
        </CenterDiv>
      </CrossBarContainer>
      <Container>
        <ContainerTitle size='2'>
          De la manera mas cordial queremos agradecer el apoyo proporcionado por
        </ContainerTitle>
        <CardGrids style={{ margin: '20px 0', gap: '2rem 1rem' }}>
          <ThanksCard imgsrc={logo_arduino} description={''} />
          <ThanksCard imgsrc={logo_hacedores} description={''} />
          <ThanksCard imgsrc={logo_ilce} description={''} />
          <ThanksCard imgsrc={logo_kybernus} description={''} />
        </CardGrids>
      </Container>
    </AppLayout>
  );
};
