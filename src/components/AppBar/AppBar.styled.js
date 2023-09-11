import styled from 'styled-components';

export const Header = styled.header`
  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    background-color: ${props => props.theme.colors.primary};
    box-shadow: ${props => props.theme.shadows.box};
  }
`;
