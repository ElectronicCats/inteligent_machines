import React from 'react';
import { arrayOf, shape, string, number } from 'prop-types';

import { ContainerTitle } from '../../components/UI/Content';
import { Table } from '../../components/Tables';
import { TabPanel } from '@zendeskgarden/react-tabs';

export const Plan = ({ tableConent }) => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Tema',
        accessor: 'theme',
      },
      {
        Header: 'Objetivo',
        accessor: 'objective',
      },
      {
        Header: 'Actividades',
        accessor: 'activitie',
      },
      {
        Header: 'Materiales',
        accessor: 'material',
      },
      {
        Header: 'Min.Clase',
        accessor: 'classTime',
      },
    ],
    []
  );
  const data = React.useMemo(() => tableConent, [tableConent]);
  return (
    <TabPanel item='tab-5'>
      <ContainerTitle size='2' align='center' color='var(--color-purple)'>
        ESTRUCTURA DE LA CLASE
      </ContainerTitle>
      <Table columns={columns} data={data} color='var(--color-purple)' />
    </TabPanel>
  );
};

Plan.defaultProps = {
  tableConent: [
    {
      theme: 'Alejandro',
      objective: 'Medina',
      activitie: 'relationship',
      material: 'lalalala',
      classTime: Math.floor(Math.random() * 100),
    },
    {
      theme: 'Mario',
      objective: 'marambo',
      activitie: 'relationship',
      material: 'lalalala',
      classTime: Math.floor(Math.random() * 100),
    },
  ],
};
Plan.propTypes = {
  tableConent: arrayOf(
    shape({
      theme: string,
      objective: string,
      activitie: string,
      material: string,
      classTime: string | number,
    })
  ),
};
