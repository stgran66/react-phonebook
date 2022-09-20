import PropTypes from 'prop-types';
import { ContactEl } from '../ContactEl/ContactEl';
import { StyledContactList } from './ContactList.styled';

export const ContactList = ({ filteredContacts, onDelete }) => {
  return (
    <StyledContactList>
      {filteredContacts.map(contact => (
        <ContactEl
          contact={contact}
          key={contact.id}
          onDelete={onDelete}
        ></ContactEl>
      ))}
    </StyledContactList>
  );
};

ContactList.propTypes = {
  filteredContacts: PropTypes.arrayOf(PropTypes.objectOf(PropTypes.string))
    .isRequired,
  onDelete: PropTypes.func.isRequired,
};
