import styled from 'styled-components';

const StyledFooter = styled.footer`
display: flex;
justify-content: center;
align-items: end;
flex-direction: column;
align-items: center;
font-size: var(--fontSize-0);
border-top: 1px solid var(--color-accent);

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
    color: var(--color-black);
  }
}
`

export {
  StyledFooter
}