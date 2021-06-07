import React from 'react';
import { ExplainCard } from '../ExplainCard';
import { TabPanel } from '@zendeskgarden/react-tabs';
import { arrayOf, shape, string } from 'prop-types';

export const Introduction = ({ introClass }) => {
  return (
    <TabPanel item='tab-1'>
      {introClass.map(({ title, description }) => {
        return (
          <ExplainCard
            key={title}
            title={title}
            color='var(--color-blue)'
            descriptions={description}
          />
        );
      })}
    </TabPanel>
  );
};
Introduction.defaultProps = {
  introClass: [
    {
      title: 'OBJETIVO',
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem.`,
    },
    {
      title: 'APRENDIZAJE ESPERADO',
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem.`,
    },
    {
      title: `COMPETENCIA QUE \nSE FAVORECE`,
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem.`,
    },
    {
      title: `CONTENIDOS \nTEMÁTICOS`,
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem.`,
    },
  ],
};
Introduction.propTypes = {
  introClass: arrayOf(
    shape({
      title: string,
      description: string,
    })
  ),
};
