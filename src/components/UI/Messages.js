const { default: styled } = require('styled-components');

export const InfoMessage = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.text};
  color: ${props => props.theme.colors.info};
`;

export const ErrorMessage = styled.p`
  text-align: center;
  font-weight: 500;
  font-size: ${props => props.theme.fontSize.text};
  color: ${props => props.theme.colors.error};

  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 1s ease-in;
`;
