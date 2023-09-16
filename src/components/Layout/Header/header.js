import React, { useState } from "react"
import { Link } from "gatsby"
import { bool } from "prop-types"

import { StyledHeader, StyledMenu } from "./header.styled"

import { Burger } from "../"
import Logo from "../../../../static/images/ks-icon.svg"

import SvgDisplay from "../../SVG/svg"

const Header = ({ desktop }) => {
  const [open, setOpen] = useState(false)

  const handleClick = (e) => {
    if (open) {
      setOpen(false);
    }
  }

  const sz = 25;

  return (
    <StyledHeader onClick={handleClick}>
      <Link to="/" aria-label="An SVG with the letters KS. Press to go to the home screen.">
        <SvgDisplay uri={Logo} width={sz} height={sz} />
      </Link>
      <StyledMenu open={open}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/blog">Blog</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
        <li>
          <Link to="/research">Research</Link>
        </li>
        <li>
          <Link to="/store">Store</Link>
        </li>
      </StyledMenu>
      <Burger open={open} setOpen={setOpen} aria-controls={"main-menu"} />
    </StyledHeader>
  )
}

Header.propTypes = {
  desktop: bool.isRequired,
}

export default Header
