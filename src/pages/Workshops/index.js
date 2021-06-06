import React from 'react';

import red_sam from '../../assets/sam/red-sam.svg';
import { AppLayout } from '../../components/AppLayout';
import { TopContainer } from '../../components/BlueContainer';
import { ContainerTitle } from '../../components/UI/Content';
import { WorkshopCard } from '../../components/UI/Cards';
import { CenterDiv } from '../../styles/GlobalStyles';

export const Workshops = () => {
  return (
    <AppLayout>
      <TopContainer>
        <CenterDiv direction='row'>
          <img src={red_sam} alt='Sam' style={{ width: '200px' }} />
          <ContainerTitle size={4} color='#fff'>
            {`Red de \nTalleristas`}
          </ContainerTitle>
        </CenterDiv>
        <WorkshopCard>
          <img src='' alt='Logo Tallerista' />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet
          varius pretium. Donec cursus id tortor vel scelerisque. Nunc volutpat
          sem a erat efficitur, quis varius libero molestie. Sed posuere risus
          efficitur semper dignissim. Aenean quis iaculis dui. Nullam sed nisl
          at lorem euismod dapibus. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </WorkshopCard>
        <WorkshopCard>
          <img src='' alt='Logo Tallerista' />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet
          varius pretium. Donec cursus id tortor vel scelerisque. Nunc volutpat
          sem a erat efficitur, quis varius libero molestie. Sed posuere risus
          efficitur semper dignissim. Aenean quis iaculis dui. Nullam sed nisl
          at lorem euismod dapibus. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </WorkshopCard>
        <WorkshopCard>
          <img src='' alt='Logo Tallerista' />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In imperdiet
          varius pretium. Donec cursus id tortor vel scelerisque. Nunc volutpat
          sem a erat efficitur, quis varius libero molestie. Sed posuere risus
          efficitur semper dignissim. Aenean quis iaculis dui. Nullam sed nisl
          at lorem euismod dapibus. Pellentesque habitant morbi tristique
          senectus et netus et malesuada fames ac turpis egestas.
        </WorkshopCard>
      </TopContainer>
    </AppLayout>
  );
};
