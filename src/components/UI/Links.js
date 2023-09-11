import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const LinkStyled = styled(Link)`
  color: ${props => props.theme.colors.link};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hover};
  }
`;
