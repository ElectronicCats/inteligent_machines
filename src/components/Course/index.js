import React, { useState } from 'react';
import styled from 'styled-components';
import { Tabs, TabList, Tab } from '@zendeskgarden/react-tabs';
import { ThemeProvider } from '@zendeskgarden/react-theming';
import { Introduction } from './Introduction';
import { CourseClass } from './CourseClass';
import { Resourses } from './Resourses';
import { Practice } from './Practice';
import { Plan } from './Plan';

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
