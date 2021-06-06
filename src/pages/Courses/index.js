import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import devices from '../../assets/devices/curso_pcs.svg';
import { ContainerTitle } from '../../components/UI/Content';
import { GradientContainer } from '../../components/GradientContainer';

import { CenterDiv } from '../../styles/GlobalStyles';
import { CardGrids } from '../../components/UI/Cards';
import { CourseList } from '../../components/CourseList';

export const Courses = () => {
  return (
    <AppLayout>
      <section>
        <GradientContainer>
          <>
            <CardGrids>
              <CenterDiv>
                <ContainerTitle size='2' color='#fff'>
                  Curso completo
                </ContainerTitle>
                <p
                  style={{
                    textAlign: 'right',
                    lineHeight: 1.5,
                    marginInline: '20px 40px',
                  }}
                >
                  Este curso esta abierto para su duplicacion, es libre y
                  gratuito.
                  <br />
                  No sabes donde iniciar, te sugerimos leer nuestra{' '}
                  <em>Guia de Arranque</em>
                  <br />
                  Máquinas Inteligentes tiene el objetivo de introducirte en la ciencia de
                  datos y de desarrollar habilidades y competencias básicas para la
                  solución de problemas, creatividad, todo esto con la aplicación de
                  conceptos de electrónica, programación e inteligencia artificial
                </p>
              </CenterDiv>
              <img src={devices} alt='chips' />
            </CardGrids>
          </>
        </GradientContainer>
        <CourseList />
      </section>
    </AppLayout>
  );
};
