import React from 'react';
import { string, bool, node } from 'prop-types';

import { CenterDiv } from '../../styles/GlobalStyles';
import { SimpleCard } from '../UI/Cards';
import { ContainerP } from '../UI/Content';

export const ThanksCard = ({ description, imgsrc, title, addCard = true }) => {
  return (
    <CenterDiv direction='row'>
      {addCard ? (
        <SimpleCard>
          <img src={imgsrc} alt={title} />
        </SimpleCard>
      ) : (
        <img src={imgsrc} alt={title} />
      )}

      <ContainerP style={{ maxWidth: '150px' }}>{description}</ContainerP>
    </CenterDiv>
  );
};

ThanksCard.propTypes = {
  title: string,
  addCard: bool,
  description: string.isRequired | node,
  imgsrc: string.isRequired,
};
