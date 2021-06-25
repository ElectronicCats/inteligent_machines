import React from 'react';
import { TabPanel } from '@zendeskgarden/react-tabs';

import { DownLoadButton } from '../../components/Buttons';
import { arrayOf, shape, string, object } from 'prop-types';
import { ContainerTitle } from '../UI/Content';
import samResourse from '../../assets/sam/resourse-sam.svg';
import { FlexImages } from '../Devices';

export const Resourses = ({ mainLink, color, links }) => {
  return (
    <TabPanel item='tab-3'>
      <section
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <DownLoadButton
          pathToFile={mainLink.pathToFile}
          downloadName={mainLink.downloadName}
          bgColor={color}
          label={mainLink.label}
        />
        <div style={{ display: 'flex' }}>
          <img src={samResourse} alt='Sam ' style={{ width: '300px' }} />
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-around',
            }}
          >
            {links.map(({ label, pathToFile, downloadName }) => {
              return (
                <a key={label} href={pathToFile} download={downloadName}>
                  <ContainerTitle color={color} size={3}>
                    {label}
                  </ContainerTitle>
                </a>
              );
            })}
            <FlexImages imgWidth='150px' imgHeight='100px' />
          </div>
        </div>
      </section>
    </TabPanel>
  );
};

Resourses.defaultProps = {
  mainLink: {
    pathToFile: '/assets/logo_desk.png',
    downloadName: 'lodo_inteligent',
    label: 'Recurso de descargar',
  },
  links: [
    {
      pathToFile: '/assets/logo_desk.png',
      downloadName: 'lodo_inteligent',
      label: 'Link a Lectura',
    },
    {
      pathToFile: '/assets/logo_desk.png',
      downloadName: 'lodo_inteligent',
      label: 'Link a Video de Complemento',
    },
  ],
  color: 'var(--color-orange)',
};

Resourses.propTypes = {
  mainLink: shape({
    pathToFile: string.isRequired,
    downloadName: string.isRequired,
    label: string.isRequired,
  }),
  links: arrayOf(object),
  color: string,
};
