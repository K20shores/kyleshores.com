import React from 'react';
import { bool, func, node } from 'prop-types';
import { StyledButton } from "./button.styled"
 
const Button = ({ onClick, children, disabled, }) => {
  return (
    <StyledButton onClick={onClick} disabled={disabled}>
      {children}
    </StyledButton>
  )
}

Button.propTypes = {
  onClick: func, // to handle onClick functions
  children: node, // make the component able to receive children elements
  disabled: bool, // make the button disabled or not
};

export default Button;