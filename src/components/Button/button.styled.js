import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: ${ ({ theme }) => theme.colors.green };
  color: var(--color-white);
  border: none;
  padding: 6px 20px;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease, color 0.3s ease, border 0.3s ease, transform 0.3s ease;
  border: solid 0.5px transparent;

  &:hover {
    background-color: var(--color-white);
    color: ${ ({ theme }) => theme.colors.green };
    border: 0.5px solid ${ ({ theme }) => theme.colors.green };
  }
  @media (prefers-reduced-motion: reduce) {
    &:hover {
      transform: scale(1.00);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    &:hover {
      transform: scale(1.05);
    }
  }

`

export {
  StyledButton
}