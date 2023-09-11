import { ContactForm, ContactsList, Filter } from 'components/PhoneBook/index';
import { Helmet } from 'react-helmet';

const Contacts = () => {
  return (
    <>
      <Helmet>
        <title>Contacts</title>
      </Helmet>
      <ContactForm />
      <Filter />
      <ContactsList />
    </>
  );
};

export default Contacts;
