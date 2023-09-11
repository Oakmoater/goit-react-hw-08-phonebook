import styled from 'styled-components';

export const Form = styled.form`
  margin-inline: auto;
  width: 95%;
  max-width: 500px;
  font-size: ${props => props.theme.fontSize.text};

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    padding: 10px;
    border: 1px solid ${props => props.theme.colors.secondary};
    border-radius: 5px;
    box-shadow: ${props => props.theme.shadows.box};
  }

  .icon {
    position: absolute;
    fill: ${props => props.theme.colors.secondary};
    width: 1.4em;
    height: 1.4em;
    top: calc(${props => props.theme.fontSize.text} * 2 - 5px);
    left: 0.2em;
  }

  @keyframes slideInOut {
    0% {
      transform: translateX(-300%);
    }
    30% {
      transform: translateX(0);
    }
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  animation: fadeIn 1s ease-in, slideInOut 1s ease-in;
`;

export const Label = styled.label`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${props => props.theme.colors.secondary};

  &:not(:first-child) {
    margin-top: 1em;
  }
`;

export const Input = styled.input`
  display: block;
  padding: 0.3em;
  border-radius: 5px;
  border: 1px solid ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.secondary};
  background-color: ${props => props.theme.colors.primary};
  outline: none;

  ${props => props.icon && `padding-left: 1.8em;`}
`;

export const FormField = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 5px;
  color: ${props => props.theme.colors.secondary};

  &:not(:first-child) {
    margin-top: 1em;
  }

  .icon {
    position: absolute;
    fill: ${props => props.theme.colors.secondary};
    width: 1.4em;
    height: 1.4em;
    top: 0.2em;
    left: 0.2em;
  }
`;
