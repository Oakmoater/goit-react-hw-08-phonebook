import { AuthNavContainer, NavLinkStyled } from './AuthNav.styled';
export const AuthNav = ({ closeMenu }) => {
  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <AuthNavContainer flex gap={'1rem'}>
      <NavLinkStyled to="/login" onClick={handleClick}>
        Log in
      </NavLinkStyled>
      <NavLinkStyled to="/register" onClick={handleClick}>
        Register
      </NavLinkStyled>
    </AuthNavContainer>
  );
};
