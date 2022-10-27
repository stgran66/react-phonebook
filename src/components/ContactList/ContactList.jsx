import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from 'redux/selectors';
import { getFilter } from 'redux/selectors';
import { deleteContact } from 'redux/contactsSlice';
import { ContactEl } from '../ContactEl/ContactEl';
import { StyledContactList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <ContactEl
          contact={contact}
          key={contact.id}
          onDelete={() => dispatch(deleteContact(contact.id))}
        />
      ))}
    </StyledContactList>
  );
};
