import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import obj_trasn from '../../assets/devices/obj_trasn.svg';
import { CenterDiv } from '../../styles/GlobalStyles';
import { TopContainer } from '../../components/GradientContainer';
import {
  ContainerTitle,
  Container,
  ContainerP,
} from '../../components/UI/Content';

export const Objective = () => {
  return (
    <AppLayout>
      <>
        <TopContainer>
          <CenterDiv direction='row'>
            <ContainerTitle size={4} color='#fff'>
              {`OBJETIVOS`}
            </ContainerTitle>
            <img src={obj_trasn} alt='Sam' style={{ width: '300px' }} />
          </CenterDiv>
        </TopContainer>
        <Container>
          <ContainerTitle size={2} align='left'>
            OBJETIVO GENERAL
          </ContainerTitle>
          <ContainerP>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec eu
            maximus dolor. Integer consequat lacinia massa, a commodo nunc
            posuere sed. Quisque faucibus pretium ipsum, ut bibendum eros auctor
            sed. Fusce nec leo pulvinar, rutrum mauris vehicula, fringilla
            lectus. Cras accumsan eget metus at ornare. Aenean lobortis suscipit
            leo at mattis.
          </ContainerP>
          <ContainerTitle size={2} align='left'>
            OBJETIVOS PARTICULARES
          </ContainerTitle>
          <ContainerP>
            Nulla rutrum mi et molestie dictum. Proin rhoncus aliquam orci quis
            placerat. Praesent tortor lectus, varius eget eros sed, ornare
            gravida velit. Nulla augue lectus, varius vel ipsum sed, feugiat
            viverra ex. Vestibulum ante ipsum primis in faucibus orci luctus et
            ultrices posuere cubilia curae;
          </ContainerP>
        </Container>
      </>
    </AppLayout>
  );
};
