import React from 'react';
import { string } from 'prop-types';

import { CenterDiv } from '../../styles/GlobalStyles';
import { SimpleCard } from '../UI/Cards';
import { ContainerP } from '../UI/Content';

export const ThanksCard = ({ description, imgsrc, title }) => {
  return (
    <CenterDiv direction='row'>
      <SimpleCard>
        <img src={imgsrc} alt={title} />
      </SimpleCard>
      <ContainerP style={{ width: '150px' }}>{description}</ContainerP>
    </CenterDiv>
  );
};

ThanksCard.propTypes = {
  title: string,
  description: string.isRequired,
  imgsrc: string.isRequired,
};
