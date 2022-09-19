import { ContactEl } from '../ContactEl/ContactEl';

export const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <ul>
      {filteredContacts.map(contact => (
        <ContactEl
          contact={contact}
          key={contact.id}
          onDelete={onDelete}
        ></ContactEl>
      ))}
    </ul>
  );
};
