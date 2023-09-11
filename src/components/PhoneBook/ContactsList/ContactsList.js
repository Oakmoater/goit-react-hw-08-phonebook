import { useDispatch, useSelector } from 'react-redux';
import { ListItem } from './ListItem';
import { fetchContacts, selectFilteredContactsIds } from 'redux/contacts/slice';
import { useEffect } from 'react';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { ContactListStyled } from './ContactsList.styled';
import { InfoMessage } from 'components/UI/Messages';

export const ContactsList = () => {
  const dispatch = useDispatch();
  const contactIds = useSelector(selectFilteredContactsIds);
  const filter = useSelector(state => state.filter);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const renderedListItems = contactIds.map(contactId => (
    <ListItem id={contactId} key={contactId} />
  ));

  const emptyText =
    !renderedListItems.length && !filter.length
      ? 'No contacts have been added yet ¯\\_ (ツ)_/¯'
      : !renderedListItems.length && filter.length
      ? 'No names or numbers were found ¯\\_ (ツ)_/¯'
      : null;

  return (
    <Wrapper>
      {/* {isTablet && <Title>Phonebook</Title>} */}
      {renderedListItems.length ? (
        <ContactListStyled>{renderedListItems}</ContactListStyled>
      ) : (
        <InfoMessage>{emptyText}</InfoMessage>
      )}
    </Wrapper>
  );
};
