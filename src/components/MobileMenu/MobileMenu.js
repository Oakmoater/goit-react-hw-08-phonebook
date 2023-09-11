import { AuthNav } from 'components/AuthNav/AuthNav';
import { Navigation } from 'components/Navigation/Navigation';
import { CloseButtonIcon, MenuButtonIcon } from 'components/UI/icons';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'hooks/useAuth';
import { useEffect, useRef, useState } from 'react';
import { MobileMenuStyled } from './MobileMenu.styled';

export const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const menuRef = useRef();
  const { isLoggedIn } = useAuth();

  useEffect(() => {
    const handleDocumentClick = event => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleDocumentClick);

    return () => {
      document.removeEventListener('mousedown', handleDocumentClick);
    };
  }, []);

  const closeMenu = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
    }, 300);
  };

  const handleButtonClick = () => {
    if (isOpen) {
      closeMenu();
    } else {
      setIsOpen(true);
    }
  };

  return (
    <MobileMenuStyled>
      <button className="menu-button" type="button" onClick={handleButtonClick}>
        {isOpen && <CloseButtonIcon className="menu-icon" />}
        {!isOpen && <MenuButtonIcon className="menu-icon" />}
      </button>

      {isOpen && (
        <div className={`menu ${isClosing ? 'hide' : ''}`} ref={menuRef}>
          {isLoggedIn ? (
            <UserMenu closeMenu={closeMenu} />
          ) : (
            <AuthNav closeMenu={closeMenu} />
          )}
          <Navigation closeMenu={closeMenu} />
        </div>
      )}
    </MobileMenuStyled>
  );
};
