import { Form, Input, Label } from 'components/UI/Forms.styled';
import { styled } from 'styled-components';

export const ContactFormStyled = styled(Form)`
  @media screen and (max-width: ${props => props.theme.breakpoints.preTablet}) {
    display: grid;
    grid-template-columns: minmax(10px, 3.5rem) minmax(10px, auto);
    grid-template-rows: auto auto auto;
  }

  gap: 0.5rem;

  button {
    @media screen and (max-width: ${props =>
        props.theme.breakpoints.preTablet}) {
      grid-area: 3 / 2 /3 / 3;
      margin-left: auto;
      width: 50%;
    }

    @media screen and (max-width: ${props => props.theme.breakpoints.l}) {
      width: 70%;
    }

    @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
      /* width: 50%; */
    }
  }

  @media screen and (min-width: ${props => props.theme.breakpoints.tablet}) {
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;
    border: none;
    max-width: 700px;
    align-items: center;
    justify-content: center;
  }
`;

export const ContactInput = styled(Input)`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  &::placeholder {
    @media screen and (max-width: ${props => props.theme.breakpoints.preL}) {
      font-size: 0.95rem;
    }
  }

  &.error {
    border-width: 2px;
    border-color: ${props => props.theme.colors.error};
  }

  &.filter {
    margin-inline: auto;
    width: 90%;
    max-width: 500px;
    text-align: center;
    box-shadow: ${props => props.theme.shadows.box};
  }
`;

export const ContactLabel = styled(Label)`
  /* display: flex;
  flex-direction: row; */
  margin: 0;
  flex-direction: column;
  justify-content: center;
  align-items: baseline;

  &:not(:first-child) {
    margin-top: 0;
  }
`;
