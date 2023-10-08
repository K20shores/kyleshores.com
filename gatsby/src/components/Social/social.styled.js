import styled from 'styled-components';

const StyledSocialList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const StyledSocialLi = styled.li`
  display: inline-block;
  padding: 0 var(--spacing-1);
  text-align: center;
  margin: 0;

  a {
    display: inherit;
  }
`;

export {
  StyledSocialList,
  StyledSocialLi,
};
