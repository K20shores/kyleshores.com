import styled from 'styled-components';

const StyledLayout = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  overflow-y: hidden;
`

const StyledContent = styled.div`
  flex: 3;
  display: flex;
  flex-direction: column;
  overflow: auto;
`

const StyledMain = styled.main`
  flex: 5;
  padding: 0 10%;
`

export {
  StyledLayout,
  StyledContent,
  StyledMain,
}