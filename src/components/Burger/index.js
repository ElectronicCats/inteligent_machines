import React from 'react';
import { StyledBurger } from '../UI/Header';
import { bool, func } from 'prop-types';

export const Burger = ({ open, setOpen }) => {
  return (
    <StyledBurger
      open={open}
      onClick={() => setOpen(!open)}
      aria-label='menu_button'
    >
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};
Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};
