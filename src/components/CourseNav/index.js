import React from 'react';
import { string } from 'prop-types';
// import { CURSES_CARDS } from '../../consts/courses/CardList';
import { RoundSpan } from '../Buttons/styles';
import { ContainerTitle } from '../UI/Content';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const IconStiledNav = styled(Link)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 50px;
  margin: 5px;
  font-size: ${({ size }) => (size ? size + 'em' : 'initial')};
  background: ${({ bgColor }) => (bgColor ? bgColor : 'var(--highligth)')};
  color: ${({ color }) => (color ? color : 'var(--main-fnt-color)')};
`;

export const CourseNav = ({ currentTitle, navNext, navPrev }) => {
  return (
    <div>
      <RoundSpan bgColor={'linear-gradient(var(--gradient));'} color='white'>
        {navPrev ? (
          <IconStiledNav
            bgColor={'var(--color-orange)'}
            color='white'
            size='1.5'
            to={navPrev}
          >
            {'<'}
          </IconStiledNav>
        ) : null}
        <ContainerTitle color={'white'} size='1.2'>
          {currentTitle}
        </ContainerTitle>
        {navNext ? (
          <IconStiledNav
            bgColor={'var(--color-orange)'}
            color='white'
            size='1.5'
            to={navNext}
          >
            {'>'}
          </IconStiledNav>
        ) : null}
      </RoundSpan>
    </div>
  );
};

CourseNav.defaultProps = {
  currentTitle: 'Title',
};
CourseNav.propTypes = {
  currentTitle: string,
  navNext: string,
  navPrev: string,
};
