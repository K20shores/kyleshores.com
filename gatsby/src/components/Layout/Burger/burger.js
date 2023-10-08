import React from 'react';
import { bool, func } from 'prop-types';
import { StyledBurger } from './burger.styled';

const Burger = ({ open, setOpen, ...props }) => {

  const handleClick = (e) => {
    e.stopPropagation();
    setOpen(!open);
  }
  
  return (
    <StyledBurger aria-label="Toggle menu" aria-expanded={open} open={open} onClick={handleClick} {...props}>
      <span />
      <span />
      <span />
    </StyledBurger>
  )
}

Burger.propTypes = {
  open: bool.isRequired,
  setOpen: func.isRequired,
};

export default Burger;