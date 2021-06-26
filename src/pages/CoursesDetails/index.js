import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import { RoundLink } from '../../components/Buttons/styles';
import {
  Container,
  ContainerTitle,
  ContainerP,
} from '../../components/UI/Content';

export const CoursesDetails = ({
  match: {
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
        <ContainerP>DETALLES DE LA CLASE</ContainerP>
      </Container>
    </AppLayout>
  );
};
