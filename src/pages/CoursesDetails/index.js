import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import { RoundLink } from '../../components/Buttons/styles';
import { Container, ContainerTitle } from '../../components/UI/Content';
import { Course } from '../../components/Course';
import COURSES from '../../consts/courses';
export const CoursesDetails = ({
  // eslint-disable-next-line
  match: {
    // eslint-disable-next-line
    params: { classId },
  },
}) => {
  return (
    <AppLayout>
      <Container>
        <ContainerTitle>
          <RoundLink
            bgColor={'linear-gradient(var(--gradient));'}
            color='white'
          >
            {COURSES[classId].name}
          </RoundLink>
        </ContainerTitle>
        <Course {...COURSES[classId]} />
      </Container>
    </AppLayout>
  );
};
