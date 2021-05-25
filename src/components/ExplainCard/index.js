import React from 'react';
import { CardGrids } from '../UI/Cards';
import { ContalinerList } from '../UI/Content';

import { string, arrayOf } from 'prop-types';
import styled from 'styled-components';

export const Title = styled.h3`
  font-size: 4em;
  margin: auto;
  font-weight: bold;
  color: ${({ color }) => (color ? color : 'var(--highligth)')};
`;
export const ExplainCard = ({ title, color, bullets, descriptions }) => {
  return (
    <CardGrids>
      <Title color={color}>{title}</Title>
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
