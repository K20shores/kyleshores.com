import styled from 'styled-components';

export const StyledBurger = styled.button`
  display: none;
  @media (max-width: ${({ theme }) => theme.breakpoints.tablet}px) {
    display: flex;
  }
  transition: all ${({ theme }) => theme.transitionSpeed}s linear;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;
  span {
    width: 2rem;
    height: 0.25rem;
    background: ${({ theme, open }) =>  theme.colors.primary };
    border-radius: 10px;
    transition: all ${({ theme }) => theme.transitionSpeed}s linear;
    position: relative;
    transform-origin: 1px;
    :first-child {
      transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
    }
    :nth-child(2) {
      opacity: ${({ open }) => open ? '0' : '1'};
      transform: ${({ open }) => open ? 'translateX(20px)' : 'translateX(0)'};
    }
    :nth-child(3) {
      transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
    }
  }
`;