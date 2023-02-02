import styled from 'styled-components';

const StyledProductCard = styled.div`
  padding: 1rem;
  margin-bottom: 1rem;
  box-shadow: 5px 5px 25px 0 rgba(46,61,73,.2);
  background-color: #fff;
  border-radius: 6px;
  max-width: 300px;
`

const StyledProductForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;

  fieldset {
    display: flex;
    flex-direction: column;
    align-items: center;
    border: none;
  }
`

const StyledButton = styled.button`
  font-size: 13px;
  text-align: center;
  color: ${({ theme }) => theme.colors.accent};
  background-color: black;
  padding: 12px 60px;
  box-shadow: 2px 5px 10px rgba(0,0,0,.1);
  border-radius: 6px;
  border: none;
  letter-spacing: 1.5px;
  transition: all .3s ease-in-out;

  opacity: ${(props) => props.disabled ? 0.5 : 1};
  cursor: ${(props) => props.disabled ? 'not-allowed' : 'allowed'};

  &:hover {
      transform: scale(1.1);
      background-color: ${({ theme }) => theme.colors.accent};
      color: black;
  }
}
`

export {
  StyledProductCard,
  StyledProductForm,
  StyledButton
}