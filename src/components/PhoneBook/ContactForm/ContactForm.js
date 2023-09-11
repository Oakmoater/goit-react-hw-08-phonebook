import { Button } from 'components/UI/Button.styles';
import { Wrapper } from 'components/UI/Wrapper/Wrapper';
import { useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addContactAsync } from 'redux/contacts/slice';
import {
  ContactFormStyled,
  ContactInput,
  ContactLabel,
} from './ContactForm.styled';
import { validateName, validateNumber } from 'utilities/validation';
import { ErrorMessage } from 'components/UI/Messages';

export const ContactForm = () => {
  const dispatch = useDispatch();
  const loadingStatus = useSelector(state => state.contacts.isLoading);
  const nameInputRef = useRef();
  const numberInputRef = useRef();
  const [nameError, setNameError] = useState(false);
  const [numberError, setNumberError] = useState(false);

  const handleSubmit = event => {
    event.preventDefault();
    const name = nameInputRef.current.value;
    const number = numberInputRef.current.value;

    setNameError(!validateName(name));
    setNumberError(!validateNumber(number));
    if (!validateName(name) || !validateNumber(number)) return;

    dispatch(
      addContactAsync({
        name,
        number,
      })
    );

    event.currentTarget.reset();
  };

  return (
    <>
      {nameError && (
        <ErrorMessage>
          'Name may contain only letters, apostrophe, dash and spaces'
        </ErrorMessage>
      )}
      {numberError && (
        <ErrorMessage>
          'Phone number must be digits and can contain spaces, dashes,
          parentheses and can start with +'
        </ErrorMessage>
      )}
      <Wrapper flex>
        <ContactFormStyled onSubmit={handleSubmit} autoComplete="off">
          <ContactLabel htmlFor="name">Name</ContactLabel>
          <ContactInput
            id="name"
            className={nameError ? 'error' : ''}
            ref={nameInputRef}
            type="text"
            name="name"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
          <ContactLabel htmlFor="number">Number</ContactLabel>
          <ContactInput
            id="number"
            className={numberError ? 'error' : ''}
            ref={numberInputRef}
            type="tel"
            name="number"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
          />
          <Button type="submit" disabled={loadingStatus}>
            Add contact
          </Button>
        </ContactFormStyled>
      </Wrapper>
    </>
  );
};
