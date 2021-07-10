import React from 'react';
import { TabPanel } from '@zendeskgarden/react-tabs';
import { arrayOf, shape, string } from 'prop-types';

import { ExplainCard } from '../ExplainCard';
import { CenterDiv } from '../../styles/GlobalStyles';

export const Introduction = ({ introClass, vimeoSrc }) => {
  return (
    <TabPanel item='tab-1'>
      {introClass.map(({ title, description, bullets }) => {
        return (
          <ExplainCard
            key={title}
            title={title}
            color='var(--color-blue)'
            descriptions={description}
            bullets={bullets}
            cardSize='300px'
          />
        );
      })}
      <CenterDiv>
        <iframe
          id='my_frame'
          title='intro Video'
          src={vimeoSrc}
          frameBorder='0'
          allow='autoplay; fullscreen'
          allowFullScreen
          style={{
            width: '100%',
            minWidth: '340px',
            maxWidth: '640px',
            height: '564px',
          }}
        ></iframe>
      </CenterDiv>
    </TabPanel>
  );
};
Introduction.defaultProps = {
  vimeoSrc: 'https://player.vimeo.com/video/522444610',
  introClass: [
    {
      title: 'OBJETIVO',
      description: `orem ipsum dolor sit amet, consectetur adipiscing elit.
        Suspendisse vel vehicula leo. Etiam rhoncus et erat id sagittis.
        Donec placerat tempus facilisis. Aenean sollicitudin commodo leo,
        ac feugiat lorem tincidunt nec. Proin dictum risus vel nisl blandit,
        id tincidunt turpis tristique. Donec sollicitudin scelerisque lorem.`,
      bullets: ['lalaalla', 'Arduino 1'],
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
      bullets: ['lalaalla', 'Arduino 1'],
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
  vimeoSrc: string,
  introClass: arrayOf(
    shape({
      title: string,
      description: string,
    })
  ),
};
