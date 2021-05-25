import React from 'react';
import { CardGrids } from '../UI/Cards';
import { ContalinerList } from '../UI/Content';

import { string, arrayOf } from 'prop-types';

export const ExplainCard = ({ title, color, bullets, descriptions }) => {
  return (
    <CardGrids>
      <h3>{title}</h3>
      <div>
        {descriptions}
        <ContalinerList color={color}>
          {bullets.map((text, i) => {
            return <li key={`${title} bullet ${i}`}>{text}</li>;
          })}
        </ContalinerList>
      </div>
    </CardGrids>
  );
};
ExplainCard.propTypes = {
  title: string.isRequired,
  descriptions: string,
  bullets: arrayOf(string),
  color: string,
};
