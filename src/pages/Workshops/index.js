import React from 'react';

import red_sam from '../../assets/sam/red-sam.svg';
import { AppLayout } from '../../components/AppLayout';
import { TopContainer } from '../../components/GradientContainer';
import { ContainerTitle } from '../../components/UI/Content';
import { WorkshopCard } from '../../components/UI/Cards';
import { CenterDiv } from '../../styles/GlobalStyles';
import { WORKSHOPS } from '../../consts/Workshops';

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
        {WORKSHOPS.map((worker) => (
          <WorkshopCard key={worker.id}>
            <a target='_blank' href={worker.page} rel='noreferrer'>
              <img src={worker.imagePath} alt={worker.title} />
            </a>
            {worker.description}
          </WorkshopCard>
        ))}
      </TopContainer>
    </AppLayout>
  );
};
