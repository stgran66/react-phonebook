import { useSelector } from 'react-redux';
import { selectContacts, selectFilter } from 'redux/selectors';
import { Contact } from '../Contact/Contact';
import { StyledContactList } from './ContactList.styled';

export const ContactList = () => {
  const contacts = useSelector(selectContacts);
  const filter = useSelector(selectFilter);

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter)
  );

  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <Contact contact={contact} key={contact.id} />
      ))}
    </StyledContactList>
  );
};
