import React from 'react';
import { DownloadBtn } from './styles';
import { string } from 'prop-types';
import { IconDownload } from '../UI/Icons';

export const DownLoadButton = ({
  pathToFile,
  downloadName,
  label,
  bgColor,
}) => {
  return (
    <DownloadBtn bgColor={bgColor} href={pathToFile} download={downloadName}>
      <span>{label}</span>
      <div>
        <IconDownload />
      </div>
    </DownloadBtn>
  );
};

DownLoadButton.propTypes = {
  pathToFile: string.isRequired,
  downloadName: string.isRequired,
  label: string.isRequired,
  bgColor: string,
};
