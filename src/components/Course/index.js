import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs, TabList, Tab, TabPanel } from '@zendeskgarden/react-tabs';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { ExplainCard } from '../ExplainCard';
import { DropContent } from '../../components/DropContent';
import { ContainerTitle } from '../../components/UI/Content';
import { DownLoadButton } from '../../components/Buttons';
import { CardGrids } from '../../components/UI/Cards';
import { Table } from '../../components/Tables';
// eslint-disable-next-line
const TABS = [
  {
    item: 'tab-1',
    label: 'Introducción',
    color: 'var(--color-blue)',
  },
  {
    item: 'tab-2',
    label: 'Clase',
    color: 'var(--color-green)',
  },
  {
    item: 'tab-3',
    label: 'Recursos',
    color: 'var(--color-orange)',
  },
  {
    item: 'tab-4',
    label: 'Práctica',
    color: 'var(--color-pink)',
  },
  {
    item: 'tab-5',
    label: 'Plan de sesión',
    color: 'var(--color-purple)',
  },
];
const StyledTab = styled(Tab)`
  color: ${({ color }) => (color ? color : 'var(--highligth)')};
  padding: 20px;
  font-size: 1.5em;
  &:hover {
    color: ${({ color }) => (color ? color : 'var(--highligth)')};
  }
`;
const StyledTabsList = styled(TabList)`
  display: flex;
  justify-content: space-around;
`;
const Introduction = () => {
  return (
    <TabPanel item='tab-1'>
      <ExplainCard
        title='OBJETIVO'
        color='var(--color-blue)'
        descriptions={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem, quis`}
      />
      <ExplainCard
        title={`APRENDIZAJE ESPERADO`}
        color='var(--color-blue)'
        descriptions={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem, quis`}
      />
      <ExplainCard
        title={`COMPETENCIA QUE \nSE FAVORECE`}
        color='var(--color-blue)'
        descriptions={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem, quis`}
      />
      <ExplainCard
        title={`CONTENIDOS \nTEMÁTICOS`}
        color='var(--color-blue)'
        descriptions={`
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem, quis`}
      />
    </TabPanel>
  );
};
const CourseClass = () => {
  return (
    <TabPanel item='tab-2'>
      <CardGrids>
        <ContainerTitle size='3' color='var(--color-green)'>
          CONTENIDO DE CLASE
        </ContainerTitle>
        <DownLoadButton
          pathToFile='/assets/logo_desk.png'
          downloadName='lodo_inteligent'
          bgColor='var(--color-green)'
          label='Nombre del archivo a descargar'
        />
      </CardGrids>
      <DropContent title='Clase 1' color='var(--color-green)'>
        <h3>Hello</h3>
      </DropContent>
      <DropContent title='Clase 2' color='var(--color-green)'>
        <h3>World</h3>
      </DropContent>
      <DropContent title='Clase 3' color='var(--color-green)'>
        <h3>World</h3>
      </DropContent>
    </TabPanel>
  );
};
const Practice = () => {
  return (
    <TabPanel item='tab-4'>
      <ContainerTitle size='2' align='left' color='var(--color-pink)'>
        PRÁCTICA
      </ContainerTitle>
      <ContainerTitle size='1.3' align='left' color='var(--color-pink)'>
        TIEMPO ESTIMADO <i style={{ fontWeight: '200' }}>00:00 MINUTOS</i>
      </ContainerTitle>

      <DropContent title='Material' color='var(--color-pink)'>
        <h3>Hello</h3>
      </DropContent>
      <DropContent title='Objetivo' color='var(--color-pink)'>
        <h3>World</h3>
      </DropContent>
      <DropContent title='Procedimiento' color='var(--color-pink)'>
        <h3>World</h3>
      </DropContent>
    </TabPanel>
  );
};
const Resourses = () => {
  return (
    <TabPanel item='tab-3'>
      <DownLoadButton
        pathToFile='/assets/logo_desk.png'
        downloadName='lodo_inteligent'
        bgColor='var(--color-orange)'
        label='Nombre del archivo a descargar'
      />
    </TabPanel>
  );
};
const Plan = () => {
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
        accessor: 'class',
      },
    ],
    []
  );
  const data = React.useMemo(
    () => [
      {
        theme: 'Alejandro',
        objective: 'Medina',
        activitie: 'relationship',
        material: 'lalalala',
        class: Math.floor(Math.random() * 100),
      },
      {
        theme: 'Alejandro',
        objective: 'Medina',
        activitie: 'relationship',
        material: 'lalalala',
        class: Math.floor(Math.random() * 100),
      },
    ],
    []
  );
  return (
    <TabPanel item='tab-5'>
      <ContainerTitle size='2' align='center' color='var(--color-purple)'>
        ESTRUCTURA DE LA CLASE
      </ContainerTitle>
      <Table columns={columns} data={data} color='var(--color-purple)' />
    </TabPanel>
  );
};
export const Course = () => {
  const [selectedTab, setSelectedTab] = useState('tab-1');

  return (
    <ThemeProvider>
      <Tabs selectedItem={selectedTab} onChange={setSelectedTab}>
        <StyledTabsList>
          {TABS.map((tab) => {
            return (
              <StyledTab key={tab.item} item={tab.item} color={tab.color}>
                {tab.label}
              </StyledTab>
            );
          })}
        </StyledTabsList>

        <Introduction />
        <CourseClass />
        <Resourses />
        <Practice />
        <Plan />
      </Tabs>
    </ThemeProvider>
  );
};
