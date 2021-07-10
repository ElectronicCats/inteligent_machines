import React from 'react';
import { arrayOf, shape, string, element } from 'prop-types';
import { TabPanel } from '@zendeskgarden/react-tabs';

import { DropContent } from '../../components/DropContent';
import { CardGrids } from '../../components/UI/Cards';
import { ContainerTitle } from '../../components/UI/Content';
import { DownLoadButton } from '../../components/Buttons';
export const CourseClass = ({
  downloadLabel,
  pathToDownloadFile,
  downloadFileName,
  content,
}) => {
  return (
    <TabPanel item='tab-2'>
      <CardGrids>
        <ContainerTitle size='3' color='var(--color-green)'>
          CONTENIDO DE CLASE
        </ContainerTitle>
        <DownLoadButton
          pathToFile={pathToDownloadFile}
          downloadName={downloadFileName}
          bgColor='var(--color-green)'
          label={downloadLabel}
        />
      </CardGrids>

      {content.map(
        ({
          title,
          description,
          videoClass = 'https://player.vimeo.com/video/522444610',
        }) => {
          return (
            <DropContent key={title} title={title} color='var(--color-green)'>
              {description}
              <iframe
                id={`my_frame ${title}`}
                title={`my video ${title}`}
                src={videoClass}
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
            </DropContent>
          );
        }
      )}
    </TabPanel>
  );
};

CourseClass.defaultProps = {
  downloadFileName: 'Nombre del archivo a descargar',
  downloadLabel: 'logo_inteligent',
  pathToDownloadFile: '/assets/logo_desk.png',
  content: [
    {
      title: 'Clase 1',
      description: <h1>Hello</h1>,
    },
    {
      title: 'Clase 2',
      description: (
        <div>
          <h2>Welcome</h2> <p>How are you</p>
        </div>
      ),
    },
    {
      title: 'Clase 3',
      description: (
        <div>
          <p>World</p>
        </div>
      ),
    },
  ],
};

CourseClass.propTypes = {
  downloadFileName: string,
  downloadLabel: string,
  pathToDownloadFile: string,
  content: arrayOf(
    shape({
      title: string,
      description: element,
      videoClass: string,
    })
  ),
};
