import styled from 'styled-components';

import StormyAtlantic from '../../images/stormy-atlantic-background.jpg'

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow-y: hidden;

  /* Medium devices (landscape tablets, 768px and up) */
  @media only screen and (min-width: 768px) {
    flex-direction: row;
  }
`

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

  hr {
    height: 30px;
    width: 60%;
    border-style: solid;
    border-width: 1px 0 0 0;
    border-radius: 20px;
    border-color: var(--color-accent);
  }

  hr:before {
    display: block;
    content: "";
    border-color: white;
    height: 30px;
    margin-top: -31px;
    border-style: solid;
    border-width: 0 0 1px 0;
    border-radius: 20px;
  }

  .bio-avatar {
    margin-bottom: var(--spacing-0);
    border-radius: 100%;
    border: 2px solid var(--color-accent);
  }

  ul {
    list-style-type: none;
    margin-left: 0;
    display: inline-block;


    a {
      color: var(--color-accent);
    }
    
    li {
      border: 1px solid;
      border-radius: 5px;
      border-color: black;
      background-color: black;
      padding: var(--spacing-2);
      display: flex;
      justify-content: center;
    }
  }
`

const StyledContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const StyledMain = styled.main`
  flex: 5;
  overflow-y: scroll;
  padding: 0 10%;
`

const StyledFooter = styled.footer`
flex: 1;
display: flex;
justify-content: center;
align-items: end;
max-height: 15%;
flex-direction: column;
align-items: center;
font-size: var(--fontSize-0);
border-top: 1px solid var(--color-accent);

/* Medium devices (landscape tablets, 768px and up) */
@media only screen and (min-width: 768px) {
  align-items: flex-end;
}

.copyright {
  padding-right: var(--spacing-3);
}

.social {
  display: inline-block;
  @media only screen and (min-width: 768px) {
    display: none;
  }

  svg {
    color: black;
  }
}
`

export {
  StyledLayout,
  StyledHeader,
  StyledHeaderContent,
  StyledContent,
  StyledMain,
  StyledFooter
}