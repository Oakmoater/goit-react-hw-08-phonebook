import { useDispatch, useSelector } from "react-redux";
import { deleteContact } from 'redux/operations';
import { selectFilteredContacts } from 'redux/selectors';


const ContactList = () => {
  const dispatch = useDispatch();

  const filteredContacts = useSelector(selectFilteredContacts);

  return (
    <ul>
      {filteredContacts.map(({ id, name, phone }) => (
        <li key={id}>
          <span>{name}:</span>
          <span>{phone}</span>
          <button onClick={() => dispatch(deleteContact(id))}>Delete</button>
        </li>
      ))}
    </ul>
  );
};

export default ContactList;