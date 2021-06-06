/* eslint-disable react/jsx-key */
import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';

import { AppLayout } from '../../components/AppLayout';
import { GradientContainerRound } from '../../components/GradientContainer';
import { ContainerTitle } from '../../components/UI/Content';

const StylesTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  color: ${({ color }) => (color ? color : 'var(--highligth)')};
  table {
    border-spacing: 0;
    border: 0;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }
    thead th {
      border: 0;
    }
    th,
    td {
      height: 150px;
      width: 150px;
      text-align: center;
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid
        ${({ color }) => (color ? color : 'var(--highligth)')};
      border-right: 1px solid
        ${({ color }) => (color ? color : 'var(--highligth)')};

      :last-child {
        border-right: 0;
      }
    }
  }
`;
// eslint-disable-next-line
function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <table {...getTableProps()}>
      <thead>
        {headerGroups.map((headerGroup) => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column) => (
              <th {...column.getHeaderProps()}>{column.render('Header')}</th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody {...getTableBodyProps()}>
        {rows.map((row, i) => {
          prepareRow(row);
          return (
            <tr {...row.getRowProps()}>
              {row.cells.map((cell) => {
                return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>;
              })}
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
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
        <StylesTable>
          <Table columns={columns} data={data} />
        </StylesTable>
      </>
    </AppLayout>
  );
};
