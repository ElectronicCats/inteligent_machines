import React from 'react';
import styled from 'styled-components';

import { string } from 'prop-types';
import guiaCel from '../../assets/devices/guia-cel.svg';
import guiaIpod from '../../assets/devices/guia-ipod.svg';
import guiaUsb from '../../assets/devices/guia-usb.svg';
import guiaAudi from '../../assets/devices/guía-audifonos.svg';
import guiaTab from '../../assets/devices/guía-tablet.svg';
import { CardGrids } from '../../components/UI/Cards';

export const StyledDevice = styled.img`
  justify-self: center;
  width: ${({ imgWidth }) => (imgWidth ? imgWidth : '200px')};
  height: ${({ imgHeight }) => (imgHeight ? imgHeight : '150px')};
`;

export const ImagesGrids = ({ imgWidth, imgHeight }) => {
  return (
    <CardGrids align='center' justify='center'>
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaCel}
        alt='device-cel'
      />
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaIpod}
        alt='device-ipod'
      />
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaUsb}
        alt='device-usb'
      />
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaAudi}
        alt='device-audi'
      />
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaTab}
        alt='device-tab'
      />
    </CardGrids>
  );
};

ImagesGrids.propTypes = {
  imgWidth: string,
  imgHeight: string,
};

export const FlexImages = ({ imgWidth, imgHeight }) => {
  return (
    <div
      style={{
        display: 'grid',
        justifyContent: 'space-evenly',
        gridTemplateColumns: ' 1fr 1fr 1fr',
        alignItems: 'center',
      }}
    >
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaCel}
        alt='device-cel'
      />
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaIpod}
        alt='device-ipod'
      />
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaUsb}
        alt='device-usb'
      />
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaAudi}
        alt='device-audi'
      />
      <StyledDevice
        imgWidth={imgWidth}
        imgHeight={imgHeight}
        src={guiaTab}
        alt='device-tab'
      />
    </div>
  );
};
FlexImages.propTypes = {
  imgWidth: string,
  imgHeight: string,
};
