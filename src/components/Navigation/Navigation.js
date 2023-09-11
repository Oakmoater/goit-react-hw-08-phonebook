import { NavLinkStyled } from 'components/AuthNav/AuthNav.styled';
import { useAuth } from 'hooks/useAuth';
import { NavigationStyled } from './Navigation.styled';

export const Navigation = ({ closeMenu }) => {
  const { isLoggedIn } = useAuth();
  const handleClick = () => {
    if (closeMenu) {
      closeMenu();
    }
  };

  return (
    <>
      <NavigationStyled as="nav" flex gap="1em">
        <NavLinkStyled to="/" onClick={handleClick}>
          Home
        </NavLinkStyled>
        {isLoggedIn && (
          <NavLinkStyled to="/contacts" onClick={handleClick}>
            Contacts
          </NavLinkStyled>
        )}
      </NavigationStyled>
    </>
  );
};
