import React, { useState, useRef } from 'react';
import { Link } from "gatsby"
import { object } from 'prop-types';

import { StyledHeader, StyledHR, StyledProfilePicture, StyledMenu } from './header.styled';

import { Burger } from "../"
import { Social } from "../../"
import ProfilePic from "../../../images/profile-pic.png"
import { useOnClickOutside } from '../../../hooks';


const Links = ({open}) => {
  return (
    <StyledMenu open={open}>
      <li>
        <Link to="/">
          Home
        </Link>
      </li>
      <li>
        <Link to="/blog">
          Blog
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

const Header = ({ author, desktop }) => {
  const [open, setOpen] = useState(false);
  const node = useRef();
  useOnClickOutside(node, () => setOpen(false));

  return (
    <StyledHeader ref={node}>
      <Link to="/">
        <StyledProfilePicture src={ProfilePic} alt="Protile" />
      </Link>
      {desktop &&
        <>
          <StyledHR />
          <Link to="/">
            <h1> {author.name} </h1>
          </Link> 
          <Social/>
        </> 
      }
      <Links open={open}/>
      {!desktop && <Burger open={open} setOpen={setOpen} aria-controls={"main-menu"} /> }
    </StyledHeader>
  )
}

Header.propTypes = {
  author: object.isRequired,
};

export default Header;