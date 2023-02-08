import React from 'react';
import { Link } from "gatsby"

import ProfilePic from "../../../images/profile-pic.png"

import { StyledHeader, StyledHeaderContent } from './header.styled';
import { Social } from "../../"

import { object } from 'prop-types';

const Header = ({ author }) => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Link to="/">
          <img src={ProfilePic} className="bio-avatar" alt="Profile" />
        </Link>
        <hr/>
        <Link to="/">
          <h1>
            {author.name}
          </h1>
        </Link>
        <Social/>
        <ul >
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/thoughts">
              Thoughts
            </Link>
          </li>
          <li>
            <Link to="/research">
              Research
            </Link>
          </li>
          <li>
            <Link to="/store">
              Store
            </Link>
          </li>
        </ul>
      </StyledHeaderContent>
    </StyledHeader>
  )
}

Header.propTypes = {
  author: object.isRequired,
};

export default Header;