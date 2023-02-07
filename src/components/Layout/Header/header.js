import React from 'react';
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { StyledHeader, StyledHeaderContent } from './header.styled';
import { Social } from "../../"

import { object } from 'prop-types';

const Header = ({ author }) => {
  return (
    <StyledHeader>
      <StyledHeaderContent>
        <Link to="/">
        <StaticImage
          className="bio-avatar"
          layout="fixed"
          formats={["auto", "webp", "avif"]}
          src="../../images/profile-pic.png"
          width={150}
          height={150}
          quality={100}
          alt="Profile picture"
        />
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