import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import { RoundLink } from '../../components/Buttons/styles';
import { Container, ContainerTitle } from '../../components/UI/Content';
import { Course } from '../../components/Course';
import COURSES from '../../consts/courses';
import { CourseNav } from '../../components/CourseNav';
import { useCarrucelCourseNav } from '../../hooks/useCarrucelCourse';

export const CoursesDetails = ({
  // eslint-disable-next-line
  match: {
    // eslint-disable-next-line
    params: { classId },
  },
}) => {
  const { title, nexCoursePath, prevCoursePath } =
    useCarrucelCourseNav(classId);
  return (
    <AppLayout>
      <Container>
        <ContainerTitle>
          <CourseNav
            currentTitle={title}
            navNext={nexCoursePath}
            navPrev={prevCoursePath}
          />
        </ContainerTitle>
        <div style={{ margin: '25px 0' }}>
          <RoundLink
            bgColor={'var(--color-pink);'}
            color='white'
            href='https://store.arduino.cc/usa/tiny-machine-learning-kit'
            target='_blank'
          >
            Adquiere tu Kit Aquí
          </RoundLink>
        </div>
        <Course {...COURSES[classId]} />
      </Container>
    </AppLayout>
  );
};
