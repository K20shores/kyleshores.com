import styled from 'styled-components';

import StormyAtlantic from '../../../images/stormy-atlantic-background.jpg'

const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: space-around;
  color: var(--color-white);
  width:300px;
  overflow-x: clip;

  a {
    text-decoration: none;
  }

  h1 {
    margin: unset;
    color: var(--color-white);
    font-weight: var(--fontWeight-semibold);
  }
  font-family: var(--fontFamily-sans);
  position: relative;

  background-image: url(${StormyAtlantic});
  background-size: cover;
  background-repeat:no-repeat;
  background-position: center center;

  box-shadow: inset 0 0 0 100vmax rgba(0, 0, 0, .3);

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    padding: var(--spacing-4);
  }
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

  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: none;
  }
`

const StyledProfilePicture = styled.img`
  margin-bottom: var(--spacing-0);
  border-radius: 100%;
  border: 1px solid var(--color-primary);
  width: 150px;
  height: 150px;
  @media only screen and (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    width: 70px;
    height: 70px;
  }
`

const StyledMenu = styled.ul`
  display: inline-block;
  list-style-type: none;
  margin: 0;
  padding: 0;

  transition: transform ${({ theme }) => theme.transitionSpeed}s linear;

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

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.grey};
    transform: ${({ open }) => open ? 'translateX(0)' : 'translateX(100%)'};
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 auto;

    li {
      width: 100%;
    }

    a {
      border: none;
      background-color: unset;
      color: var(--color-primary);
      font-size: 3rem;
    }
  }
`

export {
  StyledHeader,
  StyledHR,
  StyledProfilePicture,
  StyledMenu
}