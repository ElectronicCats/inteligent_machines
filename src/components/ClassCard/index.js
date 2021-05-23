import React from 'react';
import { Card } from '../UI/Cards';
import { string } from 'prop-types';

export const ClassCard = ({ title, imgsrc }) => {
  return (
    <Card>
      <img src={imgsrc} alt={title} />
      <h3>{title}</h3>
    </Card>
  );
};
ClassCard.propTypes = {
  title: string.isRequired,
  imgsrc: string.isRequired,
};
