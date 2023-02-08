import styled from 'styled-components';

import StormyAtlantic from '../../../images/stormy-atlantic-background.jpg'

const StyledHeader = styled.header`
  flex: 2;
  font-family: var(--fontFamily-sans);
  position: relative;

  background-image: url(${StormyAtlantic});
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;

  box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, .3);
`

const StyledHR = styled.hr`
  height: 30px;
  width: 60%;
  border-style: solid;
  border-width: 1px 0 0 0;
  border-radius: 20px;
  border-color: var(--color-accent);
  overflow: visible;

  &:before {
    display: block;
    content: "";
    border-color: var(--color-accent);
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }
`

const StyledProfilePicture = styled.img`
  margin-bottom: var(--spacing-0);
  border-radius: 100%;
  border: 1px solid var(--color-primary);
  width: 150px;
  height: 150px;
`

const StyledHeaderContent = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: white;
  height: 100%;
  z-index: 1;
  position: relative;

  a {
    text-decoration: none;
  }

  h1 {
    margin: unset;
    color: white;
    font-weight: var(--fontWeight-semibold);
  }
`

const StyledMenu = styled.ul`
  list-style-type: none;
  margin-left: 0;
  display: inline-block;

  a {
    border: 1px solid;
    border-radius: 5px;
    border-color: var(--color-primary);
    background-color: var(--color-primary);
    padding: var(--spacing-2);
    display: flex;
    justify-content: center;
    color: var(--color-accent);
    transition: 0.2s ease-in-out;
    font-weight: var(--fontWeight-medium);

    &:hover {
      border-color: var(--color-accent);
      background-color: var(--color-accent);
      color: var(--color-primary);
    }
  }
`

export {
  StyledHeader,
  StyledHeaderContent,
  StyledHR,
  StyledProfilePicture,
  StyledMenu
}