import React from 'react';
import { Link } from "gatsby"

import ProfilePic from "../../../images/profile-pic.png"

import { StyledHeader, StyledHeaderContent, StyledHR, StyledProfilePicture, StyledMenu } from './header.styled';
import { Social } from "../../"

import { object } from 'prop-types';

const Links = () => {
  return (
    <StyledMenu>
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
    </StyledMenu>
  )
}

const Header = ({ author }) => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Link to="/">
          <StyledProfilePicture src={ProfilePic} alt="Protile" />
        </Link>
        <StyledHR />
        <Link to="/">
          <h1>
            {author.name}
          </h1>
        </Link>
        <Social/>
        <Links/>
      </StyledHeaderContent>
    </StyledHeader>
  )
}

Header.propTypes = {
  author: object.isRequired,
};

export default Header;