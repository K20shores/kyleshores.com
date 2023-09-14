import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
`

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`

const StyledMain = styled.main`
  padding: 0 10%;
  flex-grow: 1;
`

export {
  StyledLayout,
  StyledContent,
  StyledMain,
}