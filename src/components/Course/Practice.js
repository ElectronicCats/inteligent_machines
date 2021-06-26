import React from 'react';
import { TabPanel } from '@zendeskgarden/react-tabs';
import { string, arrayOf } from 'prop-types';

import { ContainerTitle, ContalinerList, ContainerP } from '../UI/Content';
import { DropContent } from '../../components/DropContent';

export const Practice = ({
  color,
  precticeName,
  time,
  meterials,
  objective,
  steps,
}) => {
  return (
    <TabPanel item='tab-4'>
      <ContainerTitle size='2' align='left' color={color}>
        {precticeName}
      </ContainerTitle>
      <ContainerTitle size='1.3' align='left' color={color}>
        TIEMPO ESTIMADO <i style={{ fontWeight: '200' }}>{time}</i>
      </ContainerTitle>
      <DropContent title='Material' color={color}>
        <div>
          <ContalinerList color={color}>
            {meterials.map((text, i) => {
              return <li key={`${text} bullet ${i}`}>{text}</li>;
            })}
          </ContalinerList>
        </div>
      </DropContent>
      <DropContent title='Objetivo' color={color}>
        <ContainerP>{objective}</ContainerP>
      </DropContent>
      <DropContent title='Procedimiento' color={color}>
        <ContainerP>{steps}</ContainerP>
      </DropContent>
    </TabPanel>
  );
};

Practice.defaultProps = {
  color: 'var(--color-pink)',
  precticeName: 'Nombre de la practica',
  time: '01:30 HORA',
  meterials: ['kit de arduino', 'Laptop', 'Internet', 'componentes'],
  objective: 'Objectivo de la practica',
  steps: 'Procedimientos de la practica',
};

Practice.propTypes = {
  precticeName: string.isRequired,
  color: string,
  time: string.isRequired,
  meterials: arrayOf(string).isRequired,
  objective: string.isRequired,
  steps: string.isRequired,
};
