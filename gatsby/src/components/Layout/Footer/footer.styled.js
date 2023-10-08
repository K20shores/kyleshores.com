import styled from "styled-components"

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  font-family: var(--fontFamily-sans);
  font-size: var(--fontSize-0);
  border-top: 1px solid var(--color-accent);

  padding: var(--spacing-3) var(--spacing-2);

  p {
    margin: 0;
  }
`

export { StyledFooter }
