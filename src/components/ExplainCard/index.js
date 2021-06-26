import React from 'react';
import { CardGrids } from '../UI/Cards';
import { ContalinerList, ContainerTitle } from '../UI/Content';

import { string, arrayOf } from 'prop-types';

export const ExplainCard = ({ title, color, bullets, descriptions }) => {
  return (
    <article style={{ margin: '20px', maxWidth: '770px' }}>
      <CardGrids>
        <ContainerTitle
          size='3'
          color={color}
          aling='center'
          style={{ alignSelf: 'center' }}
        >
          {title}
        </ContainerTitle>
        <div style={{ alignSelf: 'center' }}>
          {descriptions}
          {bullets ? (
            <ContalinerList color={color}>
              {bullets.map((text, i) => {
                return <li key={`${title} bullet ${i}`}>{text}</li>;
              })}
            </ContalinerList>
          ) : null}
        </div>
      </CardGrids>
    </article>
  );
};
ExplainCard.propTypes = {
  title: string.isRequired,
  descriptions: string,
  bullets: arrayOf(string),
  color: string,
};
