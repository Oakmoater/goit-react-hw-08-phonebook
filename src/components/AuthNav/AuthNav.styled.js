import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const NavLinkStyled = styled(NavLink)`
  color: ${props => props.theme.colors.secondary};

  &.active,
  &:hover {
    border-bottom: 2px ${props => props.theme.colors.secondary} solid;
  }
`;

export const AuthNavContainer = styled.div`
  display: flex;
  gap: 1rem;
`;
