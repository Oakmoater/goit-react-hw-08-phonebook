import styled from 'styled-components';

export const LinkButton = styled.button`
  font-weight: 500;
  color: ${props => props.theme.colors.link};
  background-color: transparent;
  border: none;
  transition: ${props => props.theme.animations.hover};

  &:hover,
  &:focus {
    color: ${props => props.theme.colors.hover};
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const Button = styled.button`
  padding: 6px 12px;
  font-weight: 500;
  color: ${props => props.theme.colors.buttonText};
  background-color: ${props => props.theme.colors.buttonBg};
  border: none;
  border-radius: 5px;
  transition: ${props => props.theme.animations.hover};

  &:hover,
  &:focus {
    background-color: ${props => props.theme.colors.hover};
  }
`;

export const ButtonIcon = styled.button`
  display: flex;
  width: 2em;
  height: 2em;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border: none;

  &:hover,
  &:focus {
    cursor: pointer;
  }
`;
