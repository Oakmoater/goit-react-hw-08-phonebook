import styled from 'styled-components';

export const UserMenuStyled = styled.div`
  display: grid;
  font-size: 0.8rem;
  grid-template-columns: 2em 1fr;
  grid-template-rows: 2;
  grid-gap: 0.3rem;
  align-items: baseline;

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    font-size: 1rem;
  }
  button {
  @media screen and (max-width: ${props => props.theme.breakpoints.preTablet}) {
    grid-area: 2 / 1 / 2 / 3;
  }

  p {
    font-weight: 500;
  }
`;
