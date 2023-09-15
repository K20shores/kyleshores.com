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

export {
  StyledProductCard,
  StyledProductForm,
}