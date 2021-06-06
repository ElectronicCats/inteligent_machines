/* eslint-disable react/jsx-key */
import React from 'react';

import { AppLayout } from '../../components/AppLayout';
import { GradientContainerRound } from '../../components/GradientContainer';
import { ContainerTitle } from '../../components/UI/Content';
import { Table } from '../../components/Tables';

export const Cvmap = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Sesión',
        accessor: 'session',
      },
      {
        Header: 'Objetivo',
        accessor: 'objective',
      },
      {
        Header: 'Aprendizaje \nEsperado',
        accessor: 'learn',
      },
      {
        Header: 'Competencia \nque se \nFavorecce',
        accessor: 'upper',
      },
      {
        Header: 'Contenidos \nTemáticos',
        accessor: 'themes',
      },
      {
        Header: 'Materias \nVinculadas',
        accessor: 'others',
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        session: 'Alejandro',
        objective: 'Medina',
        learn: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        upper: Math.floor(Math.random() * 100),
        themes: 'relationship',
        others: 'lalalala',
      },
      {
        session: 'Alejandro',
        objective: 'Medina',
        learn: Math.floor(Math.random() * 30),
        visits: Math.floor(Math.random() * 100),
        upper: Math.floor(Math.random() * 100),
        themes: 'relationship',
        others: 'lalalala',
      },
    ],
    []
  );

  return (
    <AppLayout>
      <>
        <GradientContainerRound>
          <ContainerTitle color='#fff' size='5'>
            Mapa curicular
          </ContainerTitle>
        </GradientContainerRound>
        <Table columns={columns} data={data} />
      </>
    </AppLayout>
  );
};
