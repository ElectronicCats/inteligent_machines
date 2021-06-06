/* eslint-disable react/jsx-key */
import React from 'react';
import styled from 'styled-components';
import { useTable } from 'react-table';
import { string, array } from 'prop-types';

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
      background-color: ${({ color }) => (color ? color : 'trasparent')};
      color: ${({ color }) => (color ? '#fff' : color)};
      height: 50px;
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
export const  Table = ({ columns, data, color }) => {
  // Use the state and functions returned from useTable to build your UI
  const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } =
    useTable({
      columns,
      data,
    });

  // Render the UI for your table
  return (
    <StylesTable color={color}>
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
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </StylesTable>
  );
};

Table.propTypes = {
  data: array.isRequired,
  columns: array.isRequired,
  color: string,
};
