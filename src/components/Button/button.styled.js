import styled from 'styled-components';

const StyledButton = styled.button`
  font-size: 13px;
  text-align: center;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0, 0, 0, 0.1);
  border-radius: 6px;
  border: none;
  letter-spacing: 1.5px;
  transition: all ${({ theme }) => theme.transitionSpeed}s linear;
  background-color: ${({ theme }) => theme.colors.accent};

  opacity: ${(props) => (props.disabled ? 0.5 : 1)};
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};

  &:hover {
    transform: scale(1.02);
    color: ${({ theme }) => theme.colors.accent};
    background-color: ${({ theme }) => theme.colors.primary};
  }
`;

export { StyledButton };
