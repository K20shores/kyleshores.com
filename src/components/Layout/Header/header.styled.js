import styled from 'styled-components';


const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  padding: 20px 1em;

  border-bottom: 2px solid var(--color-grey);

  font-family: var(--fontFamily-sans);

  a {
    padding: 0 var(--spacing-2);
    display: inline-flex;
  }
  position: relative;
`

const StyledMenu = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;

  li {
    display: inline-block;
    margin: 0;
  }

  transition: max-height ${({ theme }) => theme.transitionSpeed}s ease, opacity ${({ theme }) => theme.transitionSpeed}s ease;

  a {
    color: var(--color-primary);
    transition: 0.2s ease-in-out;
    font-weight: var(--fontWeight-medium);

    &:hover {
      color: var(--color-accent);
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    visibility: ${({ open }) => (open ? "visible" : "hidden")};
    opacity: ${({ open }) => (open ? "1" : "0")};
    display: flex;
    width: 100%;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.colors.blackTransparent};
    height: 100vh;
    position: absolute;
    top: 0;
    right: 0;
    margin: 0 auto;

    li {
      display: flex;
      justify-content: center;
      width: 100%;
    }

    a {
      border: none;
      background-color: unset;
      color: var(--color-primary);
      font-size: ${({ open }) => (open ? "3rem" : "inherit")};
    }
  }
`

export {
  StyledHeader,
  StyledMenu
}