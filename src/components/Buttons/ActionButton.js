import React from 'react';
import { RoundButton } from './styles';
import { string, func, node } from 'prop-types';

export const ActionButton = ({
  children,
  bgColor,
  color,
  onAction,
  buttonType = 'submit',
  ...props
}) => {
  return (
    <RoundButton
      bgColor={bgColor}
      color={color}
      type={buttonType}
      onClick={onAction}
      {...props}
    >
      {children}
    </RoundButton>
  );
};

ActionButton.propTypes = {
  buttonType: string,
  onAction: func,
  children: node,
  bgColor: string,
  color: string,
};
