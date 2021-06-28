import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import { RoundLink } from '../../components/Buttons/styles';
import { Container, ContainerTitle } from '../../components/UI/Content';
import { Course } from '../../components/Course';

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
        <RoundLink bgColor={'linear-gradient(var(--gradient));'} color='white'>
          {classId}
        </RoundLink>
        <ContainerTitle>{classId}</ContainerTitle>
        <Course />
      </Container>
    </AppLayout>
  );
};
