import React from 'react';
import { StyledFooter } from './footer.styled';
import { Social } from "../../"

import { object } from 'prop-types';

const Footer = ({ author }) => {
  return (
    <StyledFooter>
      <Social />
      <p >
        &copy; {new Date().getFullYear()} {author?.name}
      </p>
    </StyledFooter>
  )
}

Footer.propTypes = {
  author: object.isRequired,
};

export default Footer;