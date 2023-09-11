import { UserMenu, AuthNav, Navigation, MobileMenu } from 'components/index';
import { Container } from 'components/UI/Container/Container';
import { MainTitle } from 'components/UI/Title.styles';
import { useAuth } from 'hooks/useAuth';
import { useTablet } from 'hooks/useWindowSize';
import { Link } from 'react-router-dom';
import { Header } from './AppBar.styled';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  const isTablet = useTablet();

  return (
    <Header>
      <Container flex jc="space-between" ai="baseline">
        {isTablet && <Navigation />}
        <MainTitle>
          {!isTablet ? <Link to="/">PhoneBook</Link> : 'PhoneBook'}
        </MainTitle>
        {isLoggedIn ? isTablet && <UserMenu /> : isTablet && <AuthNav />}
        {!isTablet && <MobileMenu />}
      </Container>
    </Header>
  );
};
