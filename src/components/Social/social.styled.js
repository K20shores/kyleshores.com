import styled from 'styled-components';

const StyledSVG = styled.svg`
  color: var(--color-white);
  width: 2.5em;
  height: 2.5em;
  stroke: currentColor;
  stroke-width: 0;
  fill: currentColor;
`

const StyledSocialList = styled.ul`
  list-style-type: none;
  margin-left: 0;
`

const StyledSocialLi = styled.li`
  display: inline
`

export {
  StyledSVG,
  StyledSocialList,
  StyledSocialLi,
}