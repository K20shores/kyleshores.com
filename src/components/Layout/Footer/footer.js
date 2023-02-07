import React from 'react';
import { StyledFooter } from './footer.styled';
import { Social } from "../../"

import { object } from 'prop-types';

const Footer = ({ author }) => {
  return (
    <StyledFooter>
      <div className='social'>
        <Social/>
      </div>
      <div className='copyright'>
        © {new Date().getFullYear()} {author?.name}
      </div>
    </StyledFooter>
  )
}

Footer.propTypes = {
  author: object.isRequired,
};

export default Footer;