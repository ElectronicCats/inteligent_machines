import React from 'react';
import { arrayOf, shape, string } from 'prop-types';
import { Link } from 'react-router-dom';

import { CURSES_CARDS } from '../../consts/courses/CardList';
import { ClassCard } from '../../components/ClassCard';
import { CardGrids } from '../../components/UI/Cards';
import { TopContainer } from '../../components/GradientContainer';

export const CourseList = ({ coursesCards }) => {
  return (
    <TopContainer>
      <CardGrids>
        {coursesCards.map((card) => {
          return (
            <Link key={card.id} to={`/class/${card.id}`}>
              <ClassCard title={card.couseName} imgsrc={card.imagePath} />
            </Link>
          );
        })}
      </CardGrids>
    </TopContainer>
  );
};

CourseList.defaultProps = {
  coursesCards: CURSES_CARDS,
};
CourseList.propTypes = {
  coursesCards: arrayOf(
    shape({
      id: string,
      couseName: string,
      imagePath: string,
    })
  ),
};
