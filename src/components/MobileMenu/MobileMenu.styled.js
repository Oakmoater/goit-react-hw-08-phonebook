import styled from 'styled-components';

export const MobileMenuStyled = styled.div`
  @keyframes slideLeft {
    from {
      transform: translateX(-70%);
    }
    to {
      transform: translateX(0%);
    }
  }

  @keyframes slideRight {
    from {
      transform: translateX(0%);
    }
    to {
      transform: translateX(-100%);
    }
  }

  .menu {
    position: fixed;
    top: 0;
    left: 0;
    width: 70%;
    height: 100%;
    padding: 24px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
    background-color: ${props => props.theme.colors.primary};
    animation: slideLeft 0.4s ease-in-out forwards;
    z-index: 999;
    box-shadow: ${props => props.theme.shadows.box};
  }

  .menu.hide {
    animation: slideRight 0.4s ease-in-out forwards;
  }

  .menu-button {
    margin-left: auto;
    padding: 0;
    vertical-align: middle;
    fill: ${props => props.theme.colors.secondary};
    border: none;
    background-color: transparent;
    cursor: pointer;
  }

  .menu-icon {
    width: 2rem;
    height: 2rem;
  }
`;
